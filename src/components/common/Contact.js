import useTitle from "../../hooks/Title"
import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const emailStr =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//matches to valid emails

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const alert = document.getElementById("alert")

  const history = useHistory()

  useTitle("Contact Page")

  async function sendContact(e) {
    e.preventDefault()

    // Validation
    if (!name || !email || !phone) {
      alert.innerHTML = `
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert">
          <strong>Empty Fields</strong> Please fill in all required fields..
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"></button>
        </div>
      `
      return
    }

    if (!emailStr.test(email)) {
      alert.innerHTML = `
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert">
          <strong>Email Invalid!</strong> Please enter a valid email address.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"></button>
        </div>
      `
      return
    }

    if (message === "") setMessage("---Empty---")

    const newContact = {
      name,
      email,
      phone,
      message,
    }
    try {
      const response = await axios.post("/api/v1/contacts", newContact)

      if (response.status === 401) history.push("/unauthorized")
      history.push("/contact")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container">
      <h1 className="text-center">Contact Page</h1>
      <p className="lead text-center">
        To contact me, fill out the form below.
      </p>
      <form onSubmit={(e) => sendContact(e)}>
        <div id="alert"></div>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setName(e.target.value.trim())}
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Name"
          />
          <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setEmail(e.target.value.trim())}
            type="email"
            className="form-control"
            id="floatingEmailContact"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingEmailContact">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            className="form-control"
            id="floatingPhone"
            placeholder="Phone"
          />
          <label htmlFor="floatingPhone">Phone</label>
        </div>
        <div className="form-floating">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            placeholder="Leave your message"
            id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea">{"Message (Optional...)"}</label>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <button className="btn btn-success mt-4" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
