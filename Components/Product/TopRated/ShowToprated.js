import { useEffect, useState } from "react";
import { Axios } from "../../../Api/axios.js";
import { TopRatedApi } from "../../../Api/Api.js";
import Toprated from "./Toprated.js";
import SkeltonShow from "../../../Pages/Website/SkeltonShow.js";
export default function ShowTopRated() {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    Axios.get(`${TopRatedApi}`)
      .then((res) => setproducts(res.data))
      .finally(() => setloading(false));
  }, []);
  const ProductShow = products.map((product) => (
    <Toprated
      title={product.title}
      description={product.description}
      img={product.images[0].image}
      sale
      price={product.price}
      discount={product.discount}
      rating={product.rating}
      id={product.id}
    />
  ));
  return (
    <div className="col-md-6 col-12" style={{ border: "2px solid #0D6EFD" }}>
      <h1 className="text-center m-0 p-3 bg-primary text-white">Top Rated</h1>
      <div className="p-5">
        {loading ? (
          <>
            <SkeltonShow
              length="1"
              height="800px"
              basecolor="gray"
              classes="col-md-6 col-12"
            />
          </>
        ) : (
          ProductShow
        )}
      </div>
    </div>
  );
}
