import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Menu } from "../../Context/MenuContext";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { baseURI, LOGOUT, USER } from "../../Api/Api";
import axios from "axios";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
export default function Topbar() {
  const menu = useContext(Menu);
  const setisopen = menu.setisopen;
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  const Navigate = useNavigate();
  async function Go(){
    Navigate('/')
  }

  const [name, setname] = useState("");
  useEffect(() => {
    axios
      .get(`${baseURI}/${USER}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => setname(data.data.name))
      .catch((err) => {
        console.log(err);
        Navigate("/login", { replace: true });
      });
  }, []);

  async function handlelogout() {
    try {
      const res = await axios.get(`${baseURI}/${LOGOUT}`, {
        headers: {
          Authorization: "Bearer " + cookie.get("e-commerce"),
        },
      });
      cookie.remove("e-commerce");
      window.location.pathname = "/login";
    } catch (err) {
      console.log(err);
    }
 
  }
  return (
    <div className="top-bar">
      <div className="d-flex align-items-center justify-content-between h-100 ">
        <div className="d-flex align-items-center gap-5">
          <h3>
            <b style={{fontFamily:'Roboto'}}>Anas-Store</b>
          </h3>
          <FontAwesomeIcon
            onClick={() => setisopen((prev) => !prev)}
            cursor={"pointer"}
            icon={faBars}
          />
        </div>
        <div>
          <DropdownButton
         
            id="dropdown-basic-button  "
            title={name}
          >
            <Dropdown.Item className="fw-bold" style={{fontFamily:'Roboto'}} onClick={handlelogout}>LogOut</Dropdown.Item>
            <Dropdown.Item className="fw-bold" style={{fontFamily:'Roboto'}} onClick={Go}>Go to Home Page</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}
