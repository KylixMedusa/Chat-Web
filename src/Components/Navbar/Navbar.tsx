import React from "react";
import "./Navbar.scss";
import {observer} from "mobx-react-lite";

import { channelSectionHandler } from "../../App";



const Navbar: React.FC = () => {

  return (
    <div className="navbar-container">
      <div className="logo">
        <li>
          <img
            src="https://www.aayushagarwal.me/assets/img/favicon.svg"
            alt=""
          />
        </li>
      </div>
      <nav>
        <li className={channelSectionHandler.get() === 'Chats'?"active":''} onClick={()=>{channelSectionHandler.set('Chats')}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#878a92"
            stroke="none"
          >
            <g>
              <path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"></path>
            </g>
          </svg>
          <span className="tooltip">Chats</span>
        </li>
        <li className={channelSectionHandler.get() === 'Groups'?"active":''} onClick={()=>{channelSectionHandler.set('Groups')}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#878a92"
            stroke="none"
          >
            <g>
              <path d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943z"></path>
            </g>
          </svg>
          <span className="tooltip">Groups</span>
        </li>
        <li  className={channelSectionHandler.get() === 'Contacts'?"active":''} onClick={()=>{channelSectionHandler.set('Contacts')}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#878a92"
            stroke="none"
          >
            <g>
              <path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
            </g>
          </svg>
          <span className="tooltip">Contacts</span>
        </li>
        <li className={channelSectionHandler.get() === 'Settings'?"active":''} onClick={()=>{channelSectionHandler.set('Settings')}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#878a92"
            stroke="none"
          >
            <g>
              <path d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            </g>
          </svg>
          <span className="tooltip">Settings</span>
        </li>
      </nav>
      <div className={`avatar ${channelSectionHandler.get() === 'Profile'?"active":''}`} onClick={()=>{channelSectionHandler.set('Profile')}}>
        <li>
          <div>
            <img
              className="avatar-image"
              src="https://cliko.in/assets/team/aayush.jpg"
              alt=""
            />
          </div>
        </li>
      </div>
    </div>
  );
};

export default observer(Navbar);
