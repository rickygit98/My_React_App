import React from "react";
// Make Header Component
export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        src={require("../img/react-logo.png")}
        alt="react-logo"
        className="nav-icon"
      />
      <h3 className="nav-title">ReactFacts</h3>
      <h4 className="nav-project">React Course - Project 1</h4>
    </nav>
  );
}
