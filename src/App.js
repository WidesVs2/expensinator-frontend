import React, { useContext } from "react"
import { Route, Switch } from "react-router-dom"
import axios from "axios"
import AuthContext from "./context/AuthContext"

import "./App.css"

// Components
import Navbar from "./components/layout/Navbar"
import About from "./components/common/About"
import Contact from "./components/common/Contact"
import Dashboard from "./components/private/Dashboard"
import Privacy from "./components/common/Privacy"
import Landing from "./components/common/Landing"
import RegisterPage from "./components/common/RegisterPage"
import LoginPage from "./components/common/LoginPage"
import Unauthorized from "./components/common/Unauthorized"
import Footer from "./components/layout/Footer"

axios.defaults.withCredentials = true

function App() {
  const { loggedIn } = useContext(AuthContext)
  const APP_NAME = `Expensinator`

  return (
    <div className="App">
      <Navbar appName={APP_NAME} />

      <div className="container mb-5">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/privacy">
            <Privacy />
          </Route>
          <Route exact path="/unauthorized">
            <Unauthorized />
          </Route>
          <Route exact path="/">
            <Landing appName={APP_NAME} />
          </Route>

          {loggedIn === true && (
            <>
              <Route exact path="/dashboard">
                <Dashboard appName={APP_NAME} />
              </Route>
            </>
          )}

          {loggedIn === false && (
            <>
              <Route exact path="/register">
                <RegisterPage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
            </>
          )}
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
