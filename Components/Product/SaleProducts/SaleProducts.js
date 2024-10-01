import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
export default function SaleProducts(props) {
  const RoundStars = Math.round(props.rating);
  const stars = Math.min(RoundStars, 5);
  const showGoldstars = Array.from({ length: stars }).map((_, index) => (
    <FontAwesomeIcon icon={solid} key={index} style={{ color: "gold" }} />
  ));
  const showEmptystars = Array.from({ length: 5 - stars }).map((_, index) => (
    <FontAwesomeIcon icon={regularStar} style={{color:'black'}} key={index} />
  ));
  return (
    <NavLink style={{textDecoration:'none'}} to={`/product/${props.id}`} className={`col-lg-${props.col} col-md-6 col-12`}  >
      <div className="mt-1 border rounded p-3 h-100 d-flex flex-column justify-content-between">
        <div>
          <p className="text-truncate" style={{ color: "gray" }}>
            {props.title}
          </p>
          <p className="text-black">{props.description}</p>
        </div>
        <div className="px-5 py-5 position-relative">
          {props.sale && (
            <p
              className="m-0 position-absolute top-0 start-0 bg-primary rounded-circle text-white text-uppercase d-inline-block text-center"
              style={{
                width: "50px",
                height: "50px",
                lineHeight: "50px",
              }}
            >
              Sale
            </p>
          )}
          <div
            alt=" "
            className="w-100"
            style={{
              backgroundImage: `url('${props.img}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "170px",
              width: "100%",
            }}
          ></div>
        </div>

        <div className="d-flex align-items-center justify-content-between pt-4 border-top ">
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
