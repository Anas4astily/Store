import { useEffect, useState } from "react";
import { Latest} from "../../../Api/Api";
import SaleProducts from "../SaleProducts/SaleProducts";
import SkeltonShow from "../../../Pages/Website/SkeltonShow";
import { Axios } from "../../../Api/axios";

export default function ShowLatestProducts() {
  const [products, setproducts] = useState([]);
  const [Loading, setloading] = useState(true);
  useEffect(() => {
    Axios.get(`${Latest}`)
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
      col="6"
    />
  ));
  return (
    <div className="col-md-6 col-12 ">
      <div className="ms-md-3">
        <h1 className="fw-bold">Latest Products</h1>
        <div className="d-flex align-itmes-stretch justify-content-center flex-wrap mt-5 row-gap-2 mb-5">
          {Loading ? (
            <>
              <SkeltonShow
                length="5"
                height="300px"
                basecolor="gray"
                classes="col-12"
              />
            </>
          ) : (
            ProductsShow
          )}
        </div>
      </div>
    </div>
  );
}
