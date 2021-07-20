import axios from "axios"
import React, { useState, useEffect, createContext } from "react"

const AuthContext = createContext()

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined)
  const [reqStatus, setReqStatus] = useState("200")

  async function getLoggedIn() {
    const isLoggedIn = await axios.get("/api/v1/users/loggedIn")
    setLoggedIn(isLoggedIn.data.bool)
  }

  useEffect(() => {
    getLoggedIn()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        getLoggedIn,
        reqStatus,
        setReqStatus,
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
export { AuthContextProvider }
