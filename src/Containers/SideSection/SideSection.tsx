import React from "react";
import "./SideSection.scss";

const SideSection: React.FC = () => {
  return (
    <div className="side-section">
      <div className="top-bar">
        <div role="button" className="icon">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"
              ></path>
            </svg>
          </i>
        </div>
        <p>Contact Info</p>
      </div>
      <div style={{textAlign:"center", borderBottom:'1px solid #dee2e6', padding: '5% 0'}}>
        <div className="main-image">
          <img src="https://www.aayushagarwal.me/assets/img/profilepic.jpg" alt=""/>
        </div>
        <h2 style={{marginBottom:'5px'}}>Aayush Agarwal</h2>
        <p style={{margin:0}}>Online</p>
      </div>
      <div>
        <small>
          About and Phone Number
        </small>
        <p>Can't talk chat only</p>
        <p>+919679883985</p>
      </div>
    </div>
  );
};

export default SideSection;
