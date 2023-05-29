import React from "react";
import "../css/Card.css";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const card = ({ img, title, date, id }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Link to={`/details/${id}`}>
      <div
        data-aos="fade-up"
        className="card mx-3 mt-5 "
        style={{
          width: "210px",
          height: "220px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        <img
          src={img}
          alt={title}
          width="100%"
          height="100%"
          style={{ borderRadius: "6px" }}
        />
        <div className="details">
          <h6 className="mt-1 pl-1">{title}</h6>
          <p className="m-0 pl-1">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default card;
