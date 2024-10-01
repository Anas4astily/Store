import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseURI, REGISTER } from "../../../Api/Api";
import Loading from "../../../Components/Loading/Loading";
import  Cookie from'cookie-universal'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons/faWarning";
export default function Register() {
  // ref focus
  const focus=useRef('')
  useEffect(()=>{
    focus.current.focus();
  },[])
  //navigate
  const navigate=useNavigate()
  //states
  const [Fform, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err,seterr]=useState("")
  const cookie=Cookie();
  //handleformchange
  function handlechange(e) {
    setForm({ ...Fform, [e.target.name]: e.target.value });
  }
  //handlesubmit
  async function handlesubmit(e) {
    e.preventDefault();
    setloading(true)
    try {
      const res =await axios.post(`${baseURI}/${REGISTER}`, Fform);
      navigate('/dashboard/users',{replace:true});
      setloading(false)
      const token=res.data.token;
      cookie.set('e-commerce',token);
   
    } catch (err) {
      setloading(false)
       if(err.response.status === 422)
       {
        seterr('Email is already been taken')
       }
       else{
        seterr('Internal server error')
       }
    }
  }
  //loading
  const [loading,setloading]=useState(false)
  return (
    <>
    {loading && <Loading/>}
    <div className="container">
      <div className="row" style={{height:'100vh'}}>
        <Form className="form " onSubmit={handlesubmit}>
          <div className="custoum-form">
            <h1 style={{fontWeight:'bold',color:'whitesmoke'}}>Register Now</h1>
            <Form.Group
                className="form-custom"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  ref={focus}//to focus in it direct when open page
                  onChange={handlechange}
                  value={Fform.name}
                  type="text"
                  name="name"
                  placeholder="Enter your name...."
                  required
                />
                <Form.Label>Name :</Form.Label>
              </Form.Group>
              <Form.Group
                className="form-custom"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
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
                controlId="exampleForm.ControlInput3"
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
            <button  className="buttoun">Register</button>
            <div className="google-btn">
                <a href={`http://127.0.0.1:8000/login-google`}>
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src={require('../../../Assets/Icon/googleblack.jpg')}
                      alt="sign in with google"
                    />
                  </div>
                  <p className="btn-text">
                    <b>Register With Google</b>
                  </p>
                </a>
              </div>
            {err !== "" && <span className="error"><FontAwesomeIcon icon={faWarning}/> :{err}</span>}
          </div>
        </Form>
      </div>
    </div>
    </>
  );
}
