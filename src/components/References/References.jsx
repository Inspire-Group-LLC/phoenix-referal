import React from "react";
import NavBar from "../Main/NavBar/NavBar";
import CopyBtn from "../Main/CopyBtn/CopyBtn";
import DeleteBtn from "./DeleteBtn/DeleteBtn";
import './References.scss';
const References = () => {
    const data = [
        {
            id: 1, name: 'Hamid', link: 'https://dsdkhds.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327', product: 'mens power'
        },
        {
            id: 2, name: 'Ivan', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327',product: 'mens power'
        },
        {
            id: 3, name: 'Arslan', link: 'https://сайт.уз', category: 'БАД V67', status: 'Успешно', phone: '+998930174327',product: 'mens power'
        }
    ];
    return (
        <div className="references">
            <div className="container">
                <NavBar></NavBar>
                <div className="content">
                    <h2>Ссылки</h2>
                    <div className="ref-table">
                        <div className="ref-col ref-header">
                            Название
                        </div>
                        <div className="ref-col ref-header">
                            Ссылка
                        </div>
                        <div className="ref-col ref-header">
                            Категории
                        </div>

                        <div className="ref-col ref-header">
                            
                        </div>
                        {data.map((item) => (<>
                            <div className="ref-col">{item.product}</div>
                            <div className="ref-col">{item.link}</div>
                            <div className="ref-col">{item.category}</div>
                            <div className="ref-col del-btn">
                                <DeleteBtn />
                            </div>
                        </>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default References;