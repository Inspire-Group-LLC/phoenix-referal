import { Form } from "react-router-dom";
import ThirdPartyReg from "./ThirdPartyReg";
import FromInput from "./FormInput";
import React, { useState } from 'react';
import "./Registration.scss";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
function FormRegistration() {
  const [checked, setChecked] = useState(0);
  const navigation = useNavigate();
  return (
    <div className="modalWrapper">
      <div className="headerComponents">
        <h1>Регистрация</h1>
      </div>
      <div className="formWrapper">
        <FromInput type="text" placeholder="Ф.И.О." id="name" name="name" />
        <div className="agePhoneNumber">
          <FromInput type="date" placeholder="Возраст" id="age" name="age" />
          <FromInput
            type="tel"
            placeholder="+998 (__) ___ - __ - __ "
            value="+998"
            id="phone"
            name="phone"
          />
        </div>
        <div className="genderWrapper">
          <p>Пол</p>
          <div className="radioWrapper">
            <div className="genderItem">
              <p>Муж.</p>
              <input type="checkbox" onChange={() => setChecked(1)} checked={checked === 1} />
            </div>
            <div className="genderItem">
              <p>Жен.</p>
              <input type="checkbox" onChange={() => setChecked(2)} checked={checked === 2} />
            </div>
          </div>
        </div>
        <FromInput type="text" placeholder="Город" id="city" name="city" />
        <FromInput type="email" placeholder="E-mail" id="email" name="email" />
        <FromInput type="password" placeholder="Пароль" id="pass" name="pass" />
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
          <button className="sendData">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}

export default FormRegistration;
