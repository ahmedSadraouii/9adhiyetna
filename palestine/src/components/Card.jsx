import React from "react";
import Button from "react-bootstrap/Button";

import "./card.css";

const Card = ({ number, title, description, img, type }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-top">
        <p className="date">June 27,2023</p>
        <div className="number-person">
          <span className="number">{type === "get" ? "شخص " : "دينار"}</span>
          <p className="number">{number}</p>
        </div>
      </div>
      <h2 className="card-title">{title}</h2>
      <p id="card-des">{description}</p>

      <div className="card-bottom">
        <Button variant="outline-success">
          <i className="bi bi-bookmark"></i>
        </Button>
        <Button variant="success" className="card-number">
          {type === "get" ? "تعرف أكثر" : "تبرع هنا"}
        </Button>
      </div>
    </div>
  );
};

export default Card;
