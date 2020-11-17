import React from "react";
import "./Profile.scss";

import {observer} from "mobx-react-lite";

import { channelSectionHandler } from "../../App";

const Profile: React.FC = () => {
  return (
    <div className="profile-section">
      <div className="top-bar">
        <div role="button" className="icon" onClick={()=>{channelSectionHandler.set('Settings')}}>
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
        <h2 className="channel-title"
          style={{marginBottom:'0px', paddingLeft:'0px'}}
        >Contact Info</h2>
      </div>
        <div>
          <div className="main-image">
            <img
              src="https://www.aayushagarwal.me/assets/img/profilepic.jpg"
              alt=""
            />
          </div>
        <div className="temp">
          <div className="card">
            <small className="card-title">Name</small>
            <p>Aayush Agarwal</p>
          </div>
          <div className="card">
            <small className="card-title">Status</small>
            <p>Can't talk chat only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
