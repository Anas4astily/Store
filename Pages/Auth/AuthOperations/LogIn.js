import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseURI, LOGIN } from "../../../Api/Api";
import Loading from "../../../Components/Loading/Loading";
import Cookie from "cookie-universal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
export default function LogIn() {
  //useref for focus
  const focus = useRef(null);
  useEffect(() => {
    focus.current.focus(); // for focus on email when open login page, with use ref in email input
  }, []);
  //navigate
  const navigate = useNavigate();
  //states
  const [Fform, setForm] = useState({
    email: "",
    password: "",
  });
  const [err, seterr] = useState("");
  //handleformchange
  function handlechange(e) {
    setForm({ ...Fform, [e.target.name]: e.target.value });
  }
  //handlesubmit
  async function handlesubmit(e) {
    e.preventDefault();
    setloading(true);
    try {
      const res = await axios.post(`${baseURI}/${LOGIN}`, {
        email: Fform.email,
        password: Fform.password,
      });
      setloading(false);
      const token = res.data.token;
      const role = res.data.user.role;
      const go = role === "1995" ? "users" : "writer";
      cookie.set("e-commerce", token);
      console.log(res);
      navigate(`/dashboard/${go}`, { replace: true }); // replace true remove last history we was in it
    } catch (err) {
      setloading(false);
      if (err.response.status === 401) {
        seterr("Wrong email or password");
      } else {
        seterr("Internal server error");
      }
    }
  }
  //loading
  const [loading, setloading] = useState(false);
  //cookies
  const cookie = Cookie();
  return (
    <>
      {loading && <Loading />}
      <div className="container">
        <div className="row " style={{ height: "100vh" }}>
          <Form className="form " onSubmit={handlesubmit}>
            <div className="custoum-form">
              <h1 style={{ color: "whitesmoke", fontWeight: "bolder" }}>
                LogIn Page
              </h1>

              <Form.Group
                className="form-custom"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  ref={focus}
                  onChange={handlechange}
                  value={Fform.email}
                  type="email"
                  name="email"
                  placeholder="Enter your email...."
                  required
                />
                <Form.Label>Email :</Form.Label>
              </Form.Group>

              <Form.Group
                className="form-custom"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  onChange={handlechange}
                  value={Fform.password}
                  type="password"
                  name="password"
                  placeholder="Enter your password .."
                  minLength="6"
                  required
                />
                <Form.Label>Password :</Form.Label>
              </Form.Group>
              <button type="Submit" className="buttoun">
                LogIn
              </button>
              <div className="google-btn">
                <a href={`http://127.0.0.1:8000/login-google`}>
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src={require("../../../Assets/Icon/googleblack.jpg")}
                      alt="sign in with google"
                    />
                  </div>
                  <p className="btn-text">
                    <b>Sign In With Google</b>
                  </p>
                </a>
              </div>
              {err !== "" && (
                <span className="error">
                  <FontAwesomeIcon icon={faWarning} /> :{err}
                </span>
              )}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
