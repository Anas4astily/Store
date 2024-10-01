import {
  faContactBook,
  faCookieBite,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Col,
  Container,
  Image,
  Nav,
  NavLink,
  Row,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function HomeFoot() {
  return (
    <>
    <footer >
      <Container  fluid >
        <Row className="bg-footer p-2 fw-bold ">
          <Col className="mx-0 ">
            <Stack>
              <Image
                src={require("../../Assets/Images/GARY.png")}
                alt="company logo"
                rounded
                width={150}
                height={110}
              />
              <h2 style={{ color: "whitesmoke" }}>Tech World Store</h2>
              <div className="d-flex align-items-start justify-content-stretch gap-3 flex-wrap ">
                <Link
                  className="fw-bold"
                  style={{
                    textDecoration: "none",
                    fontSize: "15px",
                    color: "whitesmoke",
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  className="fw-bold"
                  style={{
                    textDecoration: "none",
                    fontSize: "15px",
                    color: "whitesmoke",
                  }}
                >
                  Necessary Cookies -
                  <FontAwesomeIcon
                    icon={faCookieBite}
                    style={{ color: "white" }}
                  />
                </Link>
              </div>
            </Stack>
          </Col>
          <Col>
            <Nav className="d-flex  align-items-center justify-content-center flex-column fs-5 fw-bold">
              <div className="d-flex flex-row gap-2 flex-wrap">
              <NavLink href="/" className="text-white  ">
                Home
              </NavLink>
              <NavLink href="/about" className="text-white">
                About
              </NavLink>
              <NavLink href="http://www.google.com" className="text-white">
                Google
              </NavLink>
              <NavLink href="/team" className="text-white">
                Team
              </NavLink>
  
              </div>
            </Nav>
          </Col>
          <Col className="d-flex align-items-end flex-column justify-content-end">
            <div>
              <h4>
                Contact us
                <FontAwesomeIcon
                  icon={faContactBook}
                  style={{ color: "rgba(30,155,255,0.9)" }}
                />
              </h4>
              <p style={{ fontSize: "18px" }}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: "18px", color: "sandybrown" }}
                />
                : anasast404@gmail.com
              </p>
              <p style={{ fontSize: "18px" }}>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ fontSize: "18px", color: "green" }}
                />
                : +963-982-694-571 
              </p>
            </div>
            <div className="d-flex align-items-start justify-content-start gap-4 flex-wrap ">
              <Link to="https://www.facebook.com/profile.php?id=100076945162477&mibextid=ZbWKwL">
                <img
                  src={require("../../Assets/Icon/dssdsdsd.jpg")}
                  style={{
                    width: "35px",
                    border: "1px solid rgba(0,0,150,0.5)",
                    borderRadius: "50%",
                  }}
                  alt="photoss"
                />
              </Link>
              <Link>
                <img
                  src={require("../../Assets/Icon/wa=hatsapp.jpg")}
                  style={{
                    width: "35px",
                    border: "1px solid green",
                    borderRadius: "50%",
                  }}
                  alt="photoss"
                />
              </Link>
              <Link to="https://www.instagram.com/anas_ast12?igsh=cnUwMm5qb2J5bGhk">
                <img
                  src={require("../../Assets/Icon/Insta.jpg")}
                  style={{
                    width: "35px",
                    border: "1px solid pink",
                    borderRadius: "50%",
                  }}
                  alt="photoss"
                />
              </Link>
              <Link>
                <img
                  src={require("../../Assets/Icon/Gmail.png")}
                  style={{
                    width: "35px",
                    border: "1px solid white",
                    borderRadius: "50%",
                  }}
                  alt="photoss"
                />
              </Link>
            </div>
          </Col>
          <div style={{fontSize:'18px'}} className="d-flex align-items-start justify-content-between flex-wrap">
            <Link
              style={{
                color: "whitesmoke",
                textDecoration: "none",
              }}
            >
              copyright © 2024 all rights reserved
            </Link>
            <p> </p>
            <p>Contact with us by any way in the above </p>
          </div>
        </Row>
      </Container>
      </footer>
    </>
  );
}
