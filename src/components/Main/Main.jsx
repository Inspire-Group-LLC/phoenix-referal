import React, { useEffect, useState } from "react";
import { APP_ROUTES } from "../../router/Route";
import axios from "axios";
import Statistics from "../Statistics/Statistics";
import Slider from "../Slider/Slider";
import "./Main.scss";
import logo from "../../images/logo.svg";
import userIcon from "../../images/user.svg";
import settings from "../../images/settings.svg";
import logout from "../../images/logout.svg";
import download from "../../images/downloadIcon.svg";
import plusIcon from "../../images/plusIcon.svg";
import eyeIcon from "../../images/eyeIcon.svg";
import copy from "../../images/copy.svg";
import wasteIcon from "../../images/wasteIcon.svg";
import LineChart from "../Monitoring/LineChart";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options = [
  { value: "formale", label: "Для Мужчин", id: 1 },
  { value: "forfemale", label: "Для Женщин", id: 2 },
  { value: "weightloss", label: "Для Похудения", id: 3 },
];

const options2 = [
  { value: "uropro", label: "Uro Pro", id: 1 },
  { value: "slimfit", label: "Slimfit", id: 2 },
  { value: "doactive", label: "Do Active", id: 3 },
];

function Main() {
  const [isOpenReferrals, setIsOpenReferrals] = useState(false);
  const [isOpenCreateRef, setIsOpenCreateRef] = useState(false);
  const [isOpenMonitoring, setIsOpenMonitoring] = useState(false);
  const [isOpenMonitoringChart, setIsOpenMonitoringChart] = useState(false);
  const [monitoringStyles, setMonitoringStyles] = useState({ height: "50%" });
  const [monitoringChartStyles, setMonitoringChartStyles] = useState({
    height: "48%",
    padding: "20px",
  });
  const [monitoringButton, setMonitoringButton] = useState(false);
  const [monitoringCloseButton, setMonitoringCloseButton] = useState({
    transform: "rotate(0deg)",
  });
  const [balance, setBalance] = useState(0);
  const [referrals, setReferrals] = useState([]);
  const [referralModal, setReferralModal] = useState({});
  const [isOpenReferralModal, setIsOpenReferralModal] = useState(false);
  const [referralsLength, setReferralsLength] = useState(0);

  const user_id = +localStorage.getItem("user_id");
  const token = localStorage.getItem("@token");
  const balanceInfo = localStorage.getItem("balance");

  const [newRef, setNewRef] = useState({
    user_id,
    title: "",
    category_id: 0,
    product_id: 0,
  });

  const navigation = useNavigate();

  const getRef = () => {
    axios
      .get(`${APP_ROUTES.URL}/referral/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setReferrals(res.data);
        setReferralsLength(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setBalance(balanceInfo);

    if (token) {
      getRef();
    }
  }, []);

  const openMainPage = () => {
    navigation(APP_ROUTES.MAIN);
    setIsOpenMonitoring(false);
    setIsOpenCreateRef(false);
    setIsOpenReferrals(false);
  };

  const createRefWithData = () => {
    if (token) {
      axios
        .post(`${APP_ROUTES.URL}/referral`, newRef, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          getRef();
          setIsOpenCreateRef(false);
          setNewRef({ user_id, title: "", category_id: 0, product_id: 0 });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteRef = (id) => {
    if (token) {
      axios
        .delete(`${APP_ROUTES.URL}/referral/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          getRef();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const copyRefferralLink = async (link) => {
    try{
      await navigator.clipboard.writeText(link);
    } catch (error) {
      toast.error("Ошибка системы!");
    }
    
    toast.success("Ссылка скопирована!");
  };

  function parseCustomDateFormat(dateString) {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const openRefferralModal = (id) => {
    referrals.map((item) => {
      if (item.id === id) {
        setReferralModal({
          title: item.title,
          url_link: item.url_link,
          created_at: parseCustomDateFormat(item.created_at),
        });
        setIsOpenReferralModal(true);
        window.scrollTo(0, 600);
      }
    });
  };

  const openMonitoring = (boolState) => {
    boolState
      ? setMonitoringStyles({ height: "50%" })
      : setMonitoringStyles({ height: "100%" });
    boolState
      ? setMonitoringChartStyles({ height: "48%", padding: "20px" })
      : setMonitoringChartStyles({ height: "0%", marginBottom: "0" });
    boolState
      ? setMonitoringCloseButton({ transform: "rotate(0deg)" })
      : setMonitoringCloseButton({ transform: "rotate(180deg)" });

    setMonitoringButton(!boolState);
  };

  const logoutSystem = () => {
    localStorage.removeItem("@token");
    localStorage.removeItem("userId");
    localStorage.removeItem("balance");
    window.location.reload();
  };

  return (
    <>
      <ToastContainer />
      <div className="MainPage">
        <div className="menuWrapper">
          {/* <div className="logoWrapper">
          <img src={logo} className="logo" alt="logo" />
        </div> */}
          <div className="menu">
            <div className="menuHeader">
              <div className="menuItem">
                <img src={userIcon} alt="userIcon" onClick={openMainPage} />
              </div>
              <div className="menuItem">
                <img src={settings} alt="settings" />
              </div>
              <div className="menuItem">
                <img src={settings} alt="settings" />
              </div>
            </div>
            <div className="logoutWrapper">
              <div className="menuItem">
                <img src={logout} alt="logout" onClick={logoutSystem} />
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <div
            className={
              isOpenReferrals
                ? "referencesContainer"
                : "referencesContainer hidden"
            }
          >
            <div
              className="closeIcon"
              onClick={() => setIsOpenReferrals(false)}
            ></div>

            <div className="allReferencesWrapper">
              <div className="referencesHeading">
                <h2>Ссылки</h2>
              </div>
              <div className="references">
                <div className="referenceHeadingRow">
                  <div className="refName">Название</div>
                  <div className="refUrl">Ссылка</div>
                  <div className="refCategory">Категории</div>
                  <div className="refDate">Дата</div>
                  <div></div>
                </div>

                {referrals.map((item) => (
                  <div className="referenceItem" key={item.id}>
                    <div className="refName">{item.title}</div>
                    <div className="refUrl">{item.url_link}</div>
                    <div className="refCategory">
                      category {item.category_id}
                    </div>
                    <div className="refDate">
                      {parseCustomDateFormat(item.created_at)}
                    </div>
                    <div className="refFunctions">
                      <img
                        src={wasteIcon}
                        alt="wasteIcon"
                        onClick={() => deleteRef(item.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={
              isOpenCreateRef
                ? "refferenceCreateContainer"
                : "refferenceCreateContainer hidden"
            }
            onClick={() => setIsOpenCreateRef(false)}
          >
            <div className="createReferenceWrapper" onClick={(e) => e.stopPropagation()}>
              <div
                className="closeIcon"
                onClick={() => setIsOpenCreateRef(false)}
              ></div>
              <div className="createReferenceHeading">
                <h2>Создание новой реферальной ссылки</h2>
              </div>
              <div className="createReferenceForm">
                <div className="formItem">
                  <label htmlFor="refName">Выбор категории</label>
                  <select
                    name="category"
                    id="categorySelect"
                    onChange={(e) =>
                      setNewRef({ ...newRef, category_id: +e.target.value })
                    }
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="formItem">
                  <label htmlFor="refUrl">Выбор товара</label>
                  <select
                    name="refProduct"
                    id="refProductSelect"
                    onChange={(e) =>
                      setNewRef({ ...newRef, product_id: +e.target.value })
                    }
                  >
                    {options2.map((option) => (
                      <option key={option.value} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="formItem">
                  <label htmlFor="refCategory">Название ссылки</label>
                  <input
                    type="text"
                    id="refCategory"
                    placeholder="Название"
                    value={newRef.title}
                    onChange={(e) =>
                      setNewRef({ ...newRef, title: e.target.value })
                    }
                  />
                </div>
                <div className="newRefButtonWrapper">
                  <button onClick={createRefWithData}>Создать</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              isOpenMonitoring
                ? "monitoringContainer"
                : "monitoringContainer hidden"
            }
          >
            <div className="monitoringWrapper">
              <div
                className="closeIcon"
                onClick={() => setIsOpenMonitoring(false)}
              ></div>
              <div
                className="monitoringChartWrapper"
                style={monitoringChartStyles}
              >
                <LineChart />
              </div>
              <div className="monitoringTableWrapper" style={monitoringStyles}>
                <div className="monitoringTableHeading">
                  <h3>Монитроинг</h3>
                  <div className="hideMonitoring">
                    <p>Открыть статистику</p>
                    <div
                      className="upIcon"
                      style={monitoringCloseButton}
                      onClick={() => openMonitoring(monitoringButton)}
                    ></div>
                  </div>
                </div>
                <div className="monitoring">
                  <div className="monitoringHeadings">
                    <div>Имя</div>
                    <div>Ссылка</div>
                    <div>Категория</div>
                    <div>Статус</div>
                    <div>Номер телефона</div>
                  </div>
                  <div className="monitoringDividerLine"></div>
                  <div className="monitoringItemsWrapper">
                    <div className="monitoringItems">
                      <div className="monitoringItem">Амиров Амир Амирович</div>
                      <div className="monitoringItem">https://сайт.уз</div>
                      <div className="monitoringItem">БАД V67</div>
                      <div className="monitoringItem">Успешно</div>
                      <div className="monitoringItem">+998930174327</div>
                    </div>
                    <div className="monitoringItems">
                      <div className="monitoringItem">Амиров Амир Амирович</div>
                      <div className="monitoringItem">https://сайт.уз</div>
                      <div className="monitoringItem">БАД V67</div>
                      <div className="monitoringItem">Успешно</div>
                      <div className="monitoringItem">+998930174327</div>
                    </div>
                    <div className="monitoringItems">
                      <div className="monitoringItem">Амиров Амир Амирович</div>
                      <div className="monitoringItem">https://сайт.уз</div>
                      <div className="monitoringItem">БАД V67</div>
                      <div className="monitoringItem">Успешно</div>
                      <div className="monitoringItem">+998930174327</div>
                    </div>
                    <div className="monitoringItems">
                      <div className="monitoringItem">Амиров Амир Амирович</div>
                      <div className="monitoringItem">https://сайт.уз</div>
                      <div className="monitoringItem">БАД V67</div>
                      <div className="monitoringItem">Успешно</div>
                      <div className="monitoringItem">+998930174327</div>
                    </div>
                    <div className="monitoringItems">
                      <div className="monitoringItem">Амиров Амир Амирович</div>
                      <div className="monitoringItem">https://сайт.уз</div>
                      <div className="monitoringItem">БАД V67</div>
                      <div className="monitoringItem">Успешно</div>
                      <div className="monitoringItem">+998930174327</div>
                    </div>
                    <div className="monitoringItems">
                      <div className="monitoringItem">Амиров Амир Амирович</div>
                      <div className="monitoringItem">https://сайт.уз</div>
                      <div className="monitoringItem">БАД V67</div>
                      <div className="monitoringItem">Успешно</div>
                      <div className="monitoringItem">+998930174327</div>
                    </div>
                    <div className="monitoringItems">
                      <div className="monitoringItem">Амиров Амир Амирович</div>
                      <div className="monitoringItem">https://сайт.уз</div>
                      <div className="monitoringItem">БАД V67</div>
                      <div className="monitoringItem">Успешно</div>
                      <div className="monitoringItem">+998930174327</div>
                    </div>
                    <div className="monitoringItems">
                      <div className="monitoringItem">Амиров Амир Амирович</div>
                      <div className="monitoringItem">https://сайт.уз</div>
                      <div className="monitoringItem">БАД V67</div>
                      <div className="monitoringItem">Успешно</div>
                      <div className="monitoringItem">+998930174327</div>
                    </div>
                    <div className="monitoringItems">
                      <div className="monitoringItem">Амиров Амир Амирович</div>
                      <div className="monitoringItem">https://сайт.уз</div>
                      <div className="monitoringItem">БАД V67</div>
                      <div className="monitoringItem">Успешно</div>
                      <div className="monitoringItem">+998930174327</div>
                    </div>
                    <div className="monitoringItems">
                      <div className="monitoringItem">Амиров Амир Амирович</div>
                      <div className="monitoringItem">https://сайт.уз</div>
                      <div className="monitoringItem">БАД V67</div>
                      <div className="monitoringItem">Успешно</div>
                      <div className="monitoringItem">+998930174327</div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="informationBtns">
            <div className="balanceWrapper">
              <div className="balanceWrapperInfo">
                <div className="balanceHeader">
                  <h2>
                    Ваш баланс - {balance === undefined ? balance : 0} сум
                  </h2>
                  <h2>
                    Ecoin - {balance === undefined ? balance / 150 : 0}
                    <span className="ecoin">E</span>
                  </h2>
                </div>
                <p>Курс ( 1 ecoin = 150 сум )</p>
              </div>
            </div>
            <div className="reference">
              <div className="guides refItem">
                <div className="refItemWrapper">
                  <h3>Гайды 5</h3>
                  <img src={download} alt="download" />
                </div>
              </div>
              <div
                className="refs refItem"
                onClick={() => setIsOpenReferrals(true)}
              >
                <div className="refItemWrapper">
                  <h3>Ссылки</h3>
                  <h3>{referralsLength}</h3>
                  {/* <img src={plusIcon} alt="plusIcon" /> */}
                </div>
              </div>
            </div>
            <div
              className="monitoring bigRefItem"
              onClick={() => setIsOpenMonitoring(true)}
            >
              <div className="bigRefItemWrapper">
                <img src={eyeIcon} alt="eyeIcon" />
                <h3>Мониторинг 16</h3>
              </div>
            </div>
            <div
              className="createRef bigRefItem"
              onClick={() => setIsOpenCreateRef(true)}
            >
              <div className="bigRefItemWrapper">
                <img src={plusIcon} alt="plusIcon" />
                <h3>Создать ссылку</h3>
              </div>
            </div>
          </div>
          <div className="statisticsWrapper">
            {isOpenReferralModal ? (
              <div className="openRefferralModal">
                <h3>{referralModal.title}</h3>
                <div className="openRefferralModalInfo">
                  <p>Создано: {referralModal.created_at}</p>
                  <p>
                    Ссылка:{" "}
                    <a href={referralModal.url_link}>
                      {referralModal.url_link}
                    </a>
                  </p>
                  <p>Оставленно заявок: 0</p>
                  <p>Куплено: 0</p>
                </div>
                <div className="closeIcon" onClick={() => setIsOpenReferralModal(false)}></div>
              </div>
            ) : (
              <Statistics />
            )}

            <Slider />
          </div>
          <div className="referencesWrapper">
            <div className="referencesDiv">
              <div className="referencesHeading">
                <h2>Ссылки</h2>
              </div>
              <div className="references">
                {referrals.map((item) => (
                  <div className="referenceItem" key={item.id}>
                    <div className="refName">{item.title}</div>
                    <div className="refUrl">{item.url_link}</div>
                    <div className="refFunctions">
                      <img
                        src={eyeIcon}
                        alt="eyeIcon"
                        onClick={() => openRefferralModal(item.id)}
                      />
                      <img
                        src={copy}
                        alt="copy"
                        onClick={() => copyRefferralLink(item.url_link)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="monitoringDiv">
              <div className="monitoringHeading">
                <h2>Мониторинг</h2>
              </div>
              <div className="tableMonitoring">
                <table>
                  <tbody>
                    <tr>
                      <td>Имя</td>
                      <td>Номер</td>
                      <td>Статус</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                    <tr>
                      <td>Амиров Амир Амирович</td>
                      <td>+998907775566</td>
                      <td>Успешно</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
