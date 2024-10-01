import { Container } from "react-bootstrap";
import Landing from "../../Components/Landing/Landing";
import LatestSaledProduct from "../../Components/Product/SaleProducts/LatestSaleProduct";
import ShowTopRated from "../../Components/Product/TopRated/ShowToprated";
import ShowLatestProducts from "../../Components/Product/LatestProduct/ShowLatestProducts";
import HomeFoot from "./HomeFoot.js";
export default function Homepage() {
  return (
    <div >
      
      <Landing />
      <LatestSaledProduct />
      {/* <BeforeRated /> */}
      <Container>
        <div className="d-flex align-items-start flex-wrap mt-5">
          <ShowTopRated />
          <ShowLatestProducts />
         
        </div>
      </Container>
      <HomeFoot />
    </div>
  );
}
