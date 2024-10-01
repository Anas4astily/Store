import { useEffect, useState } from "react";
import { baseURI, USER, USERS } from "../../../Api/Api.js";
import axios from "axios";
import Cookie from "cookie-universal";
import { Link } from "react-router-dom";
import TableShow from "../../../Components/Dashboard/TableShow.js";
export default function Users() {
  const [users, setusers] = useState([]);
  const [currentuser, setcurrentuser] = useState("");
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(3);
  const [total, settotal] = useState(0); //منستخمها لنجلب العدد الكلي يلي جاي من الباك ايند
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  const [Loading, setLoading] = useState(false);
  async function handledelete(id) {
    try {
      const res = await axios.delete(`${baseURI}/${USER}/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setusers((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  }
  const headers = [
    {
      key: "name",
      name: "Username",
    },
    {
      key: "email",
      name: "Email",
    },
    {
      key: "role",
      name: "Role",
    },
    { key: "created_at", name: "Created" },
    { key: "updated_at", name: "LastLogin" },
  ];
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURI}/${USERS}?limit=${limit}&page=${page}`, {
        headers: {
          Authorization: "Bearer " + cookie.get("e-commerce"),
        },
      })
      .then((data) => {
        setusers(data.data.data);
        settotal(data.data.total);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [limit, page]); //هي الحركة هون حطينا ليميت وبيج بالرابط منشان نتحكم بالباجينيشن من الباك ايند بيحث تتغير المعلومات مع تغيير الليميت والبيج
  useEffect(() => {
    axios
      .get(`${baseURI}/${USER}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setcurrentuser(res.data));
  }, []);
  return (
    <div className="bg-white p-2 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Users Page</h1>
        <Link to="/dashboard/user/add" className="btn btn-primary">
          Add User
        </Link>
      </div>
      <TableShow
        header={headers}
        data={users}
        delete={handledelete}
        currentuser={currentuser}
        page={page}
        limit={limit}
        setpage={setpage}
        setlimit={setlimit}
        Loading={Loading}
        total={total}
        search="name"
        searchLink={USER}
      />
    </div>
  );
}
