import React from "react";
import "../app/globals.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar-div">
      <Link href="/matches">Matches</Link>
      <Link href="/mercato">Mercato</Link>
      <a id="logo-navbar" href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/ar/9/9e/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%86%D8%A7%D8%AF%D9%8A_%D8%A7%D9%84%D9%83%D9%88%D9%83%D8%A8_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B4%D9%8A.png"
          alt="logo kacm"
        />
      </a>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Navbar;
