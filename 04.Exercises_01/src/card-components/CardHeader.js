import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardHeader() {
  return (
    <div className="card-header">
      <div className="profile-border">
        <div className="profile-img "></div>
      </div>

      <h3 className="card-title"> Ricky Yohanes </h3>
      <h4 className="card-subtitle"> Front-End Web Developer </h4>
      <h5>Surabaya, East Java, Indonesia</h5>

      <div className="button-group">
        <a href="#" className="btn-email">
          <span className="icon">
            <FontAwesomeIcon icon="fa-solid fa-envelope" size="md" />
          </span>
          Email
        </a>
        <a href="#" className="btn-contact">
          <span className="icon">
            <FontAwesomeIcon icon="fa-solid fa-phone" size="md" />
          </span>
          Contact
        </a>
      </div>
    </div>
  );
}
