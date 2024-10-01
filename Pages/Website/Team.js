import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Card, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Team() {
  const [showphone, setshowphone] = useState(true);
  const[show,setshow]=useState(true)
  return (
    <>
      <Container
        style={{ boxShadow: "1px 1px 1px px rgba(0,0,0,0.4)" ,margin:'110px 0 0 0 ',backgroundColor:'whitesmoke'}}
        fluid
        className=" d-flex align-items-start justify-content-between gap-1 ms-1 p-4 flex-wrap w-100"
      >
        <Card style={{ width: "18rem", boxShadow: "1px 1px 8px 2px gray" }} className="ss">
          <Card.Img
        
            style={{ height: "290px" }}
            variant="center"
            src={require("../../Assets/Images/1 (1).jpg")}
          />
          <Card.Body>
            <Card.Title style={{fontFamily:'roboto',fontSize:'24px'}}>Anas Astilly</Card.Title>
           
            <Card.Text className="cardtextonhome">
              <div className="d-flex flex-column w-100 flex-wrap">
              <p className="phome">
                <hr style={{color:'red',width:'95%'}}></hr>
            Front-End WebDevelpoer
            </p>
            <Link to="https://react.dev/" className="link">
              <p>
            React.js 
            </p>
            </Link>
            <Link to="https://getbootstrap.com/" className="link">
            <p>
           Bootstrab 5
            </p>
            </Link>
            <Link to="https://tailwindcss.com/" className="link">
            <p>
          TailWind Css
            </p>
            </Link>
      
            </div>
           
            </Card.Text>
            <div className="d-flex align-items-start justify-content-between gap-3 flex-column">
              <Button
                variant="success"
                onClick={() => setshowphone((prev) => !prev)}
              >
                <FontAwesomeIcon icon={faPhone} />{" "}
                <span hidden={showphone} style={{ transition: "3s"}}>
                  : +963-982-694-572
                </span>
              </Button>
              <Button variant="danger" onClick={() => setshow((prev) => !prev)}>
                <FontAwesomeIcon icon={faMessage} />
                <span hidden={show}> : anasast444@gmail.com</span>
              </Button>
            </div>{" "}
          </Card.Body>
        </Card>
        <Card style={{ width: "18\\rem", boxShadow: "1px 1px 8px 2px gray" }} className="ss">
          <Card.Img
            style={{ height: "290px" }}
            variant="center"
            src={require("../../Assets/Images/2.jpg")}
          />
          <Card.Body>
            <Card.Title style={{fontFamily:'roboto',fontSize:'24px'}}>Amory Alamory</Card.Title>
            <Card.Text className="cardtextonhome">
              <div className="d-flex flex-column w-100 flex-wrap">
              <p className="phome">
              <hr style={{color:'red',width:'95%'}}></hr>
            Front-End WebDevelpoer
            </p>
            <Link to="https://react.dev/" className="link">
              <p>
            React.js 
            </p>
            </Link>
            <Link to="https://getbootstrap.com/" className="link">
            <p>
           Bootstrab 5
            </p>
            </Link>
            <Link to="https://tailwindcss.com/" className="link">
            <p>
          TailWind Css
            </p>
            </Link>
      
            </div>
           
            </Card.Text>
            <div className="d-flex align-items-start justify-content-between gap-3 flex-column">
              <Button
                variant="success"
                onClick={() =>  setshowphone((prev) => !prev)}
              >
                <FontAwesomeIcon icon={faPhone} />{" "}
                <span hidden={showphone} style={{ transition: "3s" }}>
                  : +963-982-694-572
                </span>
              </Button>
              <Button variant="danger" onClick={() => setshow((prev) => !prev)}>
                <FontAwesomeIcon icon={faMessage} />
                <span hidden={show}> : anasast444@gmail.com</span>
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card className="ss" style={{ width: "18rem", boxShadow: "1px 1px 8px 2px gray" }}>
          <Card.Img
            style={{ height: "290px" }}
            variant="center"
            src={require("../../Assets/Images/3.jpg")}
          />
          <Card.Body>
            <Card.Title style={{fontFamily:'roboto',fontSize:'24px'}}>Aya Alessa</Card.Title>
            <Card.Text className="cardtextonhome">
              <div className="d-flex flex-column w-100 flex-wrap">
              <p className="phome">
              <hr style={{color:'red',width:'95%'}}></hr>
            Front-End WebDevelpoer
            </p>
            <Link to="https://react.dev/" className="link">
              <p>
            React.js 
            </p>
            </Link>
            <Link to="https://getbootstrap.com/" className="link">
            <p>
           Bootstrab 5
            </p>
            </Link>
            <Link to="https://tailwindcss.com/" className="link">
            <p>
          TailWind Css
            </p>
            </Link>
      
            </div>
           
            </Card.Text>
            <div className="d-flex align-items-start justify-content-between gap-3 flex-column">
              <Button
                variant="success"
                onClick={() =>  setshowphone((prev) => !prev)}
              >
                <FontAwesomeIcon icon={faPhone} />{" "}
                <span hidden={showphone} style={{ transition: "3s" }}>
                  : +963-982-694-572
                </span>
              </Button>
              <Button variant="danger" onClick={() => setshow((prev) => !prev)}>
                <FontAwesomeIcon icon={faMessage} />
                <span hidden={show}> : anasast444@gmail.com</span>
              </Button>
            </div>{" "}
          </Card.Body>
        </Card>
        <Card className="ss" style={{ width: "18rem", boxShadow: "1px 1px 8px 2px gray" }}>
          <Card.Img
            style={{ height: "290px" }}
            variant="center"
            src={require("../../Assets/Images/4.jpg")}
          />
          <Card.Body>
            <Card.Title style={{fontFamily:'roboto',fontSize:'24px'}}>Raghad Alabdullah</Card.Title>
            <Card.Text className="cardtextonhome">
              <div className="d-flex flex-column w-100 flex-wrap">
              <p className="phome">
              <hr style={{color:'red',width:'95%'}}></hr>
             Back-End WebDevelpoer
            </p>
            <Link to="https://laravel.com/" className="link" >
              <p>
            Laravel
            </p>
            </Link>
            <Link to="https://www.php.net/"  className="link">
            <p>
           PhP
            </p>
            </Link>
            <Link to="https://www.mysql.com/" className="link">
            <p>
          MySQl
            </p>
            </Link>
       
            
            </div>
            </Card.Text>
            <div className="d-flex align-items-start justify-content-between gap-3 flex-column">
              <Button
                variant="success"
                onClick={() =>  setshowphone((prev) => !prev)}
              >
                <FontAwesomeIcon icon={faPhone} />{" "}
                <span hidden={showphone} style={{ transition: "3s" }}>
                  : +963-982-694-572
                </span>
              </Button>
              <Button variant="danger" onClick={() => setshow((prev) => !prev)}>
                <FontAwesomeIcon icon={faMessage} />
                <span hidden={show}> : anasast444@gmail.com</span>
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card className="ss" style={{ width: "18rem", boxShadow: "1px 1px 8px 2px gray" }}>
          <Card.Img
            style={{ height: "290px" }}
            variant="center"
            src={require("../../Assets/Images/5.jpg")}
          />
          <Card.Body>
            <Card.Title style={{fontFamily:'roboto',fontSize:'24px'}}>AbdAlkareem Rahal</Card.Title>
            <Card.Text className="cardtextonhome">
              <div className="d-flex flex-column w-100 flex-wrap">
              <p className="phome">
              <hr style={{color:'red',width:'95%'}}></hr>
             Back-End WebDevelpoer
            </p>
            <Link to="https://laravel.com/" className="link" >
              <p>
            Laravel
            </p>
            </Link>
            <Link to="https://www.php.net/"  className="link">
            <p>
           PhP
            </p>
            </Link>
            <Link to="https://www.mysql.com/" className="link">
            <p>
          MySQl
            </p>
            </Link>
       
            
            </div>
            </Card.Text>
            <div className="d-flex align-items-start justify-content-between gap-3 flex-column">
              <Button
                variant="success"
                onClick={() =>  setshowphone((prev) => !prev)}
              >
                <FontAwesomeIcon icon={faPhone} />{" "}
                <span hidden={showphone} style={{ transition: "3s" }}>
                  : +963-982-694-572
                </span>
              </Button>
              <Button variant="danger " onClick={() => setshow((prev) => !prev)}>
                <FontAwesomeIcon icon={faMessage} />
                <span hidden={show}> : anasast444@gmail.com</span>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
