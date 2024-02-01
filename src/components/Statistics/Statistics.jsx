import React from "react";
import "./Statistics.scss";
import DonutChart from "./DonutChart";
const Statistics = () => {
  return (
    <>
      <div className="stats">
        <div className="stats-body">
          <div className="donut-chart">
            <DonutChart></DonutChart>
          </div>

          <ul className="stats-list">
            <h2>Статистика</h2>
            <li>Успешно</li>
            <li>Неопределенно</li>
            <li>Отказ</li>
            <li>Треш</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Statistics;
