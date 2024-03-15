import FormInput from "./FormInput";
import React, { useState } from "react";
import "./Registration.scss";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormRegistration() {
  const [checked, setChecked] = useState();
  const navigation = useNavigate();

  const url = `${APP_ROUTES.URL}/auth/register`;
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [cityInput, setCityInput] = useState("");

  const handleRegistration = async () => {
    const inputs = [nameInput, emailInput, phoneInput, passInput, genderInput, ageInput, cityInput];
  
    if (inputs.some((input) => input === "")) {
      toast.error("Заполните все поля");
      return;
    }
  
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
  
      const { access_token: token, user_id, balance } = response.data;
  
      if (token) {
        localStorage.setItem("@token", token);
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("balance", balance);
        navigation(APP_ROUTES.MAIN);
      }
    } catch (error) {
      if(error.response.status === 409) {
        toast.error("Пользователь с таким email или номером телефона уже существует!");
        return;
      } else {
        console.error("Ошибка регистрации", error);
        toast.error("Ошибка регистрации. Попробуйте позже!");
      }
    }
  };
  

  const onAgeInputChange = (value) => {
    let date = new Date();
    let year = date.getFullYear();
    let yearOfBirth = value.split("-")[0];
    let age = year - yearOfBirth;
    setAgeInput(age);
  };

  const setChekedGender = (value, gender) => {
    setChecked(value);
    setGenderInput(gender);
  };

  return (
    <div className="modalWrapper">
      <ToastContainer />
      <div className="headerComponents">
        <h1>Регистрация</h1>
      </div>
      <div className="formWrapper">
        <div className="inputElement">
          <input
            type="text"
            placeholder="Ф.И.О."
            id="name"
            name="name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div className="agePhoneNumber">
          <div className="inputElement">
            <input
              type="date"
              placeholder="Возраст"
              id="age"
              name="age"
              onChange={(e) => onAgeInputChange(e.target.value)}
            />
          </div>
          <div className="inputElement">
            <input
              type="tel"
              placeholder="+998 (__) ___ - __ - __ "
              id="phone"
              name="phone"
              maxLength={13}
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
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
                onChange={() => setChekedGender(0, "male")}
                checked={checked === 0}
              />
            </div>
            <div className="genderItem">
              <p>Жен.</p>
              <input
                type="checkbox"
                onChange={() => setChekedGender(1, "female")}
                checked={checked === 1}
              />
            </div>
          </div>
        </div>
        <div className="inputElement">
          <input
            type="text"
            placeholder="Город"
            id="city"
            name="city"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
        </div>
        <div className="inputElement">
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="inputElement">
          <input
            type="password"
            placeholder="Пароль"
            id="pass"
            name="pass"
            value={passInput}
            onChange={(e) => setPassInput(e.target.value)}
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
