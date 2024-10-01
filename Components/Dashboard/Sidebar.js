import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bars.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "../../Context/MenuContext";
import { useContext, useEffect, useState } from "react";
import { WindowSize } from "../../Context/WindowContext";
import { baseURI, USER } from "../../Api/Api";
import Cookie from "cookie-universal";
import axios from "axios";
import {Links} from './Navlink.js'
export default function Sidebar() {
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  const Navigate = useNavigate();
  const [user, setuser] = useState("");
  useEffect(() => {
    axios
      .get(`${baseURI}/${USER}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => setuser(data.data))
      .catch((err) => {
        console.log(err);
        Navigate("/login", { replace: true });
      });
  }, []);
  const menu = useContext(Menu);
  const isopen = menu.isopen;
  const windowsize = useContext(WindowSize);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "70px",
          left: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.2)",
          display: windowsize < "768" && isopen ? "block" : "none",
        }}
      ></div>
      <div
        className="side-bar pt-3"
        style={{
          width: isopen ? "240px" : "fit-content",
          left: windowsize < "768px" ? (isopen ? 0 : "-100%") : 0,
          position: windowsize < "768px" ? "fixed" : "sticky",
        }}
      >      
            {Links.map((link,key)=>(
              link.role.includes(user.role) && (
                <NavLink
                to={link.path}
                className="d-flex align-items-center gap-2 side-bar-link "
                key={key}
              >
                <FontAwesomeIcon
                  style={{ padding: isopen ? "10px 8px 10px 15px" : "10px 13px" }}
                  icon={link.icon}
                />
                <p className="m-0" style={{ display: isopen ? "block" : "none"}}>
                  {link.name}
                </p>
              </NavLink>
              )
            ))}
      </div>
    </>
  );
}