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
        <label className="checkbox">
          <span className="checkbox__input">
            <input type="checkbox" name="checkbox"/>
            <span className="checkbox__control">
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
            </span>
          </span>
          <span className="radio__label">Checkbox</span>
        </label>
      </div>
    </div>
  );
};

export default observer(Notifications);
