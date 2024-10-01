import { useEffect, useState } from "react";
import Cookie from "cookie-universal";
import { Link } from "react-router-dom";
import { baseURI, CAT, CATEGORIES } from "../../../Api/Api";
import TableShow from "../../../Components/Dashboard/TableShow";
import axios from "axios";
export default function Categories() {
  const [categories, setcategories] = useState([]);
  const [limit, setlimit] = useState(3);
  const [page, setpage] = useState(1);
  const [Loading, setLoading] = useState(false);
  const [total, settotal] = useState(0); //منستخمها لنجلب العدد الكلي يلي جاي من الباك ايند
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  async function handledelete(id) {
    try {
      const res = await axios.delete(`${baseURI}/${CAT}/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setcategories((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURI}/${CATEGORIES}?limit=${limit}&page=${page}`, {
        headers: {
          Authorization: "Bearer " + cookie.get("e-commerce"),
        },
      })
      .then((data) => {
        setcategories(data.data.data);
        settotal(data.data.total);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [limit, page]); //جهي الحركة هون حطينا ليميت وبيج بالرابط منشان نتحكم بالباجينيشن من الباك ايند بيحث تتغير المعلومات مع تغيير الليميت والبيج
  const header = [
    { key: "title", name: "Title" },
    { key: "image", name: "Image" },
    { key: "created_at", name: "Created" },
    { key: "updated_at", name: "Updated" },
  ];
  return (
    <div className="bg-white p-2 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Categories Page</h1>
        <Link to="/dashboard/category/add" className="btn btn-primary">
          Add Category
        </Link>
      </div>
      <TableShow
        header={header}
        data={categories}
        delete={handledelete}
        limit={limit}
        page={page}
        setpage={setpage}
        setlimit={setlimit}
        Loading={Loading}
        total={total}
        search="title"
        searchLink={CAT}
      />
    </div>
  );
}
