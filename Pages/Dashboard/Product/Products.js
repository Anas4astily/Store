import { useEffect, useState } from "react";
import Cookie from "cookie-universal";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURI, Pro, PRO } from "../../../Api/Api";
import TableShow from "../../../Components/Dashboard/TableShow";
export default function Products() {
  const [products, setproducts] = useState([]);
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(3);
  const [Loading, setLoading] = useState(false);
  const [total, settotal] = useState(0); //منستخمها لنجلب العدد الكلي يلي جاي من الباك ايند
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  async function handledelete(id) {
    try {
      const res = await axios.delete(`${baseURI}/${Pro}/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setproducts((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURI}/${PRO}?limit=${limit}&page=${page}`, {
        headers: {
          Authorization: "Bearer " + cookie.get("e-commerce"),
        },
      })
      .then((data) => {
        setproducts(data.data.data);
        settotal(data.data.total);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [limit, page]); //هي الحركة هون حطينا ليميت وبيج بالرابط منشان نتحكم بالباجينيشن من الباك ايند بيحث تتغير المعلومات مع تغيير الليميت والبيج

  const header = [
    { key: "images", name: "Images" },
    { key: "title", name: "Title" },
    { key: "description", name: "Description" },
    { key: "price", name: "Price" },
    { key: "rating", name: "Rating" },
    { key: "created_at", name: "Created" },
    { key: "updated_at", name: "Updated" },
  ];
  return (
    <div className="bg-white p-2 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Products Page</h1>
        <Link to="/dashboard/product/add" className="btn btn-primary">
          Add Product
        </Link>
      </div>
      <TableShow
        header={header}
        data={products}
        delete={handledelete}
        page={page}
        limit={limit}
        setpage={setpage}
        setlimit={setlimit}
        Loading={Loading}
        total={total}
        search="title"
        searchLink={Pro}
      />
    </div>
  );
}
