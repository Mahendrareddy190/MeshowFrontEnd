import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("loggedIn_user"));
  const navigate = useNavigate();
  const singout = () => {
    localStorage.setItem(
      "loggedIn_user",
      JSON.stringify({ ...user, loggedIn: false })
    );
    navigate("/");
  };
  const show_user_details = () => {
    swal(`
    Name: ${user.name}
    Email: ${user.email}
`);
  };

  return (
    <nav
      className="navbar navbar-expand-md sticky-top"
      style={{ backgroundColor: "#032541" }}
      //  #026355
    >
      <div className="container-fluid">
        <a
          className="navbar-brand text-light"
          style={{ fontFamily: "cursive" }}
          href="#"
        >
          <b>MeShow</b>
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {user.loggedIn && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/Home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/Moives"
                >
                  Movies
                </a>
              </li>
            </ul>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              // alignItems: "center",
              width: "100%",
            }}
          >
            <label>
              {user.loggedIn === false ? (
                ""
              ) : (
                <div
                  onClick={show_user_details}
                  style={{
                    margin: "0 20px 0 0px",
                    backgroundColor: "red",
                    color: "white",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <h6 className="mt-2">{user.name.charAt(0).toUpperCase()}</h6>
                </div>
              )}
            </label>
            {user.loggedIn === false ? (
              ""
            ) : (
              <button
                className="btn"
                style={{
                  backgroundColor: "#e50914",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                <a
                  className="nav-link  text-light"
                  aria-current="page"
                  href="/"
                  onClick={singout}
                >
                  Sign out
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
