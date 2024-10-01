import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useInsertionEffect, useState } from "react";

export default function PlusandMinus(props) {
  const [btn, setbtn] = useState(1);
  useEffect(() => {
    props.setCount(btn);
  },[btn]);
  return (
    <div className="input-group d-flex align-items-center gap-2">
      <span
        className="input-group-btn"
        onClick={(e) => {
          if (btn > 0) {
            setbtn((prev) => prev - 1);
          } else {
            setbtn(0);
          }
        }}
      >
        <button
          type="button"
          className="btn btn-danger btn-number"
          data-type="minus"
          data-field="quant[2]"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </span>
      <div className="">
        <input
          type="number"
          name="quant[2]"
          className="form-control input-number"
          min={1}
          max={100}
          value={btn}
          onChange={(e) => {
            if (e.target.value > 0) {
              setbtn(e.target.value);
            } else {
              setbtn(0);
            }
          }}
        />
      </div>
      <span
        className="input-group-btn"
        onClick={() => setbtn((prev) => ++ prev)}
      >
        <button
          type="button"
          className="btn btn-success btn-number"
          data-type="plus"
          data-field="quant[2]"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </span>
    </div>
  );
}
