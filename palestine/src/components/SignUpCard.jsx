import Form from "react-bootstrap/Form";
import "./sign-up-card.css";
import signUpImage from "../assets/sign-upp.png"; // Adjust the path based on your project structure

const SignUpCard = () => {
  return (
    <div className="sign-up-card">
      <img src={signUpImage} alt="" />
      <div className="sign-up-fields">
        <div className="sign-up-text">
          <Form>
            <Form.Check // prettier-ignore
              type="checkbox"
              id="checkbox"
            />
          </Form>
          <p>هل أنت مسؤول في منظمة؟</p>
        </div>
        <div className="inputs-container">
          <input type="text" placeholder="اسم الشخص*" dir="rtl" />
          <input type="text" placeholder="عنوان البريد الإلكتروني*" dir="rtl" />
          <input type="text" placeholder="رقم الهاتف" dir="rtl" />
          <input type="text" placeholder="كلمة السر*" dir="rtl" />
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;
