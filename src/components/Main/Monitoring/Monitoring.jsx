import React from "react";
import './Monitoring.scss'
import './../Main.scss';
const Monitoring = () => {

    const data = [{
        id: 1, name: 'Hamid', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
    }, {
        id: 2, name: 'Ivan', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
    },
    {
        id: 3, name: 'Arslan', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
    }]
    return (<>

<div className="monitoring">
      <h2>Мониторинг</h2>
      <div className="monitoring-table">
          <p className="monitoring-header">Имя</p>
          <p className="monitoring-header">Номер</p>
          <p className="monitoring-header">Статус</p>
        {data.map((item, index) => (
            <>
           
            <p className="monitoring-col">
              {item.name}
            </p>
            <p className="monitoring-col phone-col">
              {item.phone}
            </p>
            <p className="monitoring-col">
              {item.status}
            </p>
            </>
        ))}
      </div>
    </div>
        
    </>)
}

export default Monitoring;