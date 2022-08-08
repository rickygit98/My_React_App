import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardFooter() {
  return (
    <div className="card-footer">
      <span className="icon">
        <FontAwesomeIcon icon="fa-solid fa-code-compare" size="lg" />
      </span>
      <span className="icon">
        <FontAwesomeIcon icon="fa-solid fa-apple-whole" size="lg" />
      </span>
      <span className="icon">
        <FontAwesomeIcon icon="fa-solid fa-download" size="lg" />
      </span>
      <span className="icon">
        <FontAwesomeIcon icon="fa-solid fa-clock" size="lg" />
      </span>
      <span className="icon">
        <FontAwesomeIcon icon="fa-solid fa-close" size="lg" />
      </span>
    </div>
  );
}
