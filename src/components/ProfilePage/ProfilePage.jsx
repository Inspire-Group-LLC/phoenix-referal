import React, { useEffect, useState } from "react";

import passport1 from "../../images/passport1.jpg";
import passport2 from "../../images/passport2.jpg";
import { PDFrenderer } from "../PDFrenderer/PDFrenderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

export const ProfilePage = (props) => {
  const [cardDate, setCardDate] = useState("");
  const [legalFace, setLegalFace] = useState(false);

  const inputCardDate = (e) => {
    const newCardDate = e.length === 2 && cardDate.length === 1 ? e + "/" : e;
    setCardDate(newCardDate);
  };

  const toggleLegalFace = (e) => {
    setLegalFace(e.target.value === "1" ? true : false);
  };

  return (
    <div
      className={
        props.isOpenProfile ? "profileContainer" : "profileContainer hidden"
      }
    >
      <PDFDownloadLink document={<PDFrenderer />} fileName="Партнерский договор">
        {({ loading }) =>
          loading ? (
            <button className="downloadPDF">Загрузка...</button>
          ) : (
            <button className="downloadPDF">Скачать PDF</button>
          )
        }
      </PDFDownloadLink>
      <div
        className="closeIcon"
        onClick={() => props.setIsOpenProfile(!props.isOpenProfile)}
      ></div>
      <div className="statusAndProfileWrapper">
        <div className="profileWrapper">
          <div className="profileInfo">
            <div className="profileName textInfo">{props.profile.fullname}</div>
            <div className="profileInfoWrapper">
              <div className="profileInfoContainer">
                <div className="phoneNumber textInfo">
                  Номер Телефона: <span>{props.profile.phone_number}</span>
                </div>
                <div className="loginInfo textInfo">
                  Логин: <span>{props.profile.email}</span>
                </div>
                <div className="agreementInfo textInfo">
                  Номер договора: <span>{props.profile.id}</span>
                </div>
              </div>
              <div className="profileInfoContainer">
                <div className="phoneNumber textInfo">
                  Номер Договора: <span>{props.profile.id}</span>
                </div>
                <div className="loginInfo textInfo">
                  Накопленных баллов: <span>{props.profile.balance}</span>
                </div>
                <div className="agreementInfo textInfo">
                  Доступно для вывода:{" "}
                  <span>
                    {(props.profile.balance * props.rate).toLocaleString()} сум
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="statusInfoWrapper">
          <div className="statusInfo">
            <div className="statusInfoText textInfo">
              Статус: <span style={{ color: "red" }}>не верифицирован</span>
            </div>
            <div className="recomendationText">
              Для вывода средств вам требуется пройти верификацию
            </div>
            <button onClick={() => props.setIsOpenVerificationAccordion(true)}>
              Пройти Верификацию
            </button>
          </div>
        </div>
      </div>
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
                <select onChange={(e) => toggleLegalFace(e)}>
                  <option value="0">Физическое Лицо</option>
                  <option value="1">Юридическое Лицо</option>
                </select>

                {legalFace ? (
                  <>
                    <label>Наименование организации</label>
                    <input type="text" placeholder="ООО KOMAPNY" />

                    <label>ИНН</label>
                    <input type="text" placeholder="1234567890" />

                    <label>Рег. код НДС (при наличии)</label>
                    <input type="text" placeholder="1234567890" />

                    <label>Адрес</label>
                    <input type="text" placeholder="Улица, Дом, Квартира" />
                  </>
                ) : (
                  <>
                    <label>Серия и номер паспорта</label>
                    <input type="text" placeholder="AA1234567" />

                    <label>ПИНФЛ</label>
                    <input type="text" placeholder="123456789012" />

                    <label>Срок действия паспорта</label>
                    <input type="date" />
                    <i className="fa fa-calendar"></i>

                    <label>Адрес по прописке</label>
                    <input type="text" placeholder="Улица, Дом, Квартира" />
                  </>
                )}
              </div>
              <div className="formInputWrapper">
                {legalFace ? (
                  <>
                    <label>Расчетный счет</label>
                    <input type="text" placeholder="12345678901234567890" />

                    <label>Название банка</label>
                    <input type="text" placeholder="Название банка" />

                    <label>МФО</label>
                    <input type="text" placeholder="123456" />

                    <label>Телефон</label>
                    <input type="text" placeholder="+998 (__) ___ - __ - __" />
                    <button className="verificationSubmit">
                      Верифицироваться
                    </button>
                  </>
                ) : (
                  <>
                    <label htmlFor="name">Полное ФИО</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Ваше Полное Имя"
                    />

                    <label>ИНН</label>
                    <input type="text" placeholder="1234567890" />

                    <label>Номер банковского счёта</label>
                    <input type="text" placeholder="12345678901234567890" />

                    <label>Номер пластиковой карты</label>
                    <input type="text" placeholder="1234 5678 9012 3456" />

                    <label>Действителен до</label>
                    <input
                      type="text"
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
                      <img src={passport1} alt={passport1} />
                      <img src={passport2} alt={passport2} />
                    </div>

                    <label>Загрузить фотографии</label>
                    <input
                      className="selectImageIconInput"
                      type="file"
                      id="file-input"
                      placeholder="Загрузить фото"
                      multiple
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={(e) => props.handleFileInputChange(e)}
                    />
                    <button className="verificationSubmit">
                      Верифицироваться
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="withdrawal">
        <div className="withdrawalDiv">
          <div className="withdrawalHeading">
            <h2>История вывода стредств</h2>
          </div>
          <div className="tableWithdrawal">
            <table>
              <tbody>
                <tr>
                  <td>Номер</td>
                  <td>Дата и Время</td>
                  <td>Сумма</td>
                  <td>Статус</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>09.04.2024 20:42</td>
                  <td>130000 сум</td>
                  <td>Не одобрено</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>09.04.2024 20:42</td>
                  <td>2300000 сум</td>
                  <td>В Ожидании</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>09.04.2024 20:42</td>
                  <td>330000 сум</td>
                  <td>Одобрено</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
