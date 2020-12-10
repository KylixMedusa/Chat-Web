import React, { useEffect, useRef, useState } from "react";
import "./Blocked.scss";

import { observer } from "mobx-react-lite";

import { channelSectionHandler } from "../../App";
import Modal from "../../Sub-Components/Modal/Modal";

const Blocked: React.FC = () => {
  const [modalClass, setModalClass] = useState("");
  const modalToggleHandler = () => {
    if (modalClass === `open`) {
      setModalClass(`close`);
    } else {
      setModalClass(`open`);
    }
  };
  return (
    <div className="blocked-section">
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
          Blocked
        </h2>
      </div>
      <div style={{ overflowY: "auto", height: "100%" }}>
        <ul>
          <li>
            <div className="card">
              <div className="card-image">
                <img src="https://cliko.in/assets/team/aayush.jpg" alt="" />
              </div>
              <div className="card-contents">
                <h3>Aayush Agarwal</h3>
                <p>
                  Hello, Welcome to the first test. This is a first version of
                  Chat Application
                </p>
              </div>
              <div className="button">
                <i onClick={modalToggleHandler}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="var(--icon-color-3)"
                      d="M17.25 7.8L16.2 6.75l-4.2 4.2-4.2-4.2L6.75 7.8l4.2 4.2-4.2 4.2 1.05 1.05 4.2-4.2 4.2 4.2 1.05-1.05-4.2-4.2 4.2-4.2z"
                    ></path>
                  </svg>
                </i>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="card-image">
                <img src="https://cliko.in/assets/team/aayush.jpg" alt="" />
              </div>
              <div className="card-contents">
                <h3>Aayush Agarwal</h3>
                <p>
                  Hello, Welcome to the first test. This is a first version of
                  Chat Application
                </p>
              </div>
              <div className="button">
                <i onClick={modalToggleHandler}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="var(--icon-color-3)"
                      d="M17.25 7.8L16.2 6.75l-4.2 4.2-4.2-4.2L6.75 7.8l4.2 4.2-4.2 4.2 1.05 1.05 4.2-4.2 4.2 4.2 1.05-1.05-4.2-4.2 4.2-4.2z"
                    ></path>
                  </svg>
                </i>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Modal
        class={modalClass}
        toggle={modalToggleHandler}
        style={{ height: "150px" }}
      >
        <div>
          <div className="modal-title">
            <p>Unblock </p>
          </div>
        </div>
        <div className="modal-buttons">
          <button className="cancel" onClick={modalToggleHandler}>
            Cancel
          </button>
          <button
            className="submit"
            onClick={() => {
              modalToggleHandler();
            }}
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default observer(Blocked);
