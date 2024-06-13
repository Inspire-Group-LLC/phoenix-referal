import React from "react";

export const ReferralContainer = (props) => {
  return (
    <div
      className={
        props.isOpenReferrals ? "referencesContainer" : "referencesContainer hidden"
      }
    >
      <div
        className="closeIcon"
        onClick={() => props.setIsOpenReferrals(false)}
      ></div>

      <div className="allReferencesWrapper">
        <div className="referencesHeading">
          <h2>Ссылки</h2>
        </div>
        <div className="references">
          <div className="referenceHeadingRow">
            <div className="refName">Название</div>
            <div className="refUrl">Ссылка</div>
            <div className="refDate">Дата</div>
            <div></div>
          </div>

          {props.referrals.map((item) => (
            <div className="referenceItem" key={item.id}>
              <div className="refName">{item.title}</div>
              <div className="refUrl">{item.url_link}</div>

              <div className="refDate">
                {props.parseCustomDateFormat(item.created_at)}
              </div>
              <div className="refFunctions">
                <img
                  src={props.wasteIcon}
                  alt="wasteIcon"
                  onClick={() => props.deleteRef(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
