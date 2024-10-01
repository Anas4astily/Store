import { useEffect, useState } from "react";
import { Axios } from "../../Api/axios";
import { CATEGORIES } from "../../Api/Api";
import { Container } from "react-bootstrap";
import SkeltonShow from "./SkeltonShow";
import HomeFoot from "./HomeFoot";

export default function WebsiteCategories() {
  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    Axios.get(`${CATEGORIES}`)
      .then((res) => setcategories(res.data))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, []);
  const CategoriesShow = categories.map((item, key) => (
    <div className="col-lg-2 col-md-6 col-12 bg-transparent border-0 " key={key}>
      <div className="m-1 bg-white border d-flex align-items-center justify-content-start rounded py-2 h-100 ">
        <img className="ms-2" width="50px" src={item.image} alt="just img"  />
        <p className="m-0" style={{fontWeight:'bold',fontSize:'20px'}}>{item.title}</p>
      </div>
    </div>
  ));
  return (
    <>
      <div className="nice py-5">
        <Container>
          <div className="d-flex align-items-stretch justify-content-center flex-wrap row-gap-2">
            {loading ? (
              <SkeltonShow
                length='40'
                height="70px"
                basecolor="gray"
                classes="col-lg-2 col-md-6 col-12"
              />
            ) : (
              CategoriesShow
            )}
          </div>
        </Container>
       
      </div>
    
    </>
  );
}
