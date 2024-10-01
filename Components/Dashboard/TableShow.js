import {
  faPenToSquare,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PaginatedItems from "./Pagination/Pagination";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Axios } from "../../Api/axios";
import TransformDate from "../../Helpers/TransformDate";
export default function TableShow(props) {
  const currentuser = props.currentuser || {
    name: "",
  };
  //    ستخدام الباغينيت من اجل عرض عدد عناصر محدد في كل صفحة والتنقل بين الصفحات عن طريق الفؤونت ايند
  //  const start = (props.page - 1) * props.limit;
  //  const end = Number(start) + Number(props.limit); //قسرناها لرقم لانو عند مامنختار الرقم من السيليكت رح يختارو كسترينغ وبالتالي رح يضرب ويجيب كل العناصر لهيك صرناه لرقم وبيمشي حالو
  //  const final = props.data.slice(start, end);
  // البحث ضمن الفرونت ايند
  //const filteredData = props.data.filter((item) =>//هون عم نفلتر حسب الاسم للمستخدمين وحسب التايتل للمنتجات والكاتيجوري
  // item[props.search].toLowerCase().includes(search.toLowerCase())//هي العملية منشان نحط البيانات يلي عم نبحث عليها
  // );//search.tolowercase هون مشان اذا يحثنا بحرف كبير او صغير يلاقي لان نحن حولناه لصغير وقلنالو دخل المتسخدم حول لصغير كمان
  // function HandleSearch(e) {
  // setsearch(e.target.value)
  // }
  //search from back end
  const [search, setsearch] = useState("");
  const [FilteredData, setFilteredData] = useState([]);
  const [SearchLoading, setSearchLoading] = useState(false);
  const [date, setdate] = useState("");
  const filterDateByDate =
    date.length !== 0
      ? props.data.filter((item) => TransformDate(item.created_at) === date)
      : props.data;
  const FilterSearchBydate =
    date.length !== 0
      ? FilteredData.filter((item) => TransformDate(item.created_at) === date)
      : FilteredData; // {the second way to filter search الطريقة الثانية للفلترة}
  const ShowWhichData =
    search.length > 0 ? FilterSearchBydate : filterDateByDate; //اذا في بحث بيعرض المفلتر مافي بحث بيعرض الجدول على بيعرض حسب التاريخ المفلت
  //const ShowWhichData =
  // date.length != 0
  //   ? search.length > 0
  //     ? FilterSearchBydate
  //     : filterDateByDate
  //   : search.length > 0
  //   ? FilteredData
  //   : props.data;  {THE ONR WAY FOR SEARCH الطريقة الاولى في فلترة البحث}

  async function getSearchData() {
    try {
      const res = await Axios.post(
        `${props.searchLink}/search?title=${search}`
      );
      setFilteredData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setSearchLoading(false);
    }
  }
  //هون اليوز ايفيكت عملنا كل هالعملية منشان وقت البحث مايصير الف ريكويست كل ماكتبنا حرف حلاوة انو ببلش بحث بعد ماوقف كتابة ب 0.8 ثانية
  useEffect(() => {
    const debounce = setTimeout(() => {
      search.length > 0 ? getSearchData() : setSearchLoading(false);
    }, 500);
    return () => clearTimeout(debounce);
  }, [search]);
  const headershow = props.header.map((item, key) => (
    <th key={key}>{item.name}</th>
  ));
  //هون رح يضرب مع الباجينيشن اذا تركناه فيلتيريد داتا لهيك يدنا نحط شرط اذا ما بحثنا يترك الجدول على حال
  const datashow = ShowWhichData.map((item, key) => (
    <tr key={key}>
      <td>{item.id}</td>
      {props.header.map((item2, key2) => (
        <td key={key2}>
          {item2.key === "image" ? (
            <img width="50px" src={item[item2.key]} alt="im" key={key2}/>
          ) : item2.key === "images" ? (
            <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
              {item[item2.key].map((img) => (
                <img width="50px" src={img.image} alt="" />
              ))}
            </div>
          ) : item2.key === "created_at" || item2.key === "updated_at" ? (
            TransformDate(item[item2.key])
          ) : item[item2.key] === "1995" ? (
            "Admin"
          ) : item[item2.key] === "2001" ? (
            "User"
          ) : item[item2.key] === "1996" ? (
            "Writer"
          ) : item[item2.key] === "1999" ? (
            "Product Manager"
          ) : (
            item[item2.key]
          )}
          {currentuser && item[item2.key] === currentuser.name && "(You)"}
          {item2.key === "price" && "$"}
          {item2.key === "rating" && (
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "gold", paddingLeft: "6px" }}
            />
          )}
        </td>
      ))}
      <td>
        <div className="d-flex align-items-center justify-content-center gap-2 ">
          <Link to={`${item.id}`}>
            <FontAwesomeIcon fontSize={"19px"} icon={faPenToSquare} />
          </Link>
          {currentuser.name !== item.name && (
            <FontAwesomeIcon
              fontSize={"19px"}
              color="red"
              icon={faTrash}
              onClick={() => {
                props.delete(item.id);
              }}
              cursor={"pointer"}
            />
          )}
        </div>
      </td>
    </tr>
  ));
  return (
    <>
      <div className="col-3">
        <Form.Control
          type="search"
          aria-label="input example"
          className="my-2"
          placeholder="Search"
          onChange={(e) => {
            setSearchLoading(true);
            setsearch(e.target.value);
          }}
        />
      </div>
      <div className="col-5">
        <Form.Control
          type="date"
          aria-label="input example"
          className="my-2"
          placeholder="Search"
          onChange={(e) => {
            setdate(e.target.value);
          }}
        />
      </div>
      <table className="tableStyle">
        <thead>
          <tr>
            <th>Id</th>
            {headershow}
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.Loading ? (
            <tr>
              <td colSpan={12} className="text-center">
                Loading.....
              </td>
            </tr>
          ) : SearchLoading ? (
            <tr>
              <td colSpan={12} className="text-center">
                Searching.....
              </td>
            </tr>
          ) : (
            datashow
          )}
        </tbody>
      </table>
      <div className="d-flex align-items-center justify-content-end flrx-wrap">
        <div className="col-1">
          <Form.Select
            onChange={(e) => props.setlimit(e.target.value)}
            aria-label="Default select example"
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </Form.Select>
        </div>
        <PaginatedItems
          setpage={props.setpage}
          itemsPerPage={props.limit}
          data={props.data}
          total={props.total}
        />
      </div>
    </>
  );
}
