import React, { useEffect, useState } from "react"
import axios from "axios"
import useFocus from "../../hooks/Focus"

const AddTran = () => {
  const [isDebit, setIsDebit] = useState(true)
  const [isChecked, setisChecked] = useState(false)
  const [debitText, setDebitText] = useState("Debit")
  const [amount, setAmount] = useState("0.00")
  const [desc, setDesc] = useState("")
  const [inputRef, setInputFocus] = useFocus()
  const [alert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  function toggleCheck() {
    setisChecked(!isChecked ? true : false)
    setDebitText(debitText === "Debit" ? "Credit" : "Debit")
    setIsDebit(isDebit ? false : true)
  }

  async function addTran(e) {
    e.preventDefault()
    try {
      const newTran = {
        amount,
        desc,
        is_Debit: isDebit,
      }
      const response = await axios.post("/api/v1/transactions", newTran)
      setAlertMessage(response.data.message)
      setAlert(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={(e) => addTran(e)} className="container w-50">
      <h3 className="text-center mb-3">Add Transaction</h3>
      <div className="form-floating mb-3">
        <input
          ref={inputRef}
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          maxLength="160"
          className="form-control"
          id="amount"
          placeholder="Amount of transaction"
          title="Amount of money spent."
          required
        />
        <label htmlFor="amount">Amount</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          maxLength="20"
          className="form-control"
          id="desc"
          placeholder="Short description of transaction"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          data-bs-container="body"
          title="Max 20 Chars."
          required
        />
        <label htmlFor="desc">Description</label>
      </div>
      <div className="form-check form-switch mb-3">
        <input
          title="Debit or Credit"
          style={{ cursor: "pointer" }}
          checked={isChecked}
          onChange={toggleCheck}
          className="form-check-input"
          type="checkbox"
          id="is_Debit"
        />
        <label className="form-check-label" htmlFor="is_Debit">
          {debitText}
        </label>
      </div>
      <div className="container">
        <button
          title="Add New Transaction"
          type="submit"
          className="btn btn-success mx-auto d-block mb-4">
          Add
        </button>
        {alert === true && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert">
            <strong>Holy guacamole!</strong> {alertMessage}
            <button
              onClick={(setInputFocus, window.location.reload())}
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"></button>
          </div>
        )}
      </div>
    </form>
  )
}

export default AddTran
