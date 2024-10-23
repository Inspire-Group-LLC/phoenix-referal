import React, { useEffect, useState } from "react";
import { APP_ROUTES } from "../../router/Route";
import axios from "axios";
import Statistics from "../Statistics/Statistics";
import Slider from "../Slider/Slider";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../../images/logo.svg";
import userIcon from "../../images/user.svg";
import settings from "../../images/settings.svg";
import logout from "../../images/logout.svg";
import profileIcon from "../../images/profile.svg";
import download from "../../images/downloadIcon.svg";
import plusIcon from "../../images/plusIcon.svg";
import eyeIcon from "../../images/eyeIcon.svg";
import copy from "../../images/copy.svg";
import wasteIcon from "../../images/wasteIcon.svg";

import { Monitoring } from "../Monitoring/Monitoring";
import { CreateReferral } from "../CreateReferral/CreateReferral";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { ReferralContainer } from "../ReferralContainer/ReferralContainer";
const maskPhoneNumber = (phoneNumber) => {
  const startFour = phoneNumber.slice(0, 4);
  const endFour = phoneNumber.slice(-5);
  // Mask the rest of the number
  const masked = startFour + "*".repeat(phoneNumber.length - 13) + endFour;
  // Combine masked part and the last 4 digits
  return `${masked}`;
}
const statusTranslate = (status) => {
  switch (status) {
    case "NEW":
      return "Новый";
    case "PAID":
      return "Оплачен";
    case "IN_PROGRESS":
      return "В процессе";
    case "DONE":
      return "Выполнен";
    case "REJECTED":
      return "Отклонен";
    case "TRASH":
      return "Удален";
    default:
      return status;
  }
};

