import React from "react";
import './Statistics.scss'
import DonutChart from "./DonutChart";
const Statistics = () => {

    return (
        <>
            <div className="stats">
                <h2>Статистика</h2>
                {/* donut chart */}
                <div className="stats-body">
                    <div className="donut-chart" >
                        <DonutChart></DonutChart>

                    </div>

                    <ul className="stats-list">
                        <li>Успешно</li>
                        <li>Неопределенно</li>
                        <li>Отказ</li>
                        <li>Треш</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Statistics;