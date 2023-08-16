import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <button className="logout_button" type="button" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
