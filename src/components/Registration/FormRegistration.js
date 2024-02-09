import FormInput from "./FormInput";
import React, { useState } from "react";
import "./Registration.scss";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import axios from "axios";

function FormRegistration() {
  const [checked, setChecked] = useState(0);
  const navigation = useNavigate();

  const url = `${APP_ROUTES.URL}/auth/register`;
  const [nameInput, setnameInput] = useState("");
  const [emailInput, setemailInput] = useState("");
  const [phoneInput, setphoneInput] = useState("");
  const [passInput, setpassInput] = useState("");
  const [genderInput, setgenderInput] = useState("");
  const [ageInput, setageInput] = useState("");
  const [cityInput, setcityInput] = useState("");

  const handleRegistration = async () => {
    try {
      const response = await axios.post(url, {
        fullname: nameInput,
        email: emailInput,
        phone_number: phoneInput,
        password: passInput,
        gender: genderInput,
        age: +ageInput,
        city: cityInput,
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
      console.error("Ошибка входа", error);
    }
  };

  return (
    <div className="modalWrapper">
      <div className="headerComponents">
        <h1>Регистрация</h1>
      </div>
      <div className="formWrapper">
        {/* <FormInput type="text" placeholder="Ф.И.О." id="name" name="name" /> */}
        <div className="inputElement">
          <input
            type="text"
            placeholder="Ф.И.О."
            id="name"
            name="name"
            value={nameInput}
            onChange={(e) => setnameInput(e.target.value)}
          />
        </div>
        <div className="agePhoneNumber">
          {/* <FormInput type="date" placeholder="Возраст" id="age" name="age" />
          <FormInput
            type="tel"
            placeholder="+998 (__) ___ - __ - __ "
            value="+998"
            id="phone"
            name="phone"
          /> */}
          <div className="inputElement">
            <input
              type="date"
              placeholder="Возраст"
              id="age"
              name="age"
              value={ageInput}
              onChange={(e) => setageInput(e.target.value)}
            />
          </div>
          <div className="inputElement">
            <input
              type="tel"
              placeholder="+998 (__) ___ - __ - __ "
              value="+998"
              id="phone"
              name="phone"
              value={phoneInput}
              onChange={(e) => setphoneInput(e.target.value)}
            />
          </div>
        </div>
        <div className="genderWrapper">
          <p>Пол</p>
          <div className="radioWrapper">
            <div className="genderItem">
              <p>Муж.</p>
              <input
                type="checkbox"
                onChange={() => setChecked(1)}
                checked={checked === 1}
              />
            </div>
            <div className="genderItem">
              <p>Жен.</p>
              <input
                type="checkbox"
                onChange={() => setChecked(2)}
                checked={checked === 2}
              />
            </div>
          </div>
        </div>
        {/* <FormInput type="text" placeholder="Город" id="city" name="city" />
        <FormInput type="email" placeholder="E-mail" id="email" name="email" />
        <FormInput type="password" placeholder="Пароль" id="pass" name="pass" /> */}
        <div className="inputElement">
          <input
            type="text"
            placeholder="Город"
            id="city"
            name="city"
            value={cityInput}
            onChange={(e) => setcityInput(e.target.value)}
          />
        </div>
        <div className="inputElement">
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
            value={emailInput}
            onChange={(e) => setemailInput(e.target.value)}
          />
        </div>
        <div className="inputElement">
          <input
            type="password"
            placeholder="Пароль"
            id="pass"
            name="pass"
            value={passInput}
            onChange={(e) => setpassInput(e.target.value)}
          />
        </div>
        <div className="rememberPass">
          <div className="passItem">
            <input id="rememberPass" type="checkbox" />
            <label htmlFor="rememberPass">Запомнить пароль</label>
          </div>
          <div className="passItem">
            <label onClick={() => navigation(APP_ROUTES.LOGIN)}>Войти</label>
          </div>
        </div>
        <div className="sendDataWrapper">
          <button className="sendData" onClick={handleRegistration}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormRegistration;
