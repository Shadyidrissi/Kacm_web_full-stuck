import React from "react";
import "../globals.css";
import Link from "next/link";

function page() {
  // data will be : image player , name of the player , image old clube , details the deal 
  return (
    <div className="mercato-div" style={{marginTop:"40px"}}>
      <h1 className="title">KACM Mercato </h1>
      <div className="body-mercato">
        <div id="player">
          <p>player name</p>
          <div>
            <img
              id="player-cover"
              src="https://media.asroma.com/prod/images/square_medium_fill/7106aa0db1b8-abraham-copia.png"
              alt="player"
            />
            <div id="details-player">
              <div id="images">
                <img
                  src="https://fifamoro.com/wp-content/uploads/2019/07/OCK-Olympique-Khouribga.png"
                  alt="from-club"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/81/81464.png"
                  alt="icon"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/ar/9/9e/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%86%D8%A7%D8%AF%D9%8A_%D8%A7%D9%84%D9%83%D9%88%D9%83%D8%A8_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B4%D9%8A.png"
                  alt="to-club"
                />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Why do we use it? It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like).
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default page;
