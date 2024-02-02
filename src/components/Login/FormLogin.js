import ThirdPartyReg from "./ThirdPartyReg";
import React, { useState } from "react";
import FormInput from "./FormInput";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import oneid from "../../images/oneid.svg";
import faceid from "../../images/faceid.svg";
import axios from "axios";

function FormLogin() {
  const [emailInput, setemailInput] = useState("");
  const [passInput, setpassInput] = useState("");
  const url = "http://localhost:3000/auth/login";
  const navigation = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(url, {
        email: emailInput,
        password: passInput,
      });

      const token = response.data.access_token;

      if (token) {
        localStorage.setItem("@token", token);
        navigation(APP_ROUTES.MAIN);
      }
    } catch (error) {
      console.error("Ошибка входа", error);
    }
  };

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
        {/* <FormInput
          type="email"
          placeholder="E-mail"
          id="email"
          value={emailInput}
          onChange={(e) => setemailInput(e.target.value)}
          name="email"
        />
        <FormInput
          type="password"
          placeholder="Пароль"
          id="pass"
          value={passInput}
          onChange={(e) => setpassInput(e.target.value)}
          name="pass"
        /> */}

        <div className="inputElement">
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            value={emailInput}
            onChange={(e) => setemailInput(e.target.value)}
            name="email"
          />
        </div>
        <div className="inputElement">
          <input
            type="password"
            placeholder="Пароль"
            id="pass"
            value={passInput}
            onChange={(e) => setpassInput(e.target.value)}
            name="pass"
          />
        </div>
        <div className="rememberPass">
          <div className="passItem">
            <input id="rememberPass" type="checkbox" />
            <label htmlFor="rememberPass">Запомнить пароль</label>
          </div>
          <div className="passItem">
            <label onClick={() => navigation(APP_ROUTES.REGISTRATION)}>
              Регистрация
            </label>
          </div>
        </div>
        <div className="sendDataWrapper">
          <button className="sendData" onClick={handleLogin}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
