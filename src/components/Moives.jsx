import React from "react";
import Card from "./card";
import "../css/Moives.css";
import Fotter from "./fotter";
import bg_img from "../assets/8.svg";

const Home = ({ Moives, Tv_shows, setTrending }) => {
  return (
    <>
      <img
        src={bg_img}
        alt="1"
        style={{
          position: "fixed",
          zIndex: "-100",
          width: "100%",
          height: "auto",
        }}
      />
      <div>
        <select
          className="form-select bg-dark text-light"
          onChange={(e) => {
            e.target.value != "Trending"
              ? setTrending(e.target.value)
              : trending;
          }}
        >
          <option>Trending</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </select>
      </div>
      <div className="container  contain">
        {Moives.map((moive, index) => (
          <div key={index}>
            <Card
              img={`https://image.tmdb.org/t/p/original${moive.backdrop_path} `}
              title={moive.title ? moive.title : moive.name}
              date={
                moive.release_date ? moive.release_date : moive.first_air_date
              }
              id={moive.id}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="f_shows">
          <h3>Tv Shows</h3>
        </div>
        <div className="container  contain">
          {Tv_shows.map((moive, index) =>
            moive.backdrop_path != null ? (
              <div key={index}>
                <Card
                  img={`https://image.tmdb.org/t/p/original${moive.backdrop_path}`}
                  title={moive.title ? moive.title : moive.name}
                  date={
                    moive.release_date
                      ? moive.release_date
                      : moive.first_air_date
                  }
                  id={moive.id}
                />
              </div>
            ) : (
              <div key={index} style={{ display: "none" }}></div>
            )
          )}
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default Home;
