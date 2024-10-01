import { LatestSale } from "../../../Api/Api.js";
import { Axios } from "../../../Api/axios.js";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SkeltonShow from "../../../Pages/Website/SkeltonShow.js";
import SaleProducts from "./SaleProducts.js";
export default function LatestSaledProduct() {
  const [products, setproducts] = useState([]);
  const [Loading, setloading] = useState(true);
  useEffect(() => {
    Axios.get(`${LatestSale}`)
      .then((res) => setproducts(res.data))
      .finally(() => setloading(false));
  }, []);
  const ProductsShow = products.map((product) => (
    <SaleProducts
      title={product.title}
      description={product.description}
      img={product.images[0].image}
      sale
      price={product.price}
      discount={product.discount}
      rating={product.rating}
      id={product.id}
      col="3"
    />
  ));
  return (
    <Container>
      <h1 className="mt-4 fw-bold ">Latset Sale Product</h1>
      <div className="d-flex align-itmes-stretch justify-content-center flex-wrap mt-5 row-gap-2 mb-5">
        {Loading ? (
          <>
            <SkeltonShow
              length="5"
              height="300px"
              basecolor="gray"
              classes="col-lg-3 col-md-6 col-12"
            />
          </>
        ) : (
          ProductsShow
        )}
      </div>
    </Container>
  );
}
