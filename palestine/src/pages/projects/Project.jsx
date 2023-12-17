import React from "react";
import Badge from "react-bootstrap/Badge";
import img1 from "../../assets/image-21.png";
import img2 from "../../assets/image 11.png";
import img3 from "../../assets/image 25.png";
import img4 from "../../assets/image 26.png";
import img5 from "../../assets/image-20.png";
import img6 from "../../assets/image-22.png";
import logo from "../../assets/logo.png";
import Card from "../../components/Card";

import Stack from "react-bootstrap/Stack";
import Pagination from "react-bootstrap/Pagination";

const Project = () => {
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
      number: "5600/9000",
      name: "مصحة قيد البناء",
      description: "مشروع إقامة عيادة طبية لتوفير رعاية صحية للأفراد اللاجئين.",
      img: img1,
    },
    {
      number: "9900/18600",
      name: "مدرسة  قيد البناء",
      description: " هده المدرسة لمساعدتكم من اجل اسعاد و تدريس اطفال غزة ",
      img: img5,
    },
    {
      number: "630/1500",
      name: "حملات تبرع ",
      description:
        " نحن ندعوك للمشاركة في مشروع التبرعات، حيث يمكنك دعم مختلف الجهود الإنسانية",
      img: img3,
    },
    {
      number: "550/1000",
      name: "حملات تبرع بالاغذية ",
      description:
        " يحتاج أطفال غزة إلى مساعدتكم للحصول على الطعام والماء المناسبين. الأزمة المطولة هي حاجة ملحة حقيقية و كل مستحقات للعيش",
      img: img2,
    },
    {
      number: "1640/5000",
      name: "حملات تبرع بالادوية ",
      description:
        "نقدم  للفلسطينين  فطور عشاء  هنا لمساعدتكم لتحقيق مستحقاتكم اليومية.",
      img: img4,
    },
    {
      number: "7480/200000",
      name: "إقامة مخيم للاجئين",
      description:
        "مشروع مخيم لتأمين مأوى لللاجئين، يهدف إلى تلبية احتياجاتهم بكفاءة وتوفير بيئة آمنة",
      img: img6,
    },
  ];
  return (
    <div>
      <div className="get-help-container">
        <img src={logo} alt="" className="get-help-logo" />
        <p> ...الحملات قيد التنفيذ</p>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="ابحث عن حملة

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
              type="give"
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
    </div>
  );
};

export default Project;
