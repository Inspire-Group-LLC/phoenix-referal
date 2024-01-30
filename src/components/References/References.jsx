import React from "react";
import NavBar from "../Main/NavBar/NavBar";
import CopyBtn from "../Main/CopyBtn/CopyBtn";
import DeleteBtn from "./DeleteBtn/DeleteBtn";
import './References.scss';
const References = () => {
    const data = [
        {
            id: 1, name: 'Hamid', link: 'https://dsdkhds.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
        },
        {
            id: 2, name: 'Ivan', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
        },
        {
            id: 3, name: 'Arslan', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327'
        }
    ];
    return (
        <div className="references">
            <div className="container">
                <NavBar></NavBar>

                <div className="content">
                    <h2>Ссылки</h2>
                    <div className="links-table">
                        <div className="link-row">
                            <div className="link-col ref-header">
                                Название
                            </div>
                            <div className="link-col ref-header">
                                Ссылка
                            </div>
                            <div className="link-col ref-header">
                                Категории
                            </div>
                        </div>
                        {data.map((item) => (
                            <div className="link-row" key={item.id}>
                                <div className="link-col">{item.category}</div>
                                <div className="link-col">{item.link}</div>
                                <div className="link-col">{item.category}</div>
                                <div className="link-col">
                                    <DeleteBtn />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default References;