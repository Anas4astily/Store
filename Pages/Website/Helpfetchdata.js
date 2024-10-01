import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import HomeFoot from "./HomeFoot";
export default function Helpfetchdata() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
