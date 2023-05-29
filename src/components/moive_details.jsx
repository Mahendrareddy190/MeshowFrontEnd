import React from "react";
import "../css/moive_details.css";
import { Link, useParams } from "react-router-dom";
import Fotter from "./fotter";

const moive_details = ({ Moives, Tv_shows }) => {
  const data = [...Moives, ...Tv_shows];
  const para = useParams("M_id");
  const singleMoive = data.find((res) => res.id == para.M_id);
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-wrap">
        <div className="position-absolute z-1">
          <button className="btn btn-dark m-3">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/Moives"
            >
              Back to Moives
            </Link>
          </button>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${singleMoive.backdrop_path} `}
          alt={singleMoive.title}
          className="back-img"
        />
        <div style={{ position: "absolute" }}>
          <div className="card1">
            <img
              src={`https://image.tmdb.org/t/p/original${singleMoive.backdrop_path} `}
              alt={singleMoive.title}
              width="100%"
              height="400px"
              className="rounded"
            />
          </div>
        </div>
        <div className="text-justify content">
          <div>
            <h3>
              {singleMoive.title ? singleMoive.title : singleMoive.name}{" "}
              {singleMoive.release_date
                ? "(" + singleMoive.release_date.slice(0, 4) + ")"
                : "(" + singleMoive.first_air_date.slice(0, 4) + ")"}
            </h3>
            <div className="d-flex my-3" style={{ fontSize: "20px" }}>
              <label>
                {singleMoive.release_date
                  ? singleMoive.release_date
                  : singleMoive.first_air_date}
              </label>
              <ul className="d-flex">
                <li className="mx-1">Action,</li>
                <li className="mx-1" style={{ listStyle: "none" }}>
                  Thriller
                </li>
                <li className="mx-5">2h 30m</li>
              </ul>
            </div>
            <div className="my-3">
              <h3>Overview</h3>
              <p style={{ fontSize: "20px" }}>{singleMoive.overview}</p>
            </div>
            <h6>Rating: {singleMoive.vote_average + "/10"}</h6>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default moive_details;
