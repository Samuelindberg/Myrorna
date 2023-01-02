import React from "react";
import shirt from "../../assets/greenshirt.png";
export default function LandingSection() {
  return (
    <section className="landing-section-container">
      <h1 id="landing-title">
        A Vintage Store that cares for your wallet and the{" "}
        <span id="enviroment-span">environment</span>
      </h1>
      <img src={shirt} alt="" id="greenshirt-img" />
    </section>
  );
}
window.addEventListener("scroll", () => {
  const landingTitle = document.getElementById("landing-title");
  const greenShirtImg = document.getElementById("greenshirt-img");
  landingTitle.style.transform =
    "translate(" + scrollY + "px," + scrollY + "px)";
  greenShirtImg.style.transform = "translate(0," + scrollY / 2 + "px)";
  landingTitle.style.opacity = 1 - scrollY / 600;
  greenShirtImg.style.opacity = 1 - scrollY / 600;
});
