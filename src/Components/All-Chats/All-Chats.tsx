import React, { useState } from "react";
import ListMenu from "../../Sub-Components/ListMenu/ListMenu";
import "./All-Chats.scss";

const AllChats: React.FC = () => {
  const [menuClass, setMenuClass] = useState("");
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const menuToggleHandler = () => {
    if (menuClass === `open-top-left`) {
      setMenuClass(`close-top-left`);
    } else if (menuClass === `open-bottom-left`) {
      setMenuClass(`close-bottom-left`);
    }
  };
  const menuOpen = (direction: "bottom" | "top") => {
    if (direction === `top`) {
      setMenuClass(`open-top-left`);
    } else if (direction === `bottom`) {
      setMenuClass(`open-bottom-left`);
    }
  };

  const posHandler = (event: any) => {
    let height = event.target.getBoundingClientRect().top + 18 + 227;
    let windowHeight = window.innerHeight;
    if (height >= windowHeight) {
      setPos({
        top: event.target.getBoundingClientRect().top - 227,
        left: event.target.getBoundingClientRect().left + 10,
      });
      menuOpen("bottom");
    } else {
      setPos({
        top: event.target.getBoundingClientRect().top + 18,
        left: event.target.getBoundingClientRect().left + 10,
      });
      menuOpen("top");
    }
  };

  const [topMenuClass, setTopMenuClass] = useState("");
  const [posTop, setPosTop] = useState({ top: 0, left: 0 });
  const topMenuToggleHandler = () => {
    if (topMenuClass === "open-top-right") {
      setTopMenuClass("close-top-right");
    } else {
      setTopMenuClass("open-top-right");
    }
  };
  const topPosHandler = (event: any) => {
    setPosTop({
      top: event.target.getBoundingClientRect().top + 18,
      left: event.target.getBoundingClientRect().left + 10 - 143,
    });
  };

  return (
    <React.Fragment>
      <div className="all-chats-container">
        <div className="container">
          <div className="title">
            <h2>Chats</h2>
            <div className="icon" role="button">
              <i
                onClick={(e) => {
                  topPosHandler(e);
                  topMenuToggleHandler();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="var(--icon-color-1)"
                    d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                  ></path>
                </svg>
              </i>
            </div>
          </div>
          <div className="search--container" id="search-container">
            <div className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="var(--icon-color-1)"
                  d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
                ></path>
              </svg>
            </div>
            <div className="back-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="#33b7f6"
                  d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
                ></path>
              </svg>
            </div>
            <input type="text" placeholder="Search or start new chat" />
            <div>
              <i></i>
              <div className="loader"></div>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="wrapper">
            <div className="card active">
              <div className="card-image">
                <img src="https://cliko.in/assets/team/aayush.jpg" alt="" />
              </div>
              <div className="card-contents">
                <div className="top">
                  <h3>Aayush Agarwal</h3>
                  <span className="date-time">13:00</span>
                </div>
                <div className="bottom">
                  <p>
                    Hello, Welcome to the first test. This is a first version of
                    Chat Application
                  </p>
                  <div className="card-icons">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 18"
                        width="16"
                        height="18"
                      >
                        <path
                          fill="currentColor"
                          d="M11.52 9.206c0-1.4-.778-2.567-1.944-3.111v1.711L11.52 9.75v-.544zm1.945 0c0 .7-.156 1.4-.389 2.022l1.167 1.167c.544-.933.778-2.1.778-3.267 0-3.344-2.333-6.144-5.444-6.844v1.633c2.255.778 3.888 2.8 3.888 5.289zm-11.433-7L1.02 3.217l3.656 3.656H1.02v4.667h3.111l3.889 3.889v-5.211l3.344 3.344c-.544.389-1.089.7-1.789.933v1.633a6.64 6.64 0 0 0 2.878-1.4l1.556 1.556 1.011-1.011-7-7-5.988-6.067zm5.988.778L6.387 4.617 8.02 6.25V2.984z"
                        ></path>
                      </svg>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19 19"
                        width="19"
                        height="19"
                      >
                        <path
                          fill="currentColor"
                          d="M9.5 18.419C4.574 18.419.581 14.426.581 9.5S4.574.581 9.5.581s8.919 3.993 8.919 8.919-3.993 8.919-8.919 8.919zm2.121-5.708l-.082-2.99 1.647-1.963a1.583 1.583 0 0 0-.188-2.232l-.32-.269a1.58 1.58 0 0 0-2.231.203L8.803 7.42l-2.964.439a.282.282 0 0 0-.14.496l5.458 4.58c.186.157.47.019.464-.224zM5.62 13.994a.504.504 0 0 0 .688-.038l2.204-2.307-1.085-.91-1.889 2.571a.504.504 0 0 0 .082.684z"
                        ></path>
                      </svg>
                    </div>
                    <div className="icon badge">3</div>
                    <div
                      className="icon menu"
                      onClick={(e) => {
                        posHandler(e);
                        menuToggleHandler();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19 20"
                        width="19"
                        height="20"
                      >
                        <path
                          fill="currentColor"
                          d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src="https://cliko.in/assets/team/aayush.jpg" alt="" />
              </div>
              <div className="card-contents">
                <div className="top">
                  <h3>Aayush Agarwal</h3>
                  <span className="date-time">13:00</span>
                </div>
                <div className="bottom">
                  <p>
                    Hello, Welcome to the first test. This is a first version of
                    Chat Application
                  </p>
                  <div className="card-icons">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 18"
                        width="16"
                        height="18"
                      >
                        <path
                          fill="currentColor"
                          d="M11.52 9.206c0-1.4-.778-2.567-1.944-3.111v1.711L11.52 9.75v-.544zm1.945 0c0 .7-.156 1.4-.389 2.022l1.167 1.167c.544-.933.778-2.1.778-3.267 0-3.344-2.333-6.144-5.444-6.844v1.633c2.255.778 3.888 2.8 3.888 5.289zm-11.433-7L1.02 3.217l3.656 3.656H1.02v4.667h3.111l3.889 3.889v-5.211l3.344 3.344c-.544.389-1.089.7-1.789.933v1.633a6.64 6.64 0 0 0 2.878-1.4l1.556 1.556 1.011-1.011-7-7-5.988-6.067zm5.988.778L6.387 4.617 8.02 6.25V2.984z"
                        ></path>
                      </svg>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19 19"
                        width="19"
                        height="19"
                      >
                        <path
                          fill="currentColor"
                          d="M9.5 18.419C4.574 18.419.581 14.426.581 9.5S4.574.581 9.5.581s8.919 3.993 8.919 8.919-3.993 8.919-8.919 8.919zm2.121-5.708l-.082-2.99 1.647-1.963a1.583 1.583 0 0 0-.188-2.232l-.32-.269a1.58 1.58 0 0 0-2.231.203L8.803 7.42l-2.964.439a.282.282 0 0 0-.14.496l5.458 4.58c.186.157.47.019.464-.224zM5.62 13.994a.504.504 0 0 0 .688-.038l2.204-2.307-1.085-.91-1.889 2.571a.504.504 0 0 0 .082.684z"
                        ></path>
                      </svg>
                    </div>
                    <div className="icon badge">3</div>
                    <div
                      className="icon menu"
                      onClick={(e) => {
                        posHandler(e);
                        menuToggleHandler();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19 20"
                        width="19"
                        height="20"
                      >
                        <path
                          fill="currentColor"
                          d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListMenu
        class={menuClass}
        style={{ top: pos.top, left: pos.left }}
        toggle={menuToggleHandler}
      >
        <li>Archive Chat</li>
        <li>Mute Notifications</li>
        <li>Delete Chat</li>
        <li>Pin Chat</li>
        <li>Mark as Unread</li>
      </ListMenu>
      {/* <ListMenu
        class={topMenuClass}
        style={{ top: posTop.top, left: posTop.left }}
        toggle={topMenuToggleHandler}
      >
        <li>Archived</li>
        <li>Starred</li>
      </ListMenu> */}
    </React.Fragment>
  );
};

export default AllChats;
