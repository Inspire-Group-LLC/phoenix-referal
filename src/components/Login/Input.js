import { useState } from "react";
import "./Login.scss";

function Input(props) {
  const { type, placeholder, id, name, value } = props;
  const [valueParam, setValueParam] = useState(value);

  return (
    <div className="inputElement">
      <input type={type} placeholder={placeholder} name={name} id={id} value={valueParam} onChange={(e) => setValueParam(e.target.value)} />
    </div>
  );
}

export default Input;
