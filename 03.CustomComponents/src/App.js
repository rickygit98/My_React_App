import React from "react";

// Import CSS
import "./style.css";

// Import Navbar Component
import Navbar from "./components/Navbar";

// Import Main Component
import Main from "./components/Main";

// Make Page (Main) Component
export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}
