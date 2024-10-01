import { useEffect, useRef, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { baseURI, CAT } from "../../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";
import Loading from "../../../Components/Loading/Loading";
const cookie = Cookie();
const token = cookie.get("e-commerce");
export default function AddCategory() {
  const focus = useRef("");
  useEffect(() => {
    focus.current.focus();
  }, []);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
  async function handlesubmit(e) {
    setloading(true);
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("image", image);
    try {
      const res = await axios.post(`${baseURI}/${CAT}/add`, form, {
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
        <h2 style={{fontFamily:'Roboto'}}>Add Category</h2>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="exampleForm.ControlInput1">
          <Form.Label> Title </Form.Label>
          <Form.Control
          ref={focus}
            value={title}
            onChange={(e) => settitle(e.target.value)}
            type="text"
            placeholder="Enter Title...."
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" style={{fontFamily:'Roboto'}} controlId="Image">
          <Form.Label> Image </Form.Label>
          <Form.Control
            onChange={(e) => setimage(e.target.files.item(0))}
            type="file"
            required
          ></Form.Control>
        </Form.Group>
        <button
          disabled={title.length < 1 ? true : false}
          type="submit"
          className="btn btn-primary m-0"
        >
          Add Category
        </button>
      </Form>
    </>
  );
}
