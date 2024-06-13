import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export const Monitoring = (props) => {
  return (
    <>
      <div
        className={
          props.isOpenMonitoring
            ? "monitoringContainer"
            : "monitoringContainer hidden"
        }
      >
        <div className="monitoringWrapper">
          <div
            className="closeIcon"
            onClick={() => props.setIsOpenMonitoring(false)}
          ></div>
          <div className="monitoringChartWrapper" style={props.monitoringChartStyles}>
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
          </div>
          <div className="monitoringTableWrapper" style={props.monitoringStyles}>
            <div className="monitoringTableHeading">
              <h3>Монитроинг</h3>
              <div className="hideMonitoring">
                <p>Открыть статистику</p>
                <div
                  className="upIcon"
                  style={props.monitoringCloseButton}
                  onClick={() => props.openMonitoring(props.monitoringButton)}
                ></div>
              </div>
            </div>
            <div className="monitoring">
              <div className="monitoringHeadings">
                <div>Имя</div>
                <div>Ссылка</div>
                <div>Категория</div>
                <div>Статус</div>
                <div>Номер телефона</div>
              </div>
              <div className="monitoringDividerLine"></div>
              <div className="monitoringItemsWrapper">
                <div className="monitoringItems">
                  <div className="monitoringItem">Амиров Амир Амирович</div>
                  <div className="monitoringItem">https://сайт.уз</div>
                  <div className="monitoringItem">БАД V67</div>
                  <div className="monitoringItem">Успешно</div>
                  <div className="monitoringItem">+998930174327</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