function Main() {
  const [isOpenStatusBar, setIsOpenStatusBar] = useState(true);
  const [isOpenReferrals, setIsOpenReferrals] = useState(false);
  const [isOpenCreateRef, setIsOpenCreateRef] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenMonitoring, setIsOpenMonitoring] = useState(false);
  const [monitoringStyles, setMonitoringStyles] = useState({ height: "50%" });
  const [monitoringButton, setMonitoringButton] = useState(false);
  const [profile, setProfile] = useState({});
  const [referrals, setReferrals] = useState([]);
  const [referralModal, setReferralModal] = useState({});
  const [isOpenReferralModal, setIsOpenReferralModal] = useState(false);
  const [referralsLength, setReferralsLength] = useState(0);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [rate, setRate] = useState(1);
  const [isOpenVerificationAccordion, setIsOpenVerificationAccordion] =
    useState(false);
  const [token, setToken] = useState("");
  const [monitoringChartStyles, setMonitoringChartStyles] = useState({
    height: "48%",
    padding: "20px",
  });
  const [monitoringCloseButton, setMonitoringCloseButton] = useState({
    transform: "rotate(0deg)",
  });

  useState(() => {
    setToken(localStorage.getItem("@token"));
  }, []);

  const [newRef, setNewRef] = useState({
    title: "",
    product_id: 0,
  });

  const navigation = useNavigate();

  const getRef = () => {
    axios
      .get(`${APP_ROUTES.URL}/referral`, {
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

  const getRate = () => {
    axios
      .get(`${APP_ROUTES.URL}/admin/rate`)  
      .then((res) => {
        setRate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProfile = () => {
    axios
      .get(`${APP_ROUTES.URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
        getRate();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (token) {
      getRef();
      getProfile();
    }
  }, []);

  const openMainPage = () => {
    navigation(APP_ROUTES.MAIN);
    setIsOpenMonitoring(false);
    setIsOpenCreateRef(false);
    setIsOpenReferrals(false);
    setIsOpenProfile(false);
  };

  const createRefWithData = () => {
    if (newRef.title === "" || newRef.product_id === 0) {
      toast.error("Заполните все поля!");
      return;
    }

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
          setNewRef({ title: "", product_id: 0 });
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
    try {
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
          count: item._count.Orders,
          new: item.Orders.filter((item) => item.status === "NEW" || item.status === "IN_PROGRESS").length,
          done: item.Orders.filter((item) => item.status === "DONE").length,
          rejected: item.Orders.filter((item) => item.status === "REJECTED" || item.status === "TRASH").length,
          created_at: parseCustomDateFormat(item.created_at),
        });
        setIsOpenReferralModal(true);
        window.scrollTo(0, 600);
      }
    });
  };

  const openMonitoring = (boolState) => {
    const monitoringHeight = boolState ? "50%" : "100%";
    const chartHeight = boolState ? "48%" : "0%";
    const chartPadding = boolState ? "20px" : "0";
    const closeButtonRotation = boolState ? "0deg" : "180deg";

    setMonitoringStyles({ height: monitoringHeight });
    setMonitoringChartStyles({ height: chartHeight, padding: chartPadding });
    setMonitoringCloseButton({ transform: `rotate(${closeButtonRotation})` });
    setMonitoringButton(!boolState);
  };

  const logoutSystem = () => {
    localStorage.removeItem("@token");
    window.location.reload();
  };

  const uploadPhoto = async (photo) => {
    const formData = new FormData();
    formData.append("file", photo);

    try {
      const response = await axios.post(
        `${APP_ROUTES.URL}/products/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // setProductObject((prev) => ({
      //   ...prev,
      //   image: {
      //     images: [...prev.image.images, response.data],
      //   },
      // }));
    } catch (error) {
      throw error;
    }
  };

  const handleFileInputChange = async (event) => {
    if (event.target.files.length > 2) {
      toast.error("Максимальное количество фото 2");
      return;
    } else if(event.target.files.length === 1) {
      toast.error("Минимальное количество фото 2");
      return;
    }

    const files = event.target.files;
    setSelectedPhotos(files);

    try {
      const uploadPromises = Array.from(files).map(uploadPhoto);
      await Promise.all(uploadPromises);
    } catch (error) {
      toast.error("Произошла ошибка при загрузке фото");
    }
  };

  return (
    <>
      <ToastContainer />

{!profile.isVerified && (!isOpenProfile && isOpenStatusBar && (
        <div
          className="statusBar"
          style={{ backgroundColor: "#f1c40f", color: "black" }}
        >
          <div className="statusInfo">Номер Договора: {profile.id}</div>
          <button className="updateStatusBtn" 
            onClick={() => setIsOpenProfile(true)}
          >Верефицировать</button>
          <div
            className="closeStatusBar"
            onClick={() => setIsOpenStatusBar(false)}
          ></div>
        </div>
      ))}
      
      <div className="MainPage" style={{ height: (profile.isVerified || (isOpenProfile && !isOpenStatusBar)) && "100%" }}>
        <div className="menuWrapper">
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
              {
                profile.isVerified ?      
                <div className="menuItem profileIconVerified">
                <img
                  src={profileIcon}
                  alt="profileIcon"
                  onClick={() => setIsOpenProfile(!isOpenProfile)}
                  // style={{ borderColor: "#FFD700", animation: "none" }}
                />
              </div> :               
                <div className="menuItem profileIcon">
                  <img
                    src={profileIcon}
                    alt="profileIcon"
                    onClick={() => setIsOpenProfile(!isOpenProfile)}
                    // style={{ borderColor: "#FFD700", animation: "none" }}
                  />
              </div>
              }
             
              <div className="menuItem">
                <img src={logout} alt="logout" onClick={logoutSystem} />
              </div>
            </div>
          </div>
        </div>

        <div className="body">
          <ReferralContainer
            isOpenReferrals={isOpenReferrals}
            setIsOpenReferrals={setIsOpenReferrals}
            referrals={referrals}
            parseCustomDateFormat={parseCustomDateFormat}
            wasteIcon={wasteIcon}
            deleteRef={deleteRef}
          />

          {/* ============================== profile page ================================= */}

          <ProfilePage
            isOpenProfile={isOpenProfile}
            setIsOpenProfile={setIsOpenProfile}
            profile={profile}
            rate={rate}
            isOpenVerificationAccordion={isOpenVerificationAccordion}
            setIsOpenVerificationAccordion={setIsOpenVerificationAccordion}
            handleFileInputChange={handleFileInputChange}
          />

          {/* ============================= create Refference page =================== */}

          <CreateReferral
            isOpenCreateRef={isOpenCreateRef}
            setIsOpenCreateRef={setIsOpenCreateRef}
            setNewRef={setNewRef}
            newRef={newRef}
            createRefWithData={createRefWithData}
          />

          {/* ============================= Monitoring page =================== */}

          <Monitoring
            isOpenMonitoring={isOpenMonitoring}
            setIsOpenMonitoring={setIsOpenMonitoring}
            monitoringChartStyles={monitoringChartStyles}
            monitoringStyles={monitoringStyles}
            monitoringCloseButton={monitoringCloseButton}
            openMonitoring={openMonitoring}
            monitoringButton={monitoringButton}
          />

          <div className="informationBtns">
            <div className="balanceWrapper">
              <div className="balanceWrapperInfo">
                <div className="balanceHeader">
                  <h2>
                    Ваш баланс -{" "}
                    {(profile.balance * rate).toFixed(2)} сум
                  </h2>
                  <h2>
                    Ecoin -{" "}
                    {profile.balance === undefined
                      ? 0
                      : profile.balance === undefined ? 0 : profile.balance
                    }
                    <span className="ecoin">E</span>
                  </h2>
                </div>
                <p>Курс ( 1 ecoin = {rate} сум )</p>
              </div>
            </div>
            <div className="reference">
              <div className="guides refItem" >
                <div className="refItemWrapper">
                  <h3>Гайды 5</h3>
                  <a href="https://telegra.ph/Nastrojka-targeta-03-29"><img src={download} alt="download" />
                  </a>
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
                <h3>Мониторинг  {profile.total_orders}</h3>
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
              <div className="openRefferralModal stats">
                <h3>{referralModal.title}</h3>
                <div className="openRefferralModalInfo">
                  <p>Создано: {referralModal.created_at}</p>
                  <p>
                    Ссылка:{" "}
                    <a href={referralModal.url_link}>
                      {referralModal.url_link}
                    </a>
                  </p>
                  <p>Оставленно заявок: {referralModal.count}</p>
                  <p>Новых: {referralModal.new}</p>
                  <p>Куплено: {referralModal.done}</p>
                  <p>Отказано: {referralModal.rejected}</p>
                </div>
                <div
                  className="closeIcon"
                  onClick={() => setIsOpenReferralModal(false)}
                ></div>
              </div>
            ) : (
              <Statistics rejected = {profile.REJECTED} done={profile.DONE} in_progress={profile.IN_PROGRESS} trash={profile.TRASH} paid={profile.PAID}/>
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
                    {
                  profile.Orders && profile.Orders.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}  {item.surname}</td>
                      <td>{maskPhoneNumber(item.phone)}</td>
                      <td>{statusTranslate(item.status)}</td>
                    </tr>
                    
                    
                  ))
                }
                    
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
