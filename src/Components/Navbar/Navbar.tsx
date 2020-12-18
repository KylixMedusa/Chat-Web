import React, { useState } from "react";
import "./Navbar.scss";
import { observer } from "mobx-react-lite";

import { channelSectionHandler } from "../../App";
import ListMenu from "../../Sub-Components/ListMenu/ListMenu";
import { ProfileContext } from "../../store";
import { useStore } from "../../store/hooks";

const Navbar: React.FC = () => {
  const profileStore = useStore(ProfileContext);
  const [menuClass, setMenuClass] = useState("");

  function checkSection(val: string) {
    switch (val) {
      case "Chats":
        return 0;
      case "Groups":
        return 1;
      case "Contacts":
        return 2;
      case "Settings":
        return 3;
    }
    return -1;
  }

  const menuToggleHandler = () => {
    if (menuClass === "open-bottom-left") {
      setMenuClass("close-bottom-left");
    } else {
      setMenuClass("open-bottom-left");
    }
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <nav>
          <li>
            <img
              src="https://www.aayushagarwal.me/assets/img/favicon.svg"
              alt=""
            />
          </li>
        </nav>
      </div>
      <nav>
        <li
          className={channelSectionHandler.get() === "Chats" ? "active" : ""}
          onClick={() => {
            channelSectionHandler.set("Chats");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--icon-color-1)"
            stroke="none"
          >
            <g>
              <path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"></path>
            </g>
          </svg>
          <span className="tooltip">Chats</span>
        </li>
        <li
          className={channelSectionHandler.get() === "Groups" ? "active" : ""}
          onClick={() => {
            channelSectionHandler.set("Groups");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--icon-color-1)"
            stroke="none"
          >
            <g>
              <path d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943z"></path>
            </g>
          </svg>
          <span className="tooltip">Groups</span>
        </li>
        <li
          className={channelSectionHandler.get() === "Contacts" ? "active" : ""}
          onClick={() => {
            channelSectionHandler.set("Contacts");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--icon-color-1)"
            stroke="none"
          >
            <g>
              <path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
            </g>
          </svg>
          <span className="tooltip">Contacts</span>
        </li>
        <li
          className={channelSectionHandler.get() === "Settings" ? "active" : ""}
          onClick={() => {
            channelSectionHandler.set("Settings");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--icon-color-1)"
            stroke="none"
          >
            <g>
              <path d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            </g>
          </svg>
          <span className="tooltip">Settings</span>
        </li>
        <li
          className="activeBackground"
          style={{
            top: `${checkSection(channelSectionHandler.get()) * 70}px`,
            visibility:
              checkSection(channelSectionHandler.get()) === -1
                ? "hidden"
                : "visible",
          }}
        ></li>
      </nav>
      <div className="icon-menu">
        <ListMenu
          class={menuClass}
          style={{ bottom: "100%", left: "50%" }}
          toggle={menuToggleHandler}
        >
          <li
            onClick={() => {
              channelSectionHandler.set("Profile");
              menuToggleHandler();
            }}
          >
            Profile
          </li>
          <li>Log Out</li>
        </ListMenu>
        <div
          className={`avatar ${
            channelSectionHandler.get() === "Profile" ? "active" : ""
          }`}
          onClick={() => {
            menuToggleHandler();
          }}
        >
          <nav>
            <li>
              <div>
                {profileStore.avatar && profileStore.avatar !== "" ? (
                  <img
                    src={profileStore.avatar}
                    className="avatar-image"
                    alt=""
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 212 212"
                    width="212"
                    height="212"
                    className="avatar-image-svg"
                  >
                    <path
                      fill="var(--svg-background-avatar)"
                      d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
                    ></path>
                    <path
                      fill="var(--svg-primary-avatar)"
                      d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
                    ></path>
                  </svg>
                )}
              </div>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default observer(Navbar);
