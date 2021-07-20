import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import useTitle from "../../hooks/Title"

import Loading from "../layout/Loading"
import TranList from "./TranList"
import AddTran from "./AddTran"
import Total from "./Total"
import Admin from "./ADMIN/Admin"

function Dashboard({ appName }) {
  const [user, setUser] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [admin, setAdmin] = useState(false)
  const [transactions, setTransactions] = useState([])

  useTitle(`${user.username}'s Profile`)

  async function getUser() {
    try {
      const userData = await axios.get("/api/v1/users/single")
      setIsLoading(false)
      setUser(userData.data.user)
      setAdmin(userData.data.admin)
    } catch (err) {
      console.error(err)
    }
  }

  async function getTransactions() {
    try {
      const response = await axios.get("/api/v1/transactions/")
      setTransactions(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  function requests() {
    getUser()
    getTransactions()
  }

  useEffect(() => {
    requests()
  }, [])

  if (isLoading) return <Loading />

  return (
    <div className="container">
      <h1 className="text-center text-uppercase bg-dark border rounded border-info border-3 display-3 fst-italic text-info m-3">
        {appName}
      </h1>

      <h3 className="text-center m-3">Welcome Back, {user.username}!</h3>
      <hr />
      <Total transactions={transactions} />
      <AddTran />
      <TranList transactions={transactions} />
      {admin === true && <Admin />}
    </div>
  )
}

export default Dashboard
