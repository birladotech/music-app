import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ display: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex"
            style={{ display: "flex", justifyContent: "space-between" }}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  // href="<?= $baseUrl . 'src/Search/search.php' ?>"
                >
                  {window.location.pathname.includes("register")
                    ? "Register"
                    : "Login"}
                </a>
              </li>
            </ul>

            <form>
              <NavLink
                exact
                to={
                  window.location.pathname.includes("register")
                    ? "/"
                    : "/register"
                }
              >
                <button className="btn btn-outline-success" type="submit">
                  {window.location.pathname.includes("register")
                    ? "Login"
                    : "Register"}
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
