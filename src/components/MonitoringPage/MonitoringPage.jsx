import React from "react";
import NavBar from "../Main/NavBar/NavBar";
import './MonitoringPage.scss';
import LineChart from "./LineChart/LineChart";
const MonitoringPage = () => {
    const data = [{
        id: 1, name: 'Hamid', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
    }, {
        id: 2, name: 'Ivan', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
    },
    {
        id: 3, name: 'Arslan', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
    }]
    return (
        <>
            <div className="monitoring-page">
                <div className="container">
                    <NavBar></NavBar>
                    <div className="content">
                        {/* chart */}

                        <div className="monitoring-chart">
                            <LineChart></LineChart>
                        </div>
                        <div className="monitoring-container">
                            <div className="monitoring-container-header">
                                <h2>Мониторинг</h2>
                                <div className="stats-btn">
                                    <p>Закрыть статистику </p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 15L12 9L18 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div className="monitoring-grid">
                                <div className=" monitoring-header">Имя</div>
                                <div className=" monitoring-header">Ссылка</div>
                                <div className=" monitoring-header">Категория</div>
                                <div className=" monitoring-header">Статус</div>
                                <div className=" monitoring-header">Номер телефона</div>
                                <div className=" monitoring-header"></div>
                                {data.map((item) => (<>
                                    <div className="monitoring-col">{item.name}</div>
                                    <div className="monitoring-col">{item.link}</div>
                                    <div className="monitoring-col">{item.category}</div>
                                    <div className="monitoring-col">{item.status}</div>
                                    <div className="monitoring-col">{item.phone}</div>
                                    <div className="ref-col eye-btn">
                                    </div>
                                </>

                                ))}



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MonitoringPage