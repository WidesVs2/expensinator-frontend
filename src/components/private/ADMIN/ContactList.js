import React from "react"
import axios from "axios"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

const ContactList = ({ contacts }) => {
  const history = useHistory()

  async function deleteContact(id) {
    try {
      const response = await axios.delete(`/api/v1/contacts/${id}`)
      if (response.status === 401) history.push("/unauthorized")
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container">
      <h3 className="text-center mt-4">Contact List</h3>
      <hr />
      <table className="table table-striped table-hover mt-4 mb-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Created At</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
            <th scope="col">Read More</th>
            <th scope="col">ID</th>
            <th scope="col">Delete?</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length <= 0 && (
            <>
              <tr>
                <th scope="row">1</th>
                <td colSpan="8">
                  <h3 className="text-center display-3">Such Empty...</h3>
                </td>
              </tr>
            </>
          )}
          {contacts.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{`${new Date(
                item.created_at
              ).toLocaleDateString()} ${new Date(
                item.created_at
              ).toLocaleTimeString()}`}</td>
              <td>{item.phone}</td>
              <td>
                {item.message.length >= 35
                  ? Array.from(item.message)
                      .slice(0, 34)
                      .toString()
                      .replace(/,/g, "")
                  : item.message}
              </td>
              <td>
                <Link
                  to={`/contacts/single/${item._id}`}
                  className="btn btn-info">
                  Full
                </Link>
              </td>
              <td>{item._id}</td>
              <td>
                <button
                  onClick={(e) => deleteContact(item._id)}
                  className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const ContactSingle = ({ contact }) => {
  return (
    <div className="container">
      <h1>This is the Single Contact Page</h1>
    </div>
  )
}

export default ContactList
