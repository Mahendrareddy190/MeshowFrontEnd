import React, { useState } from "react";
import "../css/SignUp.css";
import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";
import img2 from "../assets/1.jpg";
const Signup = () => {
  const [user_data, setUser_data] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [new_user, setnew_user] = useState([]);
  const { name, email, password } = user_data;
  const handle = (name) => (event) => {
    setUser_data({ ...user_data, [name]: event.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    if (user_data.password.length >= 6) {
      if (
        user_data.email.length != 0 &&
        user_data.password.length != 0 &&
        user_data.name.length != 0
      ) {
        setnew_user((prev) => [...prev, user_data]);
        if (localStorage["user_data"]) {
          const get_local = JSON.parse(localStorage.getItem("user_data"));
          const local_data = [...get_local, user_data];
          localStorage.setItem("user_data", JSON.stringify(local_data));
          swal(
            "User Add successfully!😊",
            "Navigated to logIn page",
            "success"
          );
          navigate("/");
        } else {
          const local_data = [...new_user, user_data];
          localStorage.setItem("user_data", JSON.stringify(local_data));
          swal(
            "User Add successfully!😊",
            "Navigated to logIn page",
            "success"
          );
          navigate("/");
        }
      } else {
        swal("Oops🤦‍♂️", "Something went wrong!", "warning");
      }
    } else {
      swal("Oops🤦‍♂️", "password must contain atleast 6 characters", "warning");
    }
  };
  return (
    <div className="container-fluid m-0 p-0 main">
      <img
        className="img"
        src={img2}
        // src="https://static.vecteezy.com/system/resources/previews/001/254/680/original/cinema-background-concept-vector.jpg"
        alt="m"
      />
      <div className="bg">
        <form className="form-group form-d">
          <div className="title">
            <h3>Signup</h3>
          </div>
          <label>Name:</label>
          <div>
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={handle("name")}
              required
            />
          </div>
          <label>Email:</label>
          <div>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={handle("email")}
              required
            />
          </div>
          <label>Password:</label>
          <div>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={handle("password")}
              required
            />
          </div>
          <div className="submit">
            <button
              className="btn btn-success px-4 mt-3"
              style={{
                margin: "18px 0 0 15px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              onClick={submit}
            >
              Sign up
            </button>
            <Link to="/">
              <button
                className="btn btn-success px-4"
                style={{
                  margin: "18px 0 0 15px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Sign In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
