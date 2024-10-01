import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
export default function Toprated(props) {
  const RoundStars = Math.round(props.rating);
  const stars = Math.min(RoundStars, 5);
  const showGoldstars = Array.from({ length: stars }).map((_, index) => (
    <FontAwesomeIcon icon={solid} key={index} style={{ color: "gold" }} />
  ));
  const showEmptystars = Array.from({ length: 5 - stars }).map((_, index) => (
    <FontAwesomeIcon icon={regularStar}style={{color:'black'}} key={index} />
  ));
  return (
    <NavLink to={`/product/${props.id}`} style={{textDecoration:'none'}} className="col-12 border-bottom d-flex align-items-start flex-wrap mb-2 ">
      <div
        alt=" "
        className="col-md-4 col-12"
        style={{
          backgroundImage: `url('${props.img}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "170px",
        }}
      ></div>
      <div className="m-1 col-md-7 col-12  rounded p-3 h-100 d-flex flex-column justify-content-between">
        <div>
          <p className="text-truncate" style={{ color: "gray" }}>
            {props.title}
          </p>
          <p style={{color:'black'}}>{props.description}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-4  ">
          <div>
            {showGoldstars}
            {showEmptystars}
            <div className="d-flex align-items-center gap-3">
              <h5 className="m-0 text-primary">{props.discount}$</h5>
              <h6
                className="m-0"
                style={{ color: "gray", textDecoration: "line-through" }}
              >
                {props.price}$
              </h6>
            </div>
          </div>
          <div className="border p-2 rounded">
            <img
              src={require("../../../Assets/Icon/Cart.png")}
              alt="cart"
              width="30px"
            />
          </div>
        </div>
      </div>
    </NavLink>
  );
}
