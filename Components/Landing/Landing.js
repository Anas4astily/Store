import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="d-flex justify-content-between flex-wrap hand mt-2">
      <Container>
        <div className="col-lg-15 col-md-16 col-12 text-md-start mt-2 mx-1 my-2 px-3 ">
          <h1 className="display-2 animation ">Tech World Store</h1>
          <h4 className="fw-normal animation ">
            Explore Tech World Store – Your one-stop shop for premium laptops
            and cutting-edge gaming gear! Whether you're a student,
            professional, or avid gamer, we offer a wide selection of top brands
            and expert advice to help you find the perfect device. Elevate your
            tech experience with us today.
          </h4>
          <div className="d-flex flex-column w-25 gap-1 flex-wrap">
          <Link
            to="/shop"
            style={{boxShadow:'7px 3px 4px 0 blue'}}
            className="btn btn-primary py-3 px-5 fw-bold text-light mt-2 border rounded "
          >
            Shop Now
          </Link>
          <Link
           style={{boxShadow:'7px 3px 4px 0 green'}}
            to="/register"
            className="btn btn-success py-3 px-5 fw-bold text-light mt-2 border rounded"
          >
            SignUp
          </Link>
          <Link
           style={{boxShadow:'7px 3px 4px 0 red'}}
            to="/login"
            className="btn btn-danger py-3 px-5 fw-bold text-light mt-2 border rounded"
          >
            LogIn
          </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
