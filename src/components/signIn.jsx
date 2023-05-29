import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/Login.css";
import img1 from "../assets/1.jpg";
import swal from "sweetalert";
const signIn = () => {
  const [validate, setvalidate] = useState({
    email: "",
    password: "",
  });
  const { email, password } = validate;
  const handleChange = (name) => (event) => {
    event.preventDefault();
    setvalidate({ ...validate, [name]: event.target.value });
  };
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    const get_local = JSON.parse(localStorage.getItem("user_data"));
    const single_user = get_local.filter(
      (user) =>
        user.email === validate.email && user.password == validate.password
    );

    if (
      single_user.length !== 0 &&
      single_user[0].password.length !== 0 &&
      single_user[0].email.length !== 0
    ) {
      if (
        single_user[0].email === validate.email &&
        single_user[0].password == validate.password
      ) {
        swal("Loading...", "Redirecting to home page", "success");
        const name = single_user[0].name;
        localStorage.setItem(
          "loggedIn_user",
          JSON.stringify({ ...validate, loggedIn: true, name })
        );

        navigate("/Home");
      }
    } else {
      swal("Invalid user details", "user doesnt exists", "warning");
    }
  };
  return (
    <div className="container-fluid main-div">
      <img className="img" src={img1} alt="m" />
      <div className="bg">
        <form className="form-group">
          <div className="title">
            <h3>Meshow</h3>
          </div>
          <label>Email:</label>
          <div>
            <input
              className="form-control"
              value={email}
              onChange={handleChange("email")}
              type="email"
              name="email"
              required
            />
          </div>
          <label>Password:</label>
          <div>
            <input
              className="form-control"
              value={password}
              onChange={handleChange("password")}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="submit">
            {/* <input type="submit" /> */}
            <button
              className="btn btn-success px-4 mt-3"
              style={{ fontSize: "14px", fontWeight: "bold" }}
              onClick={submit}
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="singup">
          <h5>New account</h5>
          <Link to="/singup">
            <button className="btn btn-primary btn1">
              Create your Meshow account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default signIn;
