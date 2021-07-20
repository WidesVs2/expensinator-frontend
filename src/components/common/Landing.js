import Register from "./Register"
import Login from "./Login"

import { Link } from "react-router-dom"

function Landing({ appName }) {
  return (
    <>
      <h1 className="text-center text-uppercase bg-dark border rounded border-info border-3 display-3 fst-italic text-info m-3">
        {appName}
      </h1>
      <h3 className="text-center">WidesVs2 Expense Tracking App</h3>
      <p className="lead text-center">
        Thanks for checking out my newest app! Create an account to get started!
      </p>
      <p className="lead text-center">Already have an account? Log In Below!</p>
      <p className="text-center">
        <small>
          All data gathered is used strictly for demonstration of App
          functionality.{" "}
          <span className="text-success">
            YOUR INFORMATION WILL NEVER BE SOLD OR RELEASED UNLESS REQUIRED BY
            LAW.
          </span>{" "}
          For more details visit our{" "}
          <Link className="text-decoration-none" to="/privacy">
            Privacy Policy
          </Link>
        </small>
      </p>
      <hr />
      <div className="container d-flex align-items-start justify-content-center mb-5">
        <Register />
        <Login />
      </div>
    </>
  )
}

export default Landing
