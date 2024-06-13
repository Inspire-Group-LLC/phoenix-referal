import { useState, useEffect } from "react";
import "./Login.scss";

function Input(props) {
  const { type, placeholder, id, name, value } = props;
  const [valueParam, setValueParam] = useState(value);

  useEffect(() => {
    setValueParam(value);
  }, [value]);

  return (
    <div className="inputElement">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={valueParam}
        onChange={(e) => setValueParam(e.target.value)}
      />
    </div>
  );
}

export default Input;
