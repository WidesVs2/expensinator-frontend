import React, { useState, useEffect } from "react"

const Total = ({ transactions }) => {
  const [total, setTotal] = useState(0)

  function computeTotal(transactions) {
    let total = 0
    for (let i = 0; i < transactions.length; i++) {
      transactions[i].is_Debit === false
        ? (total += transactions[i].amount)
        : (total -= transactions[i].amount)
    }
    return total
  }

  useEffect(() => {
    setTotal(computeTotal(transactions))
  }, [transactions])

  return (
    <div>
      <h2 className="text-center">Current Balance:</h2>
      <h3
        className={`${
          parseInt(total) >= 0 ? "text-success" : "text-danger"
        } text-center display-3 mb-5`}>
        {`$${total.toFixed(2)}`}
      </h3>
    </div>
  )
}

export default Total
