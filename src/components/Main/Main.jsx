import React, { useState } from "react";
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

function Main() {
  const [isOpenReferrals, setIsOpenReferrals] = useState(false);
  return (
    <div className="MainPage">
      <div className="menuWrapper">
        <div className="logoWrapper">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="menu">
          <div className="menuHeader">
            <div className="menuItem">
              <img src={userIcon} alt="userIcon" />
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
              <img src={logout} alt="logout" />
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
                <div></div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
              <div className="referenceItem">
                <div className="refName">Yfpdfyb</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refCategory">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={wasteIcon} alt="wasteIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="informationBtns">
          <div className="balanceWrapper">
            <div className="balanceHeader">
              <h2>Ваш баланс - 100.000</h2>
              <h2>
                Ecoin - 760 <span className="ecoin"></span>
              </h2>
            </div>
            <p>Курс (1.000 сум = 19 баллов)</p>
          </div>
          <div className="reference">
            <div className="guides refItem">
              <h3>Гайды 5</h3>
              <img src={download} alt="download" />
            </div>
            <div
              className="refs refItem"
              onClick={() => setIsOpenReferrals(true)}
            >
              <h3>Ссылки 16</h3>
              <img src={plusIcon} alt="plusIcon" />
            </div>
          </div>
          <div className="monitoring bigRefItem">
            <img src={eyeIcon} alt="eyeIcon" />
            <h3>Мониторинг 16</h3>
          </div>
          <div className="createRef bigRefItem">
            <img src={plusIcon} alt="plusIcon" />
            <h3>Создать ссылку</h3>
          </div>
        </div>
        <div className="statisticsWrapper">
          <Statistics />
          <Slider />
        </div>
        <div className="referencesWrapper">
          <div className="referencesDiv">
            <div className="referencesHeading">
              <h2>Ссылки</h2>
            </div>
            <div className="references">
              <div className="referenceItem">
                <div className="refName">БАД V67</div>
                <div className="refUrl">https://сайт.уз</div>
                <div className="refFunctions">
                  <img src={eyeIcon} alt="eyeIcon" />
                  <img src={copy} alt="copy" />
                </div>
              </div>
            </div>
          </div>
          <div className="monitoringDiv">
            <div className="monitoringHeading">
              <h2>Мониторинг</h2>
            </div>
            <div className="tableMonitoring">
              <tr>
                <td>Имя</td>
                <td>Номер</td>
                <td>Статус</td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
