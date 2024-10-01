import { useContext, useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Axios } from "../../Api/axios";
import { CATEGORIES } from "../../Api/Api";
import Stringslice from "../../Helpers/Stringslice";
import Skeleton from "react-loading-skeleton";
import SkeltonShow from "./SkeltonShow";
import { Cart } from "../../Context/CartChangerContext";
export default function NavBar() {
  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([]);
 //هي منشان تنضاف المنتج عالكارت فور اضافته بدون انتظار تحديث الصفحة,وبدما نستخدم اليوزكونيكست منشان ننقل المتغير بين الصفحات
  const {isChange}=useContext(Cart)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    Axios.get(`${CATEGORIES}`)
      .then((res) => setcategories(res.data.slice(0, 8)))
      .finally(() => setloading(false)); //slice -8 to fetch last -8 categories
  }, []);
  useEffect(() => {
    const getProducts = JSON.parse(localStorage.getItem("product"))||[] ;//حطينا قوسين المصفوفة منشان اذا مافي داتا باللوكال ستوريج مايفرش الموقع
    setproducts(getProducts);
  }, [isChange]);
  const ProductShow = products?.map((product, key) => (//  هاد الحل التاني منشان اذا مافي داتا مايفرش الموقع انو نحط اشارة الاستفهام بعد البرودكت
    <div className="mb-4" key={key}>
      <div className="d-flex align-items-start gap-2 flex-wrap">
        <img
          src={product.images[0].image}
          height={"80px"}
          style={{objectFit:"cover"}}
          alt="image"
          className="rounded col-sm-3 col-12"
        />
        <div className="col-sm-6 col-12">
          <h6>{product.title}</h6>
          <p className="m-0 text-truncate">{product.description}</p>
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
      </div>
    </div>
  ));
  const CategoriesShow = categories.map((category, key) => (
    <Link
      to={`/category/${category.id}`}
      className="m-3 category-title text-black"
      key={key}
    >
      {Stringslice(category.title, 15)}
    </Link>
  ));

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ProductShow}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>

      <nav className="py-3 ">
        <Container >
          <div className="d-flex align-items-center justify-content-between flex-wrap  ">
            <Link className="col-3" to="/">
              <img
                width="200px"
                src={require("../../Assets/Icon/logo.png")}
                alt="logo"
              />
            </Link>
            <div className=" col-12 col-md-6 order-md-2 mt-md-0 mt-3 position-relative">
              <Form.Control
                type="search"
                className="form-control custom-search py-3 rounded-0"
                placeholder="Search Product"
              />
              <h3 className="btn btn-primary  position-absolute top-0 end-0 h-100 line-height m-0 px-4 rounded-0 d-flex align-items-center justify-content-center">
                Search
              </h3>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-end gap-4 order-md-3 order-1">
              <div onClick={handleShow}>
                <img
                  width="40px"
                  src={require("../../Assets/Icon/Cart.png")}
                  alt="cart"
                />
              </div>
              <Link to="/profile">
                <img
                  width="80px"
                  src={require("../../Assets/Icon/Profile.png")}
                />
              </Link>
            </div>
          </div>
          <div className="mt-3">
            <div className="d-flex align-items-center justify-content-start gap-5 flex-wrap">
              {loading ? (
                <>
                  <SkeltonShow
                    length="8"
                    basecolor="gray"
                    height="30px"
                    width="70px"
                    classes="col-2"
                  />
                </>
              ) : (
                CategoriesShow
              )}
              <Link className="text-black category-title " to="/categories">
                {loading ? <Skeleton height="40px" /> : "Show All"}
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
