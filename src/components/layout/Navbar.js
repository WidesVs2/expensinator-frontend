import React, { useState, useContext, useEffect } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
import AuthContext from "../../context/AuthContext"
import axios from "axios"

import LogoutBtn from "./LogoutBtn"

function Navbar({ appName }) {
  const [password, setPass] = useState("")
  const [email, setEmail] = useState("")
  const [path, setPath] = useState(window.location.pathname)

  const { loggedIn, getLoggedIn } = useContext(AuthContext)
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    setPath(window.location.pathname)
  }, [location])

  async function login(e) {
    e.preventDefault()

    try {
      await axios.post("/api/v1/users/login", {
        email,
        password,
      })
      getLoggedIn()

      history.push("/dashboard")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="text-uppercase text-info fst-italic">{appName}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                id="home-link"
                className={`nav-link ${path === "/" ? "active" : ""}`}
                to="/">
                Home
              </Link>
            </li>
            {loggedIn === true && (
              <>
                <li className="nav-item">
                  <Link
                    id="dashboard-link"
                    className={`nav-link ${
                      path === "/dashboard" ? "active" : ""
                    }`}
                    to="/dashboard">
                    {appName}
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link
                id="about-link"
                className={`nav-link ${path === "/about" ? "active" : ""}`}
                to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id="contact-link"
                className={`nav-link ${path === "/contact" ? "active" : ""}`}
                to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id="privacy-link"
                className={`nav-link ${path === "/privacy" ? "active" : ""}`}
                to="/privacy">
                Privacy Policy
              </Link>
            </li>
            {loggedIn === false && (
              <>
                <li className="nav-item">
                  <Link
                    id="register-link"
                    className={`nav-link ${
                      path === "/register" ? "active" : ""
                    }`}
                    to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    id="login-link"
                    className={`nav-link ${path === "/login" ? "active" : ""}`}
                    to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
          {loggedIn === false && (
            <>
              <form onSubmit={login} className="d-flex">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control me-2"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  value={email}
                />
                <input
                  onChange={(e) => setPass(e.target.value)}
                  className="form-control me-2"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                />
                <button className="btn btn-outline-success" type="submit">
                  Login
                </button>
              </form>
            </>
          )}
          {loggedIn === true && (
            <>
              <div className="d-flex me-3">
                <h3 className="text-white">Logged In!</h3>
              </div>
              <LogoutBtn />
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
