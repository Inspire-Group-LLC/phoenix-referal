import React from "react";
import "./SmallStatistics.scss";
import DonutChart from "./SmallDonutChart";
const SmallStatistics = (
  props
) => {
  return (
    <>
    <h2 style={{color:"white"}}>Статистика</h2>
      <div className="stats">
        <div className="stats-body">


          <ul className="stats-list">
            <li>Всего {props.total}</li>
            <li>Новые {props.new}</li>
            <li>В ожидании {props.in_progress}</li>
            <li>Отказ {props.rejected}</li>
            <li>Отменено {props.trash}</li>
            <li>Куплено {props.done}</li>
          </ul>
          <div className="donut-chart">
            <DonutChart></DonutChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallStatistics;
