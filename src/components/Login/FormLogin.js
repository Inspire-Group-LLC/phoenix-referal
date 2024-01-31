import { Form } from "react-router-dom";
import ThirdPartyReg from "./ThirdPartyReg";
import FromInput from "./FormInput";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import oneid from "../../images/oneid.svg";
import faceid from "../../images/faceid.svg";

function FormLogin() {
  const navigation = useNavigate();
  return (
    <div className="modalWrapper">
      <div className="headerComponents">
        <h1>Вход</h1>
        <div className="thirdPartyRegWrapper">
          <ThirdPartyReg img={faceid} title="Face-Id" />
          <ThirdPartyReg img={oneid} title="One-ID" />
        </div> 
      </div>
      <div className="formWrapper">
        <FromInput type="email" placeholder="E-mail" id="email" name="email" />
        <FromInput type="password" placeholder="Пароль" id="pass" name="pass" />
        <div className="rememberPass">
          <div className="passItem">
            <input id="rememberPass" type="checkbox" />
            <label htmlFor="rememberPass">Запомнить пароль</label>
          </div>
          <div className="passItem">
            <label onClick={() => navigation(APP_ROUTES.REGISTRATION)}>Регистрация</label>
          </div>
        </div>
        <div className="sendDataWrapper">
          <button className="sendData">Войти</button>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
