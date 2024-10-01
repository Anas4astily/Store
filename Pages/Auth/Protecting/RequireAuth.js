import { Outlet, replace, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import { baseURI, USER } from "../../../Api/Api";
import Loading from "../../../Components/Loading/Loading";
import axios from "axios";
import Err403 from "../../Error/403";

export default function RequireAuth({ allowedRole }) {
  //users
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
  //<Outlet /> :<Navigate to={"/loginj"} replace={true}/>
  //token and cookie
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  return token ? (
    user === "" ? (
      <Loading />
    ) :allowedRole.includes(user.role) ?(
      <Outlet />
    ) : (
      <Err403 role={user.role} />
    )
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
}
