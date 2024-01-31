import { useState } from "react";
import "./Registration.scss";

function Input(props) {
  const { type, placeholder, id, name, value } = props;
  const [valueParam, setValueParam] = useState(value);

  return (
    <div className="inputElement">
      <input autoComplete="off" type={type} placeholder={placeholder} name={name} id={id} value={valueParam} onChange={(e) => setValueParam(e.target.value)} />
    </div>
  );
}

export default Input;
