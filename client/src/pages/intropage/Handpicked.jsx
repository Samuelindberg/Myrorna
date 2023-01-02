import React, { useState, useEffect } from "react";
import HandpickedCard from "./HandpickedCard";
import Datafetching from "./Datafetching";
import { Link } from "react-router-dom";

export default function Handpicked() {
  return (
    <section className="handpicked-section">
      <h1 id="handpicked-title">
        <span id="hand">Hand</span> <span id="picked">Picked</span>
      </h1>
      <Datafetching />
      <HandpickedCard />
      <Link to="/handpicked" id="handpicked-seemore">
        See more!
      </Link>
    </section>
  );
}
window.addEventListener("scroll", () => {
  const picked = document.getElementById("picked");
  const jacket = document.getElementById("pilotjacket-img");
  if (scrollY) {
    picked.style.opacity = 0 + scrollY / 800;
    picked.style.opacity > 0.6
      ? (document.getElementById("hand").style.opacity = 1)
      : console.log();
  }
});
