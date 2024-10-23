import FormInput from "./FormInput";
import React, { useState } from "react";
import "./Registration.scss";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import axios from "axios";

import eye from "../../images/eye.png";
import closeneye from "../../images/closeneye.png";

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
  const [passInputRepeat, setPassInputRepeat] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState(0);

  const togglePasswordVisibility = () => {
    const passwordInputs = document.querySelectorAll(".passwordInput");
    const openEye = document.querySelector(".openeye");
    const closeEye = document.querySelector(".closeneye");

    passwordInputs.forEach((input) => {
      input.type = input.type === "password" ? "text" : "password";
    });

    openEye.style.display =
      openEye.style.display === "block" ? "none" : "block";
    closeEye.style.display =
      openEye.style.display === "block" ? "none" : "block";
  };

  const finishRegistration = async () => {
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
  
      if (response.status === 201) {
        const { access_token: token } = response.data;
        if (token) {
          localStorage.setItem("@token", token);
          navigation(APP_ROUTES.MAIN);
        }
      } else {
        toast.error("Ошибка регистрации. Попробуйте позже!");
      }
    } catch (error) {
      toast.error("Пользователь с таким номером телефона или Логин уже существует!");
    }
  };

  const handleRegistration = async () => {
    try{
      const response = await axios.post(
        `${APP_ROUTES.URL}/auth/verify-phone-code`,
        {
          phone_number: phoneInput,
          code: +verificationCode,
        }
      );
  
      if (response.status === 201) {
        await finishRegistration();
      } 
    } catch (error) {
      toast.error("Неверный код!");
    }
  };

  const checkSmsPassword = async () => {
    const inputs = [
      nameInput,
      emailInput,
      phoneInput,
      passInput,
      passInputRepeat,
      genderInput,
      ageInput,
      cityInput,
    ];

    if (inputs.some((input) => input === "")) {
      toast.error("Заполните все поля");
      return;
    }
    if (passInput !== passInputRepeat) {
      toast.error("Пароли не совпадают");
      return;
    }

    const response = await axios.post(
      `${APP_ROUTES.URL}/auth/send-phone-code`,
      {
        phone_number: phoneInput,
      }
    );

    console.log(response);
    if (response.status === 201) {
      setCheckPassword(true);
      
    } else {
      toast.error("Ошибка отправки смс кода! Попробуйте позже!");
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
        <h1>{checkPassword ? "Введите смс код" : "Регистрация"}</h1>
      </div>
      {checkPassword ? (
        <div className="formWrapper">
          <div className="inputElement">
            <input
              type="number"
              onChange={(e) => {
                setVerificationCode(e.target.value);
              }}
              placeholder="Код из смс"
              id="sms"
              name="sms"
            />
          </div>
          <div className="sendDataWrapper">
            <button className="sendData" onClick={() => handleRegistration()}>
              Подтвердить
            </button>
          </div>
        </div>
      ) : (
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
              placeholder="Логин"
              id="login"
              name="login"
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
              className="passwordInput"
              value={passInput}
              onChange={(e) => setPassInput(e.target.value)}
            />
            <div
              className="showPass"
              onClick={() => togglePasswordVisibility()}
            >
              <img src={eye} alt="eye" className="openeye" />
              <img src={closeneye} alt="closeneye" className="closeneye" />
            </div>
          </div>
          <div className="inputElement">
            <input
              type="password"
              placeholder="Повторите пароль"
              id="passRepeat"
              className="passwordInput"
              name="pass"
              value={passInputRepeat}
              onChange={(e) => setPassInputRepeat(e.target.value)}
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
            <button className="sendData" onClick={checkSmsPassword}>
              Зарегистрироваться
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormRegistration;
