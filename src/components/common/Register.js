import React, { useEffect, useState } from "react"
import axios from "axios"
import usePrevious from "../../hooks/UsePrev"

const usernameStr = /^[A-Za-z]\w{7,14}$/ // 7-16 characters, only chars, digits, underscore, ^letter
const pwdStr =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/ // 8-15 chars, one digit, one special, one lower, one upper
const emailStr =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//matches to valid emails

function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [valError, setValError] = useState([])
  const prevValErr = usePrevious(valError)

  async function register(e) {
    e.preventDefault()

    // Validation
    if (!username || !email || !password) {
      let err = {
        err: true,
        msgStrong: "Empty Fields!",
        msg: "Please fill all fields!",
      }
      setValError(prevValErr.push(err))
    }

    if (!usernameStr.test(username)) {
      let err = {
        err: true,
        msgStrong: "Username Invalid!",
        msg: 'Username should be 7-16 characters long, should only contain letters, numbers, and "_", and should start with a letter.',
      }
      setValError(prevValErr.push(err))
    }

    if (!pwdStr.test(password)) {
      let err = {
        err: true,
        msgStrong: "Password Invalid!",
        msg: "Passwords should be 8-15 characters long and contain one each of lowercase letter, uppercase letter, number, and special character.",
      }
      setValError(prevValErr.push(err))
    }

    if (!emailStr.test(email)) {
      let err = {
        err: true,
        msgStrong: "Email Invalid!",
        msg: "Please enter a valid email address.",
      }
      setValError(prevValErr.push(err))
    }

    if (valError.length >= 1) return

    try {
      const reqData = {
        username,
        email,
        password,
      }
      await axios.post("/api/v1/users/register", reqData)

      window.location.assign("http://localhost:3000/dashboard")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container">
      <h2 className="text-center mb-4">Register</h2>
      {prevValErr >= 1 ? (
        <div></div>
      ) : prevValErr != undefined ? (
        prevValErr.map((item, index) => (
          <div key={index} className="alert alert-danger" role="alert">
            <strong>{item.msgStrong}</strong>
            {` ${item.msg}`}
          </div>
        ))
      ) : (
        <div></div>
      )}
      <form onSubmit={register}>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setUsername(e.target.value.trim())}
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="Username"
          />
          <label htmlFor="floatingUsername">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setEmail(e.target.value.trim())}
            type="email"
            className="form-control"
            id="floatingEmailRegister"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingEmailRegister">Email address</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => setPassword(e.target.value.trim())}
            type="password"
            className="form-control"
            id="floatingPasswordRegister"
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordRegister">Password</label>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <button className="btn btn-success mt-4" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
