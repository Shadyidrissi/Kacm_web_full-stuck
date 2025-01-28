import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="home-div">
      <div className="div-elements">
        <div id="postes-div">
          <h2>
            Posts OverView <Link href="">Link</Link>
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              height: "70%",
              alignItems: "center",
            }}
          >
            <ul
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "64px", fontWeight: "800" }}>22</h1>
              <p>number the posts show</p>
            </ul>
            <ul
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "64px", fontWeight: "800" }}>22</h1>
              <p>number the posts hidden</p>
            </ul>
          </div>
        </div>
      </div>
      <div className="div-elements">
        <div id="postes-div">
          <h2>
            Players OverView <Link href="">Link</Link>
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <ul
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px", marginRight: "20px" }}
                  src="https://th.bing.com/th/id/OIP.5JbXzPVIhu6I6qsHF8JyUAAAAA?rs=1&pid=ImgDetMain"
                  alt=""
                />
                <p>name player</p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px", marginRight: "20px" }}
                  src="https://th.bing.com/th/id/OIP.5JbXzPVIhu6I6qsHF8JyUAAAAA?rs=1&pid=ImgDetMain"
                  alt=""
                />
                <p>name player</p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px", marginRight: "20px" }}
                  src="https://th.bing.com/th/id/OIP.5JbXzPVIhu6I6qsHF8JyUAAAAA?rs=1&pid=ImgDetMain"
                  alt=""
                />
                <p>name player</p>
              </li>
            </ul>
            <ul
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "64px", fontWeight: "800" }}>22</h1>
              <p>number deal the player </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="div-elements">
        <div id="postes-div">
          <h2>
            All the CUP <Link href="/cups">X</Link>
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "90%",
              height: "100%",
            }}
          >
            <img
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              src="https://img.freepik.com/premium-vector/trophy-vector-icon-gold-cup-vector-best-tournament-championship-logo-illustration_289688-374.jpg"
              alt=""
            />
            <img
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              src="https://img.freepik.com/premium-vector/gold-trophy-cartoon-icon-vector-illustration-first-place-champion-trophy-cup-flat-style-vector-flat-outline-icon_401949-746.jpg?w=2000"
              alt=""
            />
            <img
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              src="https://static.vecteezy.com/system/resources/previews/013/486/694/original/award-illustration-on-a-background-premium-quality-symbols-icons-for-concept-and-graphic-design-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="div-elements">
        <div id="postes-div">
          <h2>
            the matches KACM <Link href="">Link</Link>
          </h2>
          <div style={{ width: "90%", height: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "30%",
                fontSize:"22px",
                fontWeight:"700"
              }}
            >
              <img style={{height:"50px",width:"50px",borderRadius:"50%"}} src="https://ih1.redbubble.net/image.2485392736.6400/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="" />
              vs
              <img style={{height:"50px",width:"50px",borderRadius:"50%"}} src="https://vectorseek.com/wp-content/uploads/2023/07/Kac-Logo-Vector.jpg" alt="" />
              12/12/2025 12:12
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
