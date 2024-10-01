import { Link, useNavigate } from "react-router-dom";
import "./403.css";
import { baseURI, LOGOUT } from "../../Api/Api";
import Cookie from 'cookie-universal'
import axios from "axios";
export default function Err403({ role }) {
  const cookie=Cookie();
  const nav =useNavigate()
  async function handlelogout() {
  
      try{
      await axios.get(`${baseURI}/${LOGOUT}`,{
          headers:{
              Authorization: 'Bearer '+ cookie.get('e-commerce')

          }
          
      })
     
      cookie.remove('e-commerce')
      nav('/')
      
      }
      catch(err)
      {
       console.log(err)
      }
  }
  return (
    <div className="text-wrapper" data-content={404}>
      <div className="title">403 - ACCESS DENIED</div>
      <div className="subtitle">
        Oops , You don`t have permission to access this page.
        <Link
          className="d-block text-center btn btn-primary"
          to={role === "1996" ? "/dashboard/writer" : "/"}
        >
          {role === "1996" ? "Go To Writer Page" : "Go To Home Page"}
        </Link>
        <Link
          className="d-block text-center btn btn-primary mt-2"
          onClick={handlelogout}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
