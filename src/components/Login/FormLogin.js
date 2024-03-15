import ThirdPartyReg from "./ThirdPartyReg";
import React, { useState } from "react";
import FormInput from "./FormInput";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import oneid from "../../images/oneid.svg";
import faceid from "../../images/faceid.svg";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormLogin() {
  const [emailInput, setemailInput] = useState("");
  const [passInput, setpassInput] = useState("");
  const url = `${APP_ROUTES.URL}/auth/login`;
  const navigation = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(url, {
        email: emailInput,
        password: passInput,
      });

      const token = response.data.access_token;
      const user_id = response.data.user_id;
      const balance = response.data.balance;

      if (token) {
        localStorage.setItem("@token", token);
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("balance", balance);
        navigation(APP_ROUTES.MAIN);
      }
    } catch (error) {
      toast.error("Не верный логин или пароль");
    }
  };

  return (
    <div className="modalWrapper">
      <ToastContainer />
      <div className="headerComponents">
        <h1>Вход</h1>
        {/* <div className="thirdPartyRegWrapper">
          <ThirdPartyReg img={faceid} title="Face-Id" />
          <ThirdPartyReg img={oneid} title="One-ID" />
        </div> */}
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
