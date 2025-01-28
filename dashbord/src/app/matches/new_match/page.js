"use client";
import React, { useEffect, useState } from "react";
import "../../globals.css";
import APIcup from "../../../data/APIcups";
import APIclubs from "../../../data/APIclubs";

function Page() {
  // State for selected options
  const [selectedCup, setSelectedCup] = useState({});
  const [selectedClub, setSelectedClub] = useState({});

  // Handler for cup select change
  const handleCupChange = (event) => {
    const selectedOption = APIcup.find(cup => cup.league_id === event.target.value);
    setSelectedCup(selectedOption || {});
  };

  // Handler for club select change
  const handleClubChange = (event) => {
    setSelectedClub(event.target.value);
  };

  useEffect(() => {
    console.log(selectedCup);
  }, [selectedCup]);

  return (
    <form className="new-match-div">
      <h1>title</h1>
      <div id="cup-select-div">
        cup type:
        <select value={selectedCup.league_id || ""} onChange={handleCupChange}>
          {APIcup ? (
            APIcup.map((item) => (
              <option value={item.league_id} key={item.league_id}>
                {item.league_name}
              </option>
            ))
          ) : (
            <option value="" key="">
              Loading ...
            </option>
          )}
        </select>
        {/* Show the selected cup's image */}
        {selectedCup.league_logo && (
          <img src={selectedCup.league_logo} alt={selectedCup.league_name} />
        )}
      </div>
      <div id="cup-select-div">
        club:
        <select value={selectedClub} onChange={handleClubChange}>
        {APIclubs ? (
            APIclubs.map((item) => (
              <>
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
              </>
            ))
          ) : (
            <option value="" key="">
              Loading ...
            </option>
          )}
        </select>
        {/* This is where the club's image could show */}
        {/* Add logic to display club image if applicable */}
      </div>
      <div id="details-match-div">
        <h2>details match</h2>
        <p>
          stadium: <input type="text" />
        </p>
        <p>
          time & date: <input type="text" />
        </p>
        <p>
          club name: <input type="text" />
        </p>
      </div>
      <div id="result-match-div">
        <h2>result match</h2>
        {/* This div will not be available until the end of the match */}
        {/* KACM VS XXXXX */}
        <input type="text" /> VS <input type="text" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default Page;
