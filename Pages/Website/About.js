import {
  faContactBook,
  faEnvelope,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons/faGamepad";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const nav =useNavigate();
  function myfun(){
    nav('/register')
  }
  return (
    <div className="body">
      <header className="header">
        <h1 style={{ color: "whitesmoke" }}>About Us</h1>
      </header>
      <main className="main">
        <section className="about">
          <h2>Welcome to Tech World Technology !</h2>
          <p style={{ fontSize: "18px" }}>
            At Tech World Technology , we're passionate about technology and
            gaming. We offer a curated selection of high-performance laptops and
            the latest gaming equipment to elevate your experience, whether
            you're working or playing.
          </p>
          <h3 className="h3">
            Our Mission <FontAwesomeIcon icon={faGamepad} />
          </h3>
          <p style={{ fontSize: "18px" }}>
            Our mission is to provide top-notch products and exceptional
            customer service to ensure that you find exactly what you need to
            power your creativity, productivity, and gaming adventures.
          </p>
          <h3 className="h3">
            Why Choose Us <FontAwesomeIcon icon={faQuestionCircle} />
          </h3>
          <ul className="ul">
            <li>Expert advice from tech enthusiasts.</li>
            <li>Exclusive deals on top brands.</li>
            <li>Comprehensive product range.</li>
            <li>Fast and reliable shipping.</li>
          </ul>
          <h3 className="h3" >
            Join Our Community <FontAwesomeIcon className="amfont" icon={faSignIn} onClick={myfun}  />
          </h3>
          <p style={{ fontSize: "18px" }}>
            Follow us on social media to stay updated on new arrivals,
            promotions, and tech tips. We’re more than just a store; we’re a
            community of tech lovers and gamers!
          </p>
          <Container fluid>
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
          </Container>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Tech World Technology. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
