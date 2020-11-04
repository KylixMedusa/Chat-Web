import React from "react";
import "./Settings.scss";

const Settings: React.FC = () => {
  return (
    <div className="settings-container">
      <h2 className="channel-title">Settings</h2>
      <div className="top-section">
        <div className="image">
          <img
            src="https://www.aayushagarwal.me/assets/img/profilepic.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <h3>Aayush Agarwal</h3>
          <p>Can't talk chat only</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
