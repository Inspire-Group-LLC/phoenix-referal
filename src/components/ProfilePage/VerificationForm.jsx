import React, { useState } from "react";

import passport1 from "../../images/passport1.jpg";
import passport2 from "../../images/passport2.jpg";
import { APP_ROUTES } from "../../router/Route";

export const VerificationForm = (props) => {
  const [cardDate, setCardDate] = useState("");
  const [legalFace, setLegalFace] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    inn: "",
    regCode: "",
    address: "",
    passport: "",
    pinfl: "",
    passportDate: "",
    passportAddress: "",
    bankAccount: "",
    bankName: "",
    mfo: "",
    phone: "",
    cardNumber: "",
  });
  const [files, setFiles] = useState([]);

  const inputCardDate = (e) => {
    const newCardDate = e.length === 2 && cardDate.length === 1 ? e + "/" : e;
    setCardDate(newCardDate);
  };

  const toggleLegalFace = (e) => {
    setLegalFace(e.target.value === "1");
  };

  const handleFileInputChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setFiles(filesArray);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // Append text fields
      formData.append("info", JSON.stringify(info));

      // Append files
      files.forEach(file => formData.append("files", file));


      const response = await fetch(`${APP_ROUTES.URL}/profile/create`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log(response);
        alert("Форма успешно отправлена!");
      } else {
        alert("Произошла ошибка при отправке формы.");
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <div className="verificationForm">
      <div
        className={
          props.isOpenVerificationAccordion
            ? "verificationFormWrapper active"
            : "verificationFormWrapper"
        }
      >
        <div className="verificationAccordeonHeader">
          <h2>Верификация</h2>
          <div
            className="toggleArrow"
            onClick={() =>
              props.setIsOpenVerificationAccordion(
                !props.isOpenVerificationAccordion
              )
            }
          ></div>
        </div>

        <div className="verificationAccordionBody">
          <div className="verificationAccordionWrapper">
            <div className="formInputWrapper">
              <label>Лицо</label>
              <select onChange={toggleLegalFace}>
                <option value="0">Физическое Лицо</option>
                <option value="1">Юридическое Лицо</option>
              </select>

              {legalFace ? (
                <>
                  <label>Наименование организации</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="ООО KOMAPNY"
                    value={info.name}
                    onChange={handleInputChange}
                  />

                  <label>ИНН</label>
                  <input
                    type="text"
                    name="inn"
                    placeholder="1234567890"
                    value={info.inn}
                    onChange={handleInputChange}
                  />

                  <label>Рег. код НДС (при наличии)</label>
                  <input
                    type="text"
                    name="regCode"
                    placeholder="1234567890"
                    value={info.regCode}
                    onChange={handleInputChange}
                  />

                  <label>Адрес</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Улица, Дом, Квартира"
                    value={info.address}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <>
                  <label>Серия и номер паспорта</label>
                  <input
                    type="text"
                    name="passport"
                    placeholder="AA1234567"
                    value={info.passport}
                    onChange={handleInputChange}
                  />

                  <label>ПИНФЛ</label>
                  <input
                    type="text"
                    name="pinfl"
                    placeholder="123456789012"
                    value={info.pinfl}
                    onChange={handleInputChange}
                  />

                  <label>Срок действия паспорта</label>
                  <input
                    type="text"
                    name="passportDate"
                    maxLength={5}
                    placeholder="MM/YY"
                    value={cardDate}
                    onChange={(e) => inputCardDate(e.target.value)}
                  />

                  <label>Адрес по прописке</label>
                  <input
                    type="text"
                    name="passportAddress"
                    placeholder="Улица, Дом, Квартира"
                    value={info.passportAddress}
                    onChange={handleInputChange}
                  />
                </>
              )}
            </div>
            <div className="formInputWrapper">
              {legalFace ? (
                <>
                  <label>Расчетный счет</label>
                  <input
                    type="text"
                    name="bankAccount"
                    placeholder="12345678901234567890"
                    value={info.bankAccount}
                    onChange={handleInputChange}
                  />

                  <label>Название банка</label>
                  <input
                    type="text"
                    name="bankName"
                    placeholder="Название банка"
                    value={info.bankName}
                    onChange={handleInputChange}
                  />

                  <label>МФО</label>
                  <input
                    type="text"
                    name="mfo"
                    placeholder="123456"
                    value={info.mfo}
                    onChange={handleInputChange}
                  />

                  <label>Телефон</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+998 (__) ___ - __ - __"
                    value={info.phone}
                    onChange={handleInputChange}
                  />
                  <button className="verificationSubmit" onClick={handleSubmit}>
                    Верифицироваться
                  </button>
                </>
              ) : (
                <>
                  <label htmlFor="name">Полное ФИО</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ваше Полное Имя"
                    value={info.name}
                    onChange={handleInputChange}
                  />

                  <label>ИНН</label>
                  <input
                    type="text"
                    name="inn"
                    placeholder="1234567890"
                    value={info.inn}
                    onChange={handleInputChange}
                  />

                  <label>Номер банковского счёта</label>
                  <input
                    type="text"
                    name="bankAccount"
                    placeholder="12345678901234567890"
                    value={info.bankAccount}
                    onChange={handleInputChange}
                  />

                  <label>Номер пластиковой карты</label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={info.cardNumber}
                    onChange={handleInputChange}
                  />

                  <label>Действителен до</label>
                  <input
                    type="text"
                    name="cardDate"
                    maxLength={5}
                    placeholder="MM/YY"
                    value={cardDate}
                    onChange={(e) => inputCardDate(e.target.value)}
                  />
                </>
              )}
            </div>
            <div className="formInputWrapper">
              {!legalFace && (
                <>
                  <label>Примеры Фото</label>
                  <div className="examplePassport">
                    <img src={passport1} alt="Пример паспорта 1" />
                    <img src={passport2} alt="Пример паспорта 2" />
                  </div>

                  <label>Загрузить фотографии</label>
                  <input
                    className="selectImageIconInput"
                    type="file"
                    id="file-input"
                    placeholder="Загрузить фото"
                    multiple
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileInputChange}
                  />
                  <button className="verificationSubmit" onClick={handleSubmit}>
                    Верифицироваться
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
