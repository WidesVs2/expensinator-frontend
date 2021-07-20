import axios from "axios"
import React from "react"

const TranList = ({ transactions }) => {
  return (
    <div className="d-flex flex-column container align-items-center justify-content-center">
      <h4 className="text-center display-4">Transactions</h4>
      {transactions.length >= 1 &&
        transactions.map((item) => (
          <TransItem key={item._id} transaction={item} />
        ))}
      {transactions.length <= 0 && (
        <>
          <div className="container">
            <h3 className="text-center">Such Empty...</h3>
            <p className="lead text-center">
              Add a new Transaction to get started!
            </p>
          </div>
        </>
      )}
    </div>
  )
}

const TransItem = ({ transaction }) => {
  async function deleteTrans() {
    try {
      await axios.delete(`/api/v1/transactions/${transaction._id}`)
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="w-50 m-3 card">
      <div className="card-header text-center">
        {`${new Date(transaction.created_at).toLocaleDateString()} ${new Date(
          transaction.created_at
        ).toLocaleTimeString()}`}
      </div>
      <div className="card-body d-flex justify-content-around">
        <span
          title="Delete"
          style={{ cursor: "pointer" }}
          onClick={deleteTrans}
          className="position-absolute top-0 end-0 text-danger m-1">
          X
        </span>
        <span>{transaction.amount}</span>
        <span
          className={`text-uppercase ${
            !transaction.is_Debit ? "text-success" : "text-danger"
          }`}>
          {transaction.desc}
        </span>
      </div>
    </div>
  )
}

export default TranList
