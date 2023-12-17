import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/HomePage/SignUp/SignUp.jsx";
import GetHelp from "./pages/HomePage/GetH/GetHelp.jsx";
import Project from "./pages/projects/Project.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <HomePage
              text="نحن هنا لتقديم الدعم والمساعدة لإخواننا في فلسطين. نضع جهودنا معًا لدعمكم في هذا التطبيق. لنكن جميعاً جزءًا من الحل"
              button1="تسجيل الدخول"
              button2="إنشاء حساب"
              type={1}
            />
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <HomePage
              text="لإنشاء حساب للحصول على مساعدة أو تقديم المساعدة"
              button1="  أحتاج للمساعدة"
              button2=" أريد تقديم المساعدة"
              type={2}
            />
          }
        />
        <Route path="/sign-up-helper" element={<SignUp />} />
        <Route path="/getHelp" element={<GetHelp />} />
        <Route path="/giveHelp" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
