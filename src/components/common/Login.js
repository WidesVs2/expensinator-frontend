import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import AuthContext from "../../context/AuthContext"
import axios from "axios"

export default function Login() {
  const [password, setPass] = useState("")
  const [email, setEmail] = useState("")

  const { loggedIn, getLoggedIn } = useContext(AuthContext)
  const history = useHistory()

  async function login(e) {
    e.preventDefault()

    try {
      const response = await axios.post("/api/v1/users/login", {
        email,
        password,
      })
      if (response.status === 401) {
        history.push("/unauthorized")
      }

      getLoggedIn()

      history.push("/dashboard")
    } catch (err) {
      console.error(err.status)
    }
  }

  return (
    <div className="container">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={login} className="mt-4">
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingEmail">Email address</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <button className="btn btn-success mt-4" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
