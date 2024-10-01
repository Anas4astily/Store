import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { baseURI, USER } from "../../../Api/Api";
import { Axios } from "../../../Api/axios";
import axios from "axios";
import Cookie from "cookie-universal";
import Loading from "../../../Components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
const cookie = Cookie();
const token = cookie.get("e-commerce");
export default function User() {
  const focus = useRef("");
  useEffect(() => {
    focus.current.focus();
  },[]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [disable, setdisable] = useState(true);
  const [loading, setloading] = useState(false);
  const Nav = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setloading(true);
    axios
      .get(`${baseURI}/${USER}/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => {
        setname(data.data.name);
        setemail(data.data.email);
        setrole(data.data.role);
        setloading(false);
      })
      .then(() => setdisable(false))
      .catch(() => Nav("/dashboard/users/page/404", { replace: true }));
  },[]);
  async function handlesubmit(e) {
    setloading(true);
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseURI}/${USER}/edit/${id}`,
        { name: name, email: email, role: role },
        { headers: { Authorization: "Bearer " + token } }
      );
      window.location.pathname = "/dashboard/users";
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  }

  return (
    <>
      {loading && <Loading />}
      <Form className=" bg-white w-100 mx-2 p-3  " onSubmit={handlesubmit}>
        <h2 style={{fontFamily:'Roboto'}}> Update User</h2>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="exampleForm.ControlInput1">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            ref={focus}
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            name="name"
            placeholder="Enter your name...."
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="exampleForm.ControlInput2">
          <Form.Label>Email :</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your email...."
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="exampleForm.ControlInput3">
          <Form.Label> Role :</Form.Label>
          <Form.Select value={role} onChange={(e) => setrole(e.target.value)}>
            <option disabled value="">
              Select Role
            </option>
            <option value="1995">Admin</option>
            <option value="2001">User</option>
            <option value="1996">Writer</option>
            <option value="1999">Product Manager</option>
          </Form.Select>
        </Form.Group>
        <button
          disabled={disable}
          type="submit"
          className="btn btn-primary m-0"
        >
          Save
        </button>
      </Form>
    </>
  );
}
