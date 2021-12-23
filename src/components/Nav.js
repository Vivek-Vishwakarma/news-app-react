import React from "react";
import { NavLink } from "react-router-dom";



function Nav() {

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink exact className="navbar-brand" to="/news-app-react">
            News App React
          </NavLink>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact className="nav-link active" aria-current="page" to="/news-app-react">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink exact className="dropdown-item" to="general">
                      General
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact className="dropdown-item" to="business">
                      Business
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact className="dropdown-item" to="science">
                      Science
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact className="dropdown-item" to="entertainment">
                      Entertainment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact className="dropdown-item" to="health">
                      Health
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact className="dropdown-item" to="technology">
                      Technology
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact className="dropdown-item" to="game">
                      Game
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
