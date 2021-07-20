import React from "react"
import Login from "./Login"
import useTitle from "../../hooks/Title"

const LoginPage = () => {
  useTitle("Login Page")

  return (
    <div className="container">
      <h1 className="text-center mb-4">Login Page</h1>
      <hr />
      <Login />
    </div>
  )
}

export default LoginPage
