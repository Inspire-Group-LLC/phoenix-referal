import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import axios from "axios";
import { APP_ROUTES } from "../../router/Route";



const statusTranslate = (status) => {
  switch (status) {
    case "NEW":
      return "Новый";
    case "IN_PROGRESS":
      return "В процессе";
    case "DONE":
      return "Выполнен";
    case "REJECTED":
      return "Отклонен";
    case "TRASH":
      return "Удален";
    default:
      return status;
  }
};

const maskPhoneNumber = (phoneNumber) => {
  const startFour = phoneNumber.slice(0, 4);
  const endFour = phoneNumber.slice(-5);

  // Mask the rest of the number
  const masked = startFour + "*".repeat(phoneNumber.length - 13) + endFour;



  
  // Combine masked part and the last 4 digits
  return `${masked}`;
}

export const Monitoring = (props) => {
  const [orders,setOrders]= useState([]);
  const getMonitoring = () => {
    axios
      .get(`${APP_ROUTES.URL}/orders/referral`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then((res) => {
        setOrders(res.data);      
        console.log(res.data);  
      })
  };

  useEffect(() => {
    getMonitoring();
  }, []);
  return (
    <>
    
      <div
        className={
          props.isOpenMonitoring
            ? "monitoringContainer"
            : "monitoringContainer hidden"
        }
        >
        <div
            className="closeIcon"
            onClick={() => props.setIsOpenMonitoring(false)}
          ></div>
        <div className="monitoringWrapper">

          {/* <div className="monitoringChartWrapper" style={props.monitoringChartStyles}>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
                {
                  data: [5, 2.5, 6, 2.5, 5.5, 9],
                },
              ]}
              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
            />
          </div> */}
          <div className="monitoringTableWrapper" style={props.monitoringStyles}>
            <div className="monitoringTableHeading">
              <h3>Монитроинг</h3>
              {/* <div className="hideMonitoring">
                <p>Открыть статистику</p>
                <div
                  className="upIcon"
                  style={props.monitoringCloseButton}
                  onClick={() => props.openMonitoring(props.monitoringButton)}
                ></div>
              </div> */}
            </div>
            <div className="monitoring">
              <div className="monitoringHeadings">
                <div>Имя</div>
                <div>Город</div>
                <div>Статус</div>
                <div>Номер телефона</div>
                <div>Ссылка</div>
                <div>Дата</div>
              </div>
              <div className="monitoringDividerLine"></div>
              <div className="monitoringItemsWrapper">
                {
                  orders.map((order) => (
                    <div className="monitoringItems" key={order.id}>
                      <div className="monitoringItem">{order.name} {order.surname} </div>
                      <div className="monitoringItem">{order.city}</div>
                      <div className="monitoringItem">{statusTranslate(order.status) }</div>
                      <div className="monitoringItem">{maskPhoneNumber(order.phone)}</div>
                      <div className="monitoringItem">  {order.Link && order.Link.title ? order.Link.title : "Удалена"}</div>
                      <div className="monitoringItem">{order.created_at.slice(0,10)}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
