import React, { useEffect, useState } from "react";

import { PDFrenderer } from "../PDFrenderer/PDFrenderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { VerificationForm } from "./VerificationForm";

export const ProfilePage = (props) => {



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
          
            {
              props.profile.isVerified ? (
                <div className="statusInfoText textInfo">
                  Верификация пройдена
                </div>
              ) : (
                <div className="statusInfo">
                  <div className="statusInfoText textInfo">
                    Статус: <span style={{ color: 'red' }}> {'Не верифицирован'}</span>             
                    </div>
                    <div className="recomendationText">
                      Для вывода средств вам требуется пройти верификацию
                    </div>
                    <button onClick={() => props.setIsOpenVerificationAccordion(true)}>
                      Пройти Верификацию
                    </button>
                  </div>
              )
            }
            
        </div>
      </div>

      {
        props.profile.isVerified ? 
        null :
        <VerificationForm {...props} />
      }
      {/* <div className="withdrawal">
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
      </div> */}
    </div>
  );
};
