import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Moive from "./components/Moives";
import Moive_details from "./components/moive_details";
import SignIn from "./components/signIn";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Loader from "./components/Loader";
const App = () => {
  const [Moives, setMoives] = useState([]);
  const [Tv_shows, setTv_shows] = useState([]);
  const [trending, setTrending] = useState("week");
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("loggedIn_user"));
  // user does not exist
  if (user === null || JSON.parse(localStorage.getItem("user_data")) === null) {
    localStorage.setItem(
      "loggedIn_user",
      JSON.stringify({ email: " ", password: " ", loggedIn: false })
    );
    localStorage.setItem(
      "user_data",
      JSON.stringify([{ name: "", email: "", password: "" }])
    );
  }
  // console.log(Moives);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    fetch(
      `https://api.themoviedb.org/3/trending/all/${trending}?api_key=0d1b6f888ffe68fcf23fdc9ca239c008`
    )
      .then((res) => res.json())
      .then((data) => {
        setMoives(data.results);
      });
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=0d1b6f888ffe68fcf23fdc9ca239c008`
    )
      .then((res) => res.json())
      .then((data) => {
        setTv_shows(data.results);
      });
  }, [trending]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path={user !== null && user.loggedIn === false ? "/" : "/"}
          index
          element={
            loading ? (
              <Loader />
            ) : user !== null && user.loggedIn === false ? (
              <SignIn />
            ) : (
              <Home />
            )
          }
        />
        <Route path="/singup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Moives"
          element={
            loading ? (
              <Loader />
            ) : (
              <Moive
                Moives={Moives}
                Tv_shows={Tv_shows}
                setTrending={setTrending}
              />
            )
          }
        />
        <Route
          path="/details/:M_id"
          element={
            loading ? (
              <Loader />
            ) : (
              <Moive_details Moives={Moives} Tv_shows={Tv_shows} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
