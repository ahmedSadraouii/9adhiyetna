import React from "react";
import "./home-page.css";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const HomePage = ({ text, button1, button2, type }) => {
  const navigate = useNavigate();
  const handleButton1Click = () => {
    type === 1 ? navigate("sign-up") : navigate("/sign-up-helper");
  };
  const handleButton2Click = () => {};
  return (
    <div className="home-page-container">
      <div className="navbar">
        <ul>
          <li>
            <img src={logo} className="home-logo" alt="" />
          </li>
          <li>الرئيسية</li>
          <li>اتصل بنا</li>
          <li>هدفنا</li>
        </ul>
      </div>
      <div className="center-container">
        <p className={type === 1 ? "p1" : "p2"}>{text}</p>
        <div className="buttons">
          <Button size="lg" variant="success" onClick={handleButton1Click}>
            {" "}
            {button1}{" "}
          </Button>
          <Button size="lg" variant="success" onClick={handleButton2Click}>
            {" "}
            {button2}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
