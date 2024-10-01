import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solid } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { json, useParams } from "react-router-dom";
import { Axios } from "../../Api/axios";
import { Pro } from "../../Api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkeltonShow from "../Website/SkeltonShow";
import { Cart } from "../../Context/CartChangerContext";
import PlusandMinus from "../Website/Buttouns/PlusandMinus";
export default function SingleProduct() {
  const [product, setproducts] = useState([]);
  const [count, setCount] = useState(5);
  const [productimages, setproductimage] = useState([]);
  const { setisChange } = useContext(Cart);
  const [loading, setloading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    Axios.get(`${Pro}/${id}`)
      .then((res) => {
        setproductimage(
          res.data[0].images.map((img) => {
            return { original: img.image, thumbnail: img.image }; //حصؤا اورجنال وثابنيل منشان وحدة فوق ومشان يلي بينعرضو تحت
          })
        );
        setproducts(res.data[0]);
      })
      .finally(() => setloading(false));
  }, []);
  const RoundStars = Math.round(product.rating);
  const stars = Math.min(RoundStars, 5);
  const showGoldstars = Array.from({ length: stars }).map((_, index) => (
    <FontAwesomeIcon icon={solid} key={index} style={{ color: "gold" }} />
  ));
  const showEmptystars = Array.from({ length: 5 - stars }).map((_, index) => (
    <FontAwesomeIcon icon={regularStar} key={index} />
  ));
  const handlesavetocart = () => {
    const getitems = JSON.parse(localStorage.getItem("product")) || []; //json parse to Enable push function
    const productExist = getitems.findIndex((pro) => pro.id == id);
    if (productExist !== -1) {
      if(getitems[productExist].count){
        getitems[productExist].count+=1;
      }
      else{
        getitems[productExist].count=2;
      }
    } else {
      getitems.push(product);
    }
    localStorage.setItem("product", JSON.stringify(getitems)); // JSON.Stringfy becausse we save on local storage
    setisChange((prev) => (prev = !prev));
  };
  return (
    <Container className="mt-5">
      <div className="d-flex align-items-start flex-wrap row-gap-5">
        {loading ? (
          <>
            <div className="col-lg-4 col-md-6 col-12">
              <SkeltonShow height="250px" length="1" classes="col-12" />
              <div className="col-12 d-flex mt-1">
                <SkeltonShow height="100px" length="1" classes="col-4" />
                <SkeltonShow height="100px" length="1" classes="col-4" />
                <SkeltonShow height="100px" length="1" classes="col-4" />
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-12">
              <div className="ms-lg-5">
                <SkeltonShow
                  height="25px"
                  length="1"
                  classes="col-lg-8 col-12"
                />
                <SkeltonShow
                  height="210px"
                  length="1"
                  classes="col-lg-8 col-12 mt-2"
                />
                <hr className="col-lg-8 col-12" />
                <div className="d-flex align-items-center justify-content-between col-lg-8 col-12">
                  <SkeltonShow height="20px" length="1" classes="col-4 mt-2" />
                  <SkeltonShow height="20px" length="1" classes="col-4 mt-2" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-lg-4 col-md-6 col-12">
              <ImageGallery items={productimages} />
            </div>
            <div className="col-lg-8 col-md-6 col-12">
              <div className="ms-5">
                <h1>{product.title}</h1>
                <p style={{ color: "gray" }}>{product.About}</p>
                <h3 className="fw-normal">{product.description}</h3>
                <div className="d-flex align-items-center justify-content-between pt-4 border-top ">
                  <div>
                    {showGoldstars}
                    {showEmptystars}
                    <div className="d-flex align-items-center gap-3">
                      <h5 className="m-0 text-primary">{product.discount}$</h5>
                      <h6
                        className="m-0"
                        style={{
                          color: "gray",
                          textDecoration: "line-through",
                        }}
                      >
                        {product.price}$
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 ">
                    <PlusandMinus setCount={(data) => setCount(data)} />
                    <div
                      onClick={handlesavetocart}
                      className="border p-2 rounded"
                    >
                      <img
                        src={require("../../Assets/Icon/Cart.png")}
                        alt="cart"
                        width="36px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
