import React from "react"
import Login from "./Login"

const Unauthorized = () => {
  return (
    <div className="container">
      <div className="bg-warning border border-danger rounded">
        <h1 className="text-center text-danger display-1 mb-4">UNAUTHORIZED</h1>
        <p className="lead text-center text-danger">
          You entered incorrect login information! Please attempt again!
        </p>
      </div>
      <hr />
      <Login />
    </div>
  )
}

export default Unauthorized
