// Links.jsx

import React from "react";
import './Links.scss';
import CopyBtn from "../CopyBtn/CopyBtn";

const Links = () => {
    const data = [
        {
            id: 1, name: 'Hamid', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
        },
        {
            id: 2, name: 'Ivan', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
        },
        {
            id: 3, name: 'Arslan', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
        }
    ];

    return (
        <div className="links">
            <h2>Ссылки</h2>
            <div className="links-table">
                {data.map((item) => (
                    <div className="link-row" key={item.id}>
                        <div className="link-col">{item.category}</div>
                        <div className="link-col">{item.link}</div>
                        <div className="link-col">
                            <CopyBtn link={item.link} onClick={() => console.log("Button clicked")} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Links;
