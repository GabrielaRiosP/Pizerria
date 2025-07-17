import { useContext } from "react";
import { UserContext } from "../../context/UserContext"
import "../css/Profile.css"

const Profile = () => {
  const {user, logout} = useContext(UserContext);

    
  return (

    <div className="profile">
    <form className="profile-form row g-3" onSubmit={(e) => {
      e.preventDefault();
      logout();
    }}>
  <div className="col-auto">
    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
    <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value={user?.email || "email@example.com"}/>
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-dark mb-3">Cerrar sesión</button>
  </div>
</form>
</div>
  )
}
export default Profile