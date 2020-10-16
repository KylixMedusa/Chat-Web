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
    </div>
  );
};

export default SideSection;
