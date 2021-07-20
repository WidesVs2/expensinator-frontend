import axios from "axios"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import AuthContext from "../../context/AuthContext"

function LogoutBtn() {
  const { getLoggedIn } = useContext(AuthContext)

  const history = useHistory()

  async function logout() {
    await axios.get("/api/v1/users/logout")
    await getLoggedIn()

    history.push("/")
  }

  return (
    <button onClick={logout} className="btn btn-danger">
      Log Out
    </button>
  )
}

export default LogoutBtn
