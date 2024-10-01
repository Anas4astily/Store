import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { baseURI, CAT } from "../../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";
import Loading from "../../../Components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
const cookie = Cookie();
const token = cookie.get("e-commerce");
export default function Category() {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [disable, setdisable] = useState(true);
  const [loading, setloading] = useState(false);
  const Nav = useNavigate();
  const {id} = useParams();// get id as object from any link /:id , when write it between {} will get id direct
  useEffect(() => {
    setloading(true);
    axios
      .get(`${baseURI}/${CAT}/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => {
        settitle(data.data.title);
        setloading(false);
      })
      .then(() => setdisable(false))
      .catch(() => Nav("/dashboard/categories/page/404", { replace: true }));
  }, []);
  async function handlesubmit(e) {
    setloading(true);
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("image", image);
    try {
      const res = await axios.post(`${baseURI}/${CAT}/edit/${id}`, form, {
        headers: { Authorization: "Bearer " + token },
      });
      window.location.pathname = "/dashboard/categories";
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  }

  return (
    <>
      {loading && <Loading />}
      <Form className=" bg-white w-100 mx-2 p-3  " onSubmit={handlesubmit}>
        <h2 style={{fontFamily:'Roboto'}}> Update Category</h2>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="exampleForm.ControlInput1">
          <Form.Label>Title :</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => settitle(e.target.value)}
            type="text"
            placeholder="Enter your title...."
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}}controlId="Image">
          <Form.Label> Image </Form.Label>
          <Form.Control
            onChange={(e) => setimage(e.target.files.item(0))}
            type="file"
            required
          ></Form.Control>
        </Form.Group>
        <button
          disabled={disable}
          type="submit"
          className="btn btn-primary m-0"
        >
          Save
        </button>
      </Form>
    </>
  );
}
