import React from "react";
import "../css/Home.css";
import sv1 from "../assets/2.jpg";
import img1 from "../assets/3.png";
import img2 from "../assets/4.png";
import img3 from "../assets/5.png";
import Fotter from "./fotter";

const Home = () => {
  return (
    <div className="container-fluid p-0 m-0 main-container">
      <div>
        <div style={{ position: "absolute" }}>
          <img className="bg-img" src={sv1} alt="1" />
        </div>
        <div className="back-glass">
          <div className="main-content">
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p className="em">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="d-flex flex-wrap inp">
              <input
                type="email"
                className="form-control w-25"
                placeholder="Search Movies Here"
              />
              <button className="btn btn-danger mx-2 px-4">Get Started</button>
            </div>
          </div>
          <div className="container enjoy">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 col-sm enjoy_content">
                <div>
                  <h1>Enjoy on your TV</h1>
                  <p>
                    Enjoy on your TV Watch on smart TVs, PlayStation, Xbox,
                    Chromecast, Apple TV, Blu-ray players and more.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-4 col-sm">
                <img className="tv" src={img1} alt="enjoy" />
              </div>
            </div>
            <div className="border"></div>
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 col-sm">
                <img className="tv" src={img2} alt="enjoy" />
              </div>
              <div
                className="col-xl-5 col-lg-5 col-md-4 col-sm"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ margin: "0 0 0 100px" }}>
                  <h1>Watch everywhere</h1>
                  <p>
                    Stream unlimited movies and TV shows on your phone, tablet,
                    laptop, and TV.
                  </p>
                </div>
              </div>
            </div>
            <div className="border"></div>
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 col-sm enjoy_content">
                <div>
                  <h1>Create profiles for kids</h1>
                  <p>
                    Send children on adventures with their favourite characters
                    in a space made just for them—free with your membership.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-4 col-sm">
                <img className="tv" src={img3} alt="enjoy" />
              </div>
            </div>
          </div>
          <Fotter />
        </div>
      </div>
    </div>
  );
};

export default Home;
