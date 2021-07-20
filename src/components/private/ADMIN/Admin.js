import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import UserList from "./UserList"
import ContactList from "./ContactList"
import TransactionList from "./TransactionList"

const Admin = () => {
  const [users, setUsers] = useState([])
  const [transactions, setTransactions] = useState([])
  const [contacts, setContacts] = useState([])
  const history = useHistory()

  async function getUsers() {
    try {
      const response = await axios.get("/api/v1/users")
      if (response.status === 401) history.push("/unauthorized")
      setUsers(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  async function getTransactions() {
    try {
      const response = await axios.get("/api/v1/transactions/admin")
      if (response.status === 401) history.push("/unauthorized")
      setTransactions(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  async function getContacts() {
    try {
      const response = await axios.get("/api/v1/contacts")
      if (response.status === 401) history.push("/unauthorized")
      setContacts(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  function requests() {
    getUsers()
    getTransactions()
    getContacts()
  }

  useEffect(() => {
    requests()
  }, [])

  return (
    <div>
      <hr />
      <h1 className="text-center text-danger">***ADMIN AREA***</h1>
      <hr />
      <p className="lead text-center">
        Hey Future Mike, glad to see you! As you know, I'm coding some shiznit
        in here to help you manage this beast. Good Luck! Also, check back as
        you decide to do more stuff!
      </p>
      <div className="container d-flex justify-content-around align-items-center">
        <div
          style={{ height: "150px" }}
          className="card w-25 m-4 bg-secondary d-flex flex-column justify-content-around text-warning">
          <div className="text-center display-5">USERS</div>
          <h3 className="text-center display-4">{users.length}</h3>
        </div>
        <div
          style={{ height: "150px" }}
          className="card w-25 m-4 bg-secondary d-flex flex-column justify-content-around text-warning">
          <div className="text-center display-5">CONTACTS</div>
          <h3 className="text-center display-4">{contacts.length}</h3>
        </div>
        <div
          style={{ height: "150px" }}
          className="card w-25 m-4 bg-secondary d-flex flex-column justify-content-around text-warning">
          <div className="text-center display-5">TRANS</div>
          <h3 className="text-center display-4">{transactions.length}</h3>
        </div>
      </div>
      <UserList users={users} />
      <ContactList contacts={contacts} />
      <TransactionList users={users} transactions={transactions} />
    </div>
  )
}

export default Admin
