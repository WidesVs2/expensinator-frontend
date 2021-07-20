import axios from "axios"
import React from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

const UserList = ({ users }) => {
  const history = useHistory()

  async function deleteUser(id) {
    try {
      const response = await axios.delete(`/api/v1/users/${id}`)
      if (response.status === 401) history.push("/unauthorized")
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container">
      <h3 className="text-center mt-4">User List Section</h3>
      <hr />
      <table className="table table-striped table-hover mb-4 mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Created At</th>
            <th scope="col">ID</th>
            <th scope="col">Read More</th>
            <th scope="col">Delete?</th>
          </tr>
        </thead>
        <tbody>
          {users.length <= 0 && (
            <>
              <tr>
                <th scope="row">1</th>
                <td colSpan="8">
                  <h3 className="text-center display-3">Such Empty...</h3>
                </td>
              </tr>
            </>
          )}
          {users.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{`${new Date(
                item.created_at
              ).toLocaleDateString()} ${new Date(
                item.created_at
              ).toLocaleTimeString()}`}</td>
              <td>{item._id}</td>
              <td>
                <Link className="btn btn-info" to={`/users/single/${item._id}`}>
                  Full
                </Link>
              </td>
              <td>
                <button
                  onClick={(e) => deleteUser(item._id)}
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

export default UserList
