import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { baseURI, CATEGORIES, Pro } from "../../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";
import Loading from "../../../Components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../../Api/axios";
const cookie = Cookie();
const token = cookie.get("e-commerce");
export default function Product() {
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(false);
  const [categories, setcategories] = useState([]);
  const [idsfromserver, setidsfromserver] = useState([]);
  const [ImagesFromServer, SetImagesFromServer] = useState([]);
  const [form, setform] = useState({
    category: "Select Category",
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
    rating: "",
    stock:0,
  });
  const { id } = useParams();
  const nav = useNavigate();
  const focus = useRef("");
  const openimg = useRef("");
  const progress = useRef([]);
  const ids = useRef([]); // for get id for each photo and put it in ref
  useEffect(() => {
    focus.current.focus();
  }, []);
  // Useeffect to fetch product
  useEffect(() => {
    Axios.get(`/${Pro}/${id}`)
      .then((data) => {
        setform(data.data[0]);
        SetImagesFromServer(data.data[0].images);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${baseURI}/${CATEGORIES}`, {
        headers: {
          Authorization: "Bearer " + cookie.get("e-commerce"),
        },
      })
      .then((data) => {
        setcategories(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  async function handleEdit(e) {
    setloading(true);
    e.preventDefault();
    try {
      for (let i = 0; i < idsfromserver.length; i++) {
        await Axios.delete(`product-img/${idsfromserver[i]}`);
      }
      const res = await axios.post(`${baseURI}/${Pro}/edit/${id}`, form, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      nav("/dashboard/products");
    } catch (err) {
      setloading(false);
      console.log(err);
    }
  }
  const j = useRef(-1); // لان القيمة الاولى صفر
  // handle image change
  async function HandleImageChange(e) {
    setimages((prev) => [...prev, ...e.target.files]); // ... اذا كان عنا اوبجيكت كبير وبقلبو اوبجيكتات كمان, فالتلت نقط بدون قوسين مصفوفة تعيد كل اوبجيكت لحال لكن حطينا قوسين مصفوفة منشان نساويهن مصفوفة ونشتغل عليهن بالتوابع اللازمة
    const imagesAsFiles = e.target.files; // ...prev مشان اذا ضفت صورة وبدي ضيف فوقها ماتنحذف يعني هي التلت نقط تعيد كلشي قبل كان موجود
    const data = new FormData();
    for (let i = 0; i < imagesAsFiles.length; i++) {
      j.current++; // مشان وقت نضيف صور فوق المنضافات يرجع يصفر المصفوفة ويمشي بالفور من الاول
      data.append("image", imagesAsFiles[i]);
      data.append("product_id", id);
      try {
        const res = await Axios.post("/product-img/add", data, {
          onUploadProgress: (ProgressEvent) => {
            const { loaded, total } = ProgressEvent;
            const percent = Math.floor((loaded * 100) / total);
            if (percent % 10 === 0) {
              progress.current[j.current].style.width = `${percent}%`;
              progress.current[j.current].setAttribute(
                "percent",
                `${percent}%`
              ); // مررنا الاتربيوت بيرسينت لتنسيق السي اس اس في الداشبورد دوت سي اسس
            }
            //   بدنا نستخدم يوز ريف لعرض البروغريس لان اليوز ستيت بتعمل ريندر كنير وبالتالي عدد ريكويست كتير ورح يتعب المعالج لهيك لازم نختبر الطلبات على الشبكة فاست ثري جي عندما نشتغل عالبروغريس ونستخدم اليوز ريف منشان مايصير رندرة
          },
        });
        ids.current[j.current] = res.data.id;
      } catch (err) {
        console.log(err);
      }
    }
  }

  //
  function handlechange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }
  //handle image delete
  async function handleImageDelete(id, img) {
    const findid = ids.current[id];
    try {
      const res = await Axios.delete(`product-img/${findid}`);
      setimages((prev) => prev.filter((image) => image !== img)); //رجع كل الصور ماعدا الصورة يلي نحذفت
      ids.current = ids.current.filter((i) => i !== findid); //رجعلب كلشي ايدي عدا الايدي يلي انا فيها يلي هي فايند ايدي
      --j.current; //( لحتى نضيف الصور الجديدة بدل الصور يلي نحذفت مانضيع بقيمة ضمن حدود المصفوفة) حتى يمكننا اضافة صورة بعد حذف الصور لانو بعد ماحذفت ,القيمة يلي انضافت عالجي صارت مو موجودة فمارح نقدر نعطيها ستايل لهيك منرجع مننقص الجي بمقدار واحد
    } catch (err) {
      console.log(err);
    }
  }
  async function handleDeleteImageFromServer(id) {
    SetImagesFromServer((prev) => prev.filter((img) => img.id !== id));
    setidsfromserver((prev) => {
      return [...prev, id];
    });
  }
  // mapping
  const categoriesshow = categories.map((item, key) => (
    <option key={key} value={item.id}>
      {item.title}
    </option>
  ));
  const ImagesShow = images.map((img, key) => (
    <div className="border p-2 w-100" key={key}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-start gap-2 border p-2 w-100">
          <img alt="" src={URL.createObjectURL(img)} width="100px"></img>{" "}
          {/* if the type of object is file will display photo in this way*/}
          <div>
            <p className="mb-1">{img.name}</p>
            <p>
              {img.size / 1024 < 900
                ? (img.size / 1024).toFixed(2) + "KB"
                : (img.size / (1024 * 1024)).toFixed(2) + "MB"}
            </p>
            {/**to fixed(2) to اخذ رقمين بعد الفاصلة فقط */}
          </div>
        </div>
        <Button
          variant="danger"
          onClick={() => {
            handleImageDelete(key, img);
          }}
        >
          Delete
        </Button>
      </div>
      <div className="custom-progress mt-3">
        <span
          ref={(e) => {
            progress.current[key] = e;
          }}
          className="inner-progress"
        ></span>
      </div>
    </div>
  ));
  const ImagesFromServerShow = ImagesFromServer.map((img, key) => (
    <div className="border p-2 col-2 position-relative" key={key}>
      <div className="d-flex align-items-center justify-content-start gap-2">
        <img alt="" src={img.image} className="w-100"></img>
      </div>
      <div
        style={{ cursor: "pointer" }}
        className="position-absolute top-0 end-0 bg-danger rounded text-white"
      >
        <p
          className="py-1 px-2 m-0"
          onClick={() => handleDeleteImageFromServer(img.id)}
        >
          x
        </p>
      </div>
    </div>
  ));
  return (
    <>
      {loading && <Loading />}
      <Form className=" bg-white w-100 mx-2 p-3  " onSubmit={handleEdit}>
        <h2 style={{fontFamily:'Roboto'}}>Update Product</h2>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="category">
          <Form.Label> Category </Form.Label>
          <Form.Select
            ref={focus}
            value={form.category}
            onChange={handlechange}
            name="category"
          >
            <option disabled>Select Category</option>
            {categoriesshow}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="title">
          <Form.Label> Title </Form.Label>
          <Form.Control
            value={form.title}
            onChange={handlechange}
            type="text"
            name="title"
            placeholder="Enter Title...."
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={form.description}
            onChange={handlechange}
            type="text"
            placeholder="Description...."
            name="description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={form.price}
            onChange={handlechange}
            type="text"
            placeholder="Price...."
            name="price"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="Discount">
          <Form.Label>Discount</Form.Label>
          <Form.Control
            value={form.discount}
            onChange={handlechange}
            type="text"
            placeholder="Discount...."
            required
            name="discount"
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="About">
          <Form.Label>About</Form.Label>
          <Form.Control
            value={form.About}
            onChange={handlechange}
            type="text"
            placeholder="About...."
            name="About"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="stock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            value={form.stock}
            onChange={handlechange}
            type="number"
            placeholder="Stock...."
            name="stock"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="images">
          <Form.Label>Images</Form.Label>
          <Form.Control
            ref={openimg}
            hidden
            multiple //for uplod a lot of photo
            onChange={HandleImageChange} //files for get more photo not one photo
            type="file"
          />
        </Form.Group>
        <div
          onClick={() => {
            openimg.current.click();
          }} //when click will input photo open because ref openimg is in input image cotrol
          className="d-flex align-items-center gap-2 justify-content-center py-3 rounded mb-3 w-100 flex-column"
          style={{
            border: "4px dashed #0086fe",
            cursor: "pointer",
          }}
        >
          <img
            style={{ filter: "grayscale(1)" }}
            src={require("../../../Assets/Images/download.png")}
            alt="Upload Here"
          />
          <p className="fw-bold mb-0 ">Upload Images</p>
        </div>
        <div className="d-flex align-items-start flex-wrap gap-2">
          {ImagesFromServerShow}
        </div>
        <div className="d-flex align-items-start flex-column gap-2">
          {ImagesShow}
        </div>
        <button
          disabled={form.title.length < 1 ? true : false}
          type="submit"
          className="btn btn-primary m-0"
        >
          Save
        </button>
      </Form>
    </>
  );
}
