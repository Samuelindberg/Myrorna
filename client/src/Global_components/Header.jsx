import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">home</Link>
        <a id="" href="">
          New arrivals
        </a>
        <Link to="/handpicked">Hand Picked</Link>
      </nav>
      <h1 id="logo">Myrorna Vintage</h1>
      <nav>
        <a id="" href="">
          Men
        </a>
        <a id="" href="">
          Women
        </a>
        <a href="">Find Us</a>
      </nav>
    </header>
  );
}
