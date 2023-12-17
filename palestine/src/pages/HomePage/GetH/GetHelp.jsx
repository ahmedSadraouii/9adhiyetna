import React from "react";
import Badge from "react-bootstrap/Badge";
import img1 from "../../../assets/image 16.png";
import img2 from "../../../assets/image 15.png";
import img3 from "../../../assets/image 14.png";
import img4 from "../../../assets/image 19.png";
import img5 from "../../../assets/image 11.png";
import img6 from "../../../assets/image 17.png";
import logo from "../../../assets/logo.png";

import Stack from "react-bootstrap/Stack";
import Pagination from "react-bootstrap/Pagination";

import "./get-help.css";
import Card from "../../../components/Card";

const GetHelp = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  const cards = [
    {
      number: 20,
      name: "مساعدة أطفال غزة ",
      description:
        "نقدم  لأطفال غزة خدمات صحية  فالرجاء الاتصال بنا للتثبت من صحتكم.",
      img: img1,
    },
    {
      number: 56,
      name: "مدرسة خاصة للتعليم",
      description: " هده المدرسة لمساعدتكم من اجل اسعاد و تدريس اطفال غزة ",
      img: img2,
    },
    {
      number: 21,
      name: "وجبة الغداء",
      description:
        " نقدم  للفلسطينين  فطور الغداء هنا لمساعدتكم لتحقيق مستحقاتكم اليومية ",
      img: img3,
    },
    {
      number: 748,
      name: "مأوي عام",
      description:
        " يحتاج أطفال غزة إلى مساعدتكم للحصول على الطعام والماء المناسبين. الأزمة المطولة هي حاجة ملحة حقيقية و كل مستحقات للعيش",
      img: img4,
    },
    {
      number: 748,
      name: "وجبة العشاء  ",
      description:
        "نقدم  للفلسطينين  فطور عشاء  هنا لمساعدتكم لتحقيق مستحقاتكم اليومية.",
      img: img5,
    },
    {
      number: 748,
      name: "عرض عمل",
      description: "عرض عمل للفلسطينين في مصنع الحديد الرجاء الاتصال بنا ",
      img: img6,
    },
  ];
  return (
    <div className="get-help-container">
      <img src={logo} alt="" className="get-help-logo" />
      <p>الحصول على المساعدة</p>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="ابحث عن المساعدة
"
          id="help-search"
          dir="rtl"
        />
        <i className="bi bi-search"></i>
      </div>
      <div>
        <Stack direction="horizontal" gap={3}>
          <Badge bg="success">جميع</Badge>
          <Badge pill bg="secondary">
            عمل
          </Badge>
          <Badge pill bg="secondary">
            صحة
          </Badge>
          <Badge pill bg="secondary">
            تعليم
          </Badge>
          <Badge pill bg="secondary">
            مَأوىً
          </Badge>
          <Badge pill bg="secondary">
            غذاء
          </Badge>
        </Stack>
      </div>
      <div className="grid-container">
        {cards.map((item, index) => (
          <Card
            type="get"
            key={index}
            title={item.name}
            number={item.number}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>

      <div>
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
};

export default GetHelp;
