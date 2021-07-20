import axios from "axios"
import React from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

const TransactionList = ({ transactions, users }) => {
  const history = useHistory()

  async function deleteTran(id) {
    try {
      const response = await axios.delete(`/api/v1/transactions/${id}`)
      if (response.status === 401) history.push("/unauthorized")
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  function parseUserName(users, transaction) {
    let user = users.filter((item) => item._id === transaction)
    if (user === undefined) parseUserName(users, transaction)
    let userName = user[0].username
    return userName
  }

  return (
    <div className="container">
      <h3 className="text-center mt-4">Global Transaction List</h3>
      <hr />
      <table className="table table-striped table-hover mt-4 mb-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Created At</th>
            <th scope="col">ID</th>
            <th scope="col">UUID</th>
            <th scope="col">Read More</th>
            <th scope="col">Delete?</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length <= 0 && (
            <>
              <tr>
                <th scope="row">1</th>
                <td colSpan="8">
                  <h3 className="text-center display-3">Such Empty...</h3>
                </td>
              </tr>
            </>
          )}
          {transactions.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.desc}</td>
              <td>{item.amount}</td>
              <td>{`${new Date(
                item.created_at
              ).toLocaleDateString()} ${new Date(
                item.created_at
              ).toLocaleTimeString()}`}</td>
              <td>{item._id}</td>
              <td>{parseUserName(users, item.uuid)}</td>
              <td>
                <Link className="btn btn-info" to={`/trans/single/${item._id}`}>
                  Full
                </Link>
              </td>
              <td>
                <button
                  onClick={(e) => deleteTran(item._id)}
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

export default TransactionList
