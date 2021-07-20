import React from "react"
import Register from "./Register"
import useTitle from "../../hooks/Title"

const RegisterPage = () => {
  useTitle("Register New Account")
  return (
    <div className="container">
      <h1 className="text-center mb-4">Registration Page</h1>
      <hr />
      <Register />
    </div>
  )
}

export default RegisterPage
