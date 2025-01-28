import React from "react";
import "../../globals.css";

function page() {
  return (
    <form className="new-mercato-div">
      <h1>new mercato of the kacm</h1>
      <div id="old-club-details-div">
        <h2>details old club</h2>
        <div>
          <h2>
            club logo :<span>the club league :</span>
            <input type="text" />
            <button>search</button>
          </h2>
          <div>
            <select>
              <option value="" key=""></option>
            </select>
            <img src="" alt="" />
          </div>
          <p>
            {" "}
            the club name : <input type="text" />
          </p>
        </div>
      </div>
      <div id="details-player-div">
        <p>details player</p>
        <h2>
          full name player : <input type="text" />
        </h2>
        <h3>
          image player (URL) : <input type="text" />
        </h3>
        <h3>
          age player : <input type="text" />
        </h3>
        <h3>
          postation player : <input type="text" />
        </h3>
      </div>
      <div id="detials-deal-div">
        <h2>details of this deal</h2>
        <textarea cols="30" rows="3"></textarea>
      </div>
      <div id="time-div">
        <h3>
          the date will take auto if stay this check
          <input type="checkbox" />
        </h3>
        <input type="text" placeholder="time & date " />
      </div>
      <button>submit</button>
    </form>
  );
}

export default page;
