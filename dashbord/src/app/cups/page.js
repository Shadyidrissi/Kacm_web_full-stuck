"use client";
import React, { useState, useEffect } from 'react';
import "../globals.css";


// make api or find api and into this api the cup of africa and arab cup and worl cup and fetch it on select 

// and after click save all there  data send it to api i will make it

const Page = () => {
  const [select, setSelect] = useState([]);
  const [selectedCups, setSelectedCups] = useState([null, null, null]); // Array to store selected cup details for each dropdown

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://apiv3.apifootball.com/?action=get_leagues&country_id=80&APIkey=2fb5b7faf1210bdd4775fcc92be5a7e179e84695b077eb8ceffa022b818da294");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSelect(data);
      } catch (error) {
        console.error('Fetching data failed:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle select change
  const handleSelectChange = (index, e) => {
    const selectedId = e.target.value;
    const selectedCup = select.find(item => item.league_id === selectedId);
    const updatedCups = [...selectedCups];
    updatedCups[index] = selectedCup;
    setSelectedCups(updatedCups);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Cup Details:", selectedCups);
    // Add additional logic here to save the selectedCups details, e.g., sending to a backend
  };

  return (
    <div className='cup-div'>
      <h1>The Cup Kacm Play Into It</h1>
      <form onSubmit={handleSubmit} className='selection-div'>
        {[0, 1, 2].map((index) => (
          <select key={index} onChange={(e) => handleSelectChange(index, e)}>
            <option value="">Select a Cup</option>
            {select.map((item) => (
              <option value={item.league_id} key={item.league_id}>{item.league_name}</option>
            ))}
          </select>
        ))}
        <button type="submit">SAVE</button>
      </form>
      <div className='images-cups'>
        {selectedCups.map((cup, index) => (
          cup ? (
            <img
              src={cup.league_logo}
              alt={`Logo of ${cup.league_name}`}
              key={index}
              className="cup-logo"
            />
          ) : null
        ))}
      </div>
      {/* <div className="cup-details">
        {selectedCups.map((cup, index) => (
          cup ? (
            <div key={index} className="cup-detail">
              <h2>{cup.league_name}</h2>
              <img src={cup.league_logo} alt={`${cup.league_name} Logo`} />
              <p><strong>Country:</strong> {cup.country_name}</p>
              <p><strong>Season:</strong> {cup.league_season}</p>
              <img src={cup.country_logo} alt={`${cup.country_name} Logo`} />
            </div>
          ) : null
        ))}
      </div> */}
    </div>
  );
};

export default Page;
