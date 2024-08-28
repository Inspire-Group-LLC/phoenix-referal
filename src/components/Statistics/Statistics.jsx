import React from "react";
import "./Statistics.scss";
import DonutChart from "./DonutChart";
const Statistics = (props) => {
  return (
    <>
      <div className="stats">
        <div className="stats-body">
          <div className="donut-chart">
            <DonutChart rejected={props.rejected} in_progress={props.in_progress} done={props.done} trash={props.trash}></DonutChart>
          </div>

          <ul className="stats-list">
            <h2>Статистика</h2>
            <li>Успешно</li>
            <li>В ожидании</li>
            <li>Отказ</li>
            <li>Отменено</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Statistics;
