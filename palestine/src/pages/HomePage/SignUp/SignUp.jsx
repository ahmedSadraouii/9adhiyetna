import Button from "react-bootstrap/Button";
import "./sign-up.css";
import SignUpCard from "../../../components/SignUpCard";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page-container">
      <div className="navbar">
        <ul>
          <img src={logo} className="home-logo" alt="" />
          <li>الرئيسية</li>
          <li>اتصل بنا</li>
          <li>هدفنا</li>
        </ul>
      </div>
      <div className="center-container">
        <p className="sign-up-p">أنشئ حسابًا لطلب المساعدة</p>
        <SignUpCard />
        <div className="buttons">
          <Button
            size="lg"
            variant="success"
            id="register"
            onClick={() => {
              navigate("/getHelp");
            }}
          >
            تسجيل الدخول
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
