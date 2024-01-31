import "./Login.scss";

function ThirdPartyReg(props) {
  return (
    <div className="thirdPartyRegElement">
      {props.img && <img src={props.img} alt={props.title} />}
      <p>{props.title}</p>
    </div>
  );
}

export default ThirdPartyReg;
