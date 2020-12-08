import React, { useEffect, useRef, useState } from "react";
import "./Notifications.scss";

import { observer } from "mobx-react-lite";

import { channelSectionHandler } from "../../App";

const Notifications: React.FC = () => {
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
        <div className="ZQyg_">
          <div className="_3Kt9n">
            <input className="_12tnw" type="checkbox" id="msg-previews"/>
            <div className="_2K7JO">
              <div className="_2KoSK">
                <div className="_1hDF">
                </div>
              </div>
            </div>
          </div>
          <label className="_3jrgD" htmlFor="msg-previews">Show Previews
            <div className="_2Phw8">Display message text in desktop alerts</div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default observer(Notifications);
