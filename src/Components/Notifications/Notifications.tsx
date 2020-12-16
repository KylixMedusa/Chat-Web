import React, { useState } from "react";
import "./Notifications.scss";

import { observer } from "mobx-react-lite";

import { channelSectionHandler } from "../../App";

const Notifications: React.FC = () => {
  const [checkedState,setCheckedState] = useState([false,false,false,false]);

  function updateState(pos:number){
    let items = [...checkedState];
    items[pos] = !items[pos];
    setCheckedState([...items]);
  }

  return (
    <div className="notifications-section">
      <div className="top-bar">
        <div
          role="button"
          className="icon"
          onClick={() => {
            channelSectionHandler.set("Settings");
          }}
        >
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
              ></path>
            </svg>
          </i>
        </div>
        <h2
          className="channel-title"
          style={{ marginBottom: "0px", paddingLeft: "0px" }}
        >
          Notifications
        </h2>
      </div>
      <div style={{ overflowY: "auto", height: "100%" }}>
        <div className="notifications-wrapper">
          <div className="checkbox-card">
            <div className="checkbox-wrapper">
              <input
                className="input-checkbox"
                type="checkbox"
                id="sounds"
                onChange={()=>updateState(0)}
                checked={checkedState[0]}
              />
              <div className="custom-checkbox-wrapper" onClick={()=>updateState(0)}>
                <div className="custom-checkbox">
                  <div className="tick-mark"></div>
                </div>
              </div>
            </div>
            <label className="checkbox-label" htmlFor="sounds">
              Sounds
            </label>
          </div>
          <div className="checkbox-card">
            <div className="checkbox-wrapper">
              <input
                className="input-checkbox"
                type="checkbox"
                id="desktop-alerts"
                onChange={()=>updateState(1)}
                checked={checkedState[1]}
              />
              <div className="custom-checkbox-wrapper" onClick={()=>updateState(1)}>
                <div className="custom-checkbox">
                  <div className="tick-mark"></div>
                </div>
              </div>
            </div>
            <label className="checkbox-label" htmlFor="desktop-alerts">
              Desktop Alerts
            </label>
          </div>
          <div className="checkbox-card">
            <div className="checkbox-wrapper">
              <input
                className="input-checkbox"
                type="checkbox"
                id="msg-previews"
                onChange={()=>updateState(2)}
                checked={checkedState[2]}
              />
              <div className="custom-checkbox-wrapper" onClick={()=>updateState(2)}>
                <div className="custom-checkbox">
                  <div className="tick-mark"></div>
                </div>
              </div>
            </div>
            <label className="checkbox-label" htmlFor="msg-previews">
              Show Previews
              <div className="checkbox-label-secondary">
                Display message text in desktop alerts
              </div>
            </label>
          </div>
          <div className="checkbox-card">
            <div className="checkbox-wrapper">
              <input
                className="input-checkbox"
                type="checkbox"
                id="destop-notifications"
                onChange={()=>updateState(3)}
                checked={checkedState[3]}
              />
              <div className="custom-checkbox-wrapper" onClick={()=>updateState(3)}>
                <div className="custom-checkbox">
                  <div className="tick-mark"></div>
                </div>
              </div>
            </div>
            <label className="checkbox-label" htmlFor="destop-notifications">
              Turn off Destop Notifications
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Notifications);
