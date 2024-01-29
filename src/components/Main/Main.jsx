import React, { useState } from "react";
import './Main.scss';
import BalanceBlock from "./BalanceBlock/BalanceBlock";
import NavBar from "./NavBar/NavBar";
import Button from "./Button/Button";
import Statistics from "./Statistics/Statistics";
import Slider from "./Slider/Slider";
import Monitoring from "./Monitoring/Monitoring";
import Links from "./Links/Links";
import SmallBtn from "./SmallBtn/SmallBtn";
import BigBtn from "./BigBtn/BigBtn";
import Modal from "./Modal/Modal";
import Input from "./Input/Input";
import Select from "./Select/Select";

const Main = () => {
    const [modal, setModal] = useState(false);
    return (
        <div className="main">
            <div className="container">
                <NavBar />
                <div className="content">
                    <div className="row">
                        <BalanceBlock />
                        <div className="lil-btns">
                            <SmallBtn>
                                <p>
                                    Гайды {5}
                                </p>
                                <svg width="23" height="23" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM9.875 15.9375C9.875 15.6614 9.65114 15.4375 9.375 15.4375C9.09886 15.4375 8.875 15.6614 8.875 15.9375V18.1875C8.875 18.6365 9.07365 19.055 9.40663 19.3546C9.73788 19.6528 10.1769 19.8125 10.625 19.8125H19.375C19.8231 19.8125 20.2621 19.6528 20.5934 19.3546C20.9264 19.055 21.125 18.6365 21.125 18.1875V15.9375C21.125 15.6614 20.9011 15.4375 20.625 15.4375C20.3489 15.4375 20.125 15.6614 20.125 15.9375V18.1875C20.125 18.3352 20.0603 18.4891 19.9244 18.6113C19.7868 18.7352 19.5899 18.8125 19.375 18.8125H10.625C10.4101 18.8125 10.2132 18.7352 10.0756 18.6113C9.93975 18.4891 9.875 18.3352 9.875 18.1875V15.9375ZM11.5034 12.7905C11.6881 12.5853 12.0042 12.5686 12.2095 12.7534L14.5 14.8148V15.9375C14.5 16.0843 14.5633 16.2164 14.6641 16.3078L11.5405 13.4966C11.3353 13.3119 11.3186 12.9958 11.5034 12.7905ZM15.5 14.8148L15 15.2648L14.5 14.8148V9.1875C14.5 8.91136 14.7239 8.6875 15 8.6875C15.2761 8.6875 15.5 8.91136 15.5 9.1875V14.8148ZM15.3359 16.3078C15.4367 16.2164 15.5 16.0843 15.5 15.9375V14.8148L17.7905 12.7534C17.9958 12.5686 18.3119 12.5853 18.4966 12.7905C18.6814 12.9958 18.6647 13.3119 18.4595 13.4966L15.3359 16.3078ZM15 16.4375C15.1197 16.4375 15.2394 16.3947 15.3345 16.3091L15.3359 16.3078C15.2472 16.3884 15.1293 16.4375 15 16.4375ZM14.6655 16.3091C14.665 16.3087 14.6646 16.3083 14.6641 16.3078L14.6655 16.3091Z" fill="white" />
                                </svg>
                            </SmallBtn>
                            <SmallBtn style={{ cursor: 'pointer' }} onClick={() => setModal(true)}>
                                <p>
                                    Создать ссылку
                                </p>
                                <svg width="23" height="23" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 6.25V23.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.25 15H23.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </SmallBtn>
                            <SmallBtn>
                                <p>
                                    Cсылки {16}
                                </p>
                            </SmallBtn>
                        </div>
                        <div className="big-btns">
                            <BigBtn>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM11.4703 25C11.6255 25.2745 11.8537 25.6614 12.1525 26.1241C12.775 27.088 13.6973 28.3706 14.8962 29.6494C17.3122 32.2264 20.7328 34.6667 25 34.6667C29.2672 34.6667 32.6878 32.2264 35.1038 29.6494C36.3027 28.3706 37.225 27.088 37.8475 26.1241C38.1463 25.6614 38.3745 25.2745 38.5297 25C38.3745 24.7255 38.1463 24.3386 37.8475 23.8759C37.225 22.912 36.3027 21.6294 35.1038 20.3506C32.6878 17.7736 29.2672 15.3333 25 15.3333C20.7328 15.3333 17.3122 17.7736 14.8962 20.3506C13.6973 21.6294 12.775 22.912 12.1525 23.8759C11.8537 24.3386 11.6255 24.7255 11.4703 25ZM39.6667 25C40.5611 24.5528 40.5609 24.5524 40.5607 24.5521L40.5602 24.5511L40.5589 24.5484L40.5547 24.5401L40.5404 24.5122L40.5219 24.4764L40.4884 24.4125C40.4432 24.3272 40.3773 24.2051 40.2908 24.0514C40.118 23.7441 39.8628 23.3099 39.5275 22.7908C38.8584 21.7546 37.864 20.3706 36.5629 18.9827C33.9789 16.2264 30.0662 13.3333 25 13.3333C19.9338 13.3333 16.0211 16.2264 13.4371 18.9827C12.136 20.3706 11.1416 21.7546 10.4725 22.7908C10.1372 23.3099 9.88199 23.7441 9.70915 24.0514C9.6227 24.2051 9.55675 24.3272 9.51163 24.4125C9.48907 24.4551 9.4717 24.4886 9.45957 24.5122L9.4453 24.5401L9.44112 24.5484L9.43976 24.5511L9.43927 24.5521C9.43908 24.5524 9.43891 24.5528 10.3333 25L9.43891 24.5528C9.29814 24.8343 9.29814 25.1657 9.43891 25.4472L10.3333 25C9.43891 25.4472 9.43908 25.4476 9.43927 25.4479L9.43976 25.4489L9.44112 25.4516L9.4453 25.4599L9.45957 25.4878C9.4717 25.5114 9.48907 25.5449 9.51163 25.5875C9.55675 25.6728 9.6227 25.7949 9.70915 25.9486C9.88199 26.2559 10.1372 26.6902 10.4725 27.2092C11.1416 28.2454 12.136 29.6294 13.4371 31.0173C16.0211 33.7736 19.9338 36.6667 25 36.6667C30.0662 36.6667 33.9789 33.7736 36.5629 31.0173C37.864 29.6294 38.8584 28.2454 39.5275 27.2092C39.8628 26.6902 40.118 26.2559 40.2908 25.9486C40.3773 25.7949 40.4432 25.6728 40.4884 25.5875C40.5109 25.5449 40.5283 25.5114 40.5404 25.4878L40.5547 25.4599L40.5589 25.4516L40.5602 25.4489L40.5607 25.4479C40.5609 25.4476 40.5611 25.4472 39.6667 25ZM39.6667 25L40.5611 25.4472C40.7019 25.1657 40.7019 24.8343 40.5611 24.5528L39.6667 25ZM25 22C23.3431 22 22 23.3431 22 25C22 26.6569 23.3431 28 25 28C26.6569 28 28 26.6569 28 25C28 23.3431 26.6569 22 25 22ZM20 25C20 22.2386 22.2386 20 25 20C27.7614 20 30 22.2386 30 25C30 27.7614 27.7614 30 25 30C22.2386 30 20 27.7614 20 25Z" fill="white" />
                                </svg>
                                <p>Мониторинг</p>
                                <p>{15}</p>
                            </BigBtn>
                            <BigBtn>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM32 17C32 16.4477 31.5523 16 31 16C30.4477 16 30 16.4477 30 17V33C30 33.5523 30.4477 34 31 34C31.5523 34 32 33.5523 32 33V17ZM26 23C26 22.4477 25.5523 22 25 22C24.4477 22 24 22.4477 24 23V33C24 33.5523 24.4477 34 25 34C25.5523 34 26 33.5523 26 33V23ZM19 28C19.5523 28 20 28.4477 20 29V33C20 33.5523 19.5523 34 19 34C18.4477 34 18 33.5523 18 33V29C18 28.4477 18.4477 28 19 28Z" fill="white" />
                                </svg>

                                <p>Статистика</p>
                                <p>{80}%</p>
                            </BigBtn>
                        </div>
                    </div>
                    <div className="row">
                        <Statistics></Statistics>
                        <div>
                            <Slider></Slider>
                        </div>
                    </div>
                    <div className="row">
                        <div className="links-comp">
                            <Links></Links>
                        </div>
                        <div className="monitor-comp">
                            <Monitoring></Monitoring>
                        </div>
                    </div>
                </div>
            </div>

            <Modal visible={modal} setVisible={setModal}>
                <h2>Создание новой реферальной ссылки</h2>

                <div className="modal-text-inputs">
                    <div className="modal-text-inputs-els">
                        <div className="modal-text-inputs-el">
                            <p>Выбор категории</p>
                            <Select
                                // value={}
                                // onChange={}
                                defaultValue="Категория"
                                options={[
                                    { value: "category1", name: "Category1" },
                                    { value: "category2", name: "Category2" },
                                ]}
                            ></Select>
                        </div>
                        <div className="modal-text-inputs-el">
                            <p>Выбор товара</p>
                            <Select
                                // value={}
                                // onChange={}
                                defaultValue="Товары"
                                options={[
                                    { value: "product1", name: "Product1" },
                                    { value: "product2", name: "Product2" },
                                ]}
                            ></Select>
                        </div>
                        <div className="modal-text-inputs-el">
                            <p>Название ссылки</p>

                            <Input type=""
                                // value={}
                                // onChange={(e) => setPost({ ...post, body: e.target.value })}
                                placeholder="Название" ></Input>
                        </div>
                        <div className="modal-text-inputs-el">
                            <button className="modal-createLink-btn">
                                Создать
                            </button>
                        </div>
                    </div>

                </div>


            </Modal>
        </div>
    )
}

export default Main;