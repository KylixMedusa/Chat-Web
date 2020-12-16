import React, { useState } from "react";
import ListMenu from "../../Sub-Components/ListMenu/ListMenu";
import Modal from "../../Sub-Components/Modal/Modal";
import "./Contacts.scss";

const Contacts: React.FC = () => {
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

  const setPosition = (event: any) => {
    let height = event.target.getBoundingClientRect().top + 25 + 227;
    let windowHeight = window.innerHeight;
    if (height >= windowHeight) {
      setPos({
        top: event.target.getBoundingClientRect().top - 227,
        left: event.target.getBoundingClientRect().left + 10,
      });
      menuOpen("bottom");
    } else {
      setPos({
        top: event.target.getBoundingClientRect().top + 25,
        left: event.target.getBoundingClientRect().left + 10,
      });
      menuOpen("top");
    }
  };
  const [modalClass, setModalClass] = useState("");
  const modalToggleHandler = () => {
    if (modalClass === `open`) {
      setModalClass(`close`);
    } else {
      setModalClass(`open`);
    }
  };
  return (
    <div className="all-chats-container">
      <div className="container">
        <h2>Contacts</h2>
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
      <div className="contacts-list">
        <ul>
          <li className="add" onClick={modalToggleHandler}>
            <span className="icon-image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M14.7 12c2 0 3.6-1.6 3.6-3.6s-1.6-3.6-3.6-3.6-3.6 1.6-3.6 3.6 1.6 3.6 3.6 3.6zm-8.1-1.8V7.5H4.8v2.7H2.1V12h2.7v2.7h1.8V12h2.7v-1.8H6.6zm8.1 3.6c-2.4 0-7.2 1.2-7.2 3.6v1.8H22v-1.8c-.1-2.4-4.9-3.6-7.3-3.6z"
                ></path>
              </svg>
            </span>
            <span>Add Contact</span>
          </li>
          <li className="header">
            <h3>A</h3>
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
                <i
                  onClick={(e) => {
                    setPosition(e);
                    menuToggleHandler();
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
          </li>
          <li>
            <div className="card">
              <div className="card-image">
                <img src="https://cliko.in/assets/team/aayush.jpg" alt="" />
              </div>
              <div className="card-contents">
                <h3>Aditya Gupta</h3>
                <p>
                  Hello, Welcome to the first test. This is a first version of
                  Chat Application
                </p>
              </div>
              <div className="button">
                <i
                  onClick={(e) => {
                    setPosition(e);
                    menuToggleHandler();
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
          </li>
        </ul>
      </div>
      <ListMenu
        class={menuClass}
        style={{ top: pos.top, left: pos.left }}
        toggle={menuToggleHandler}
      >
        <li>Share</li>
        <li>Block</li>
        <li>Delete</li>
      </ListMenu>
      <Modal class={modalClass} toggle={modalToggleHandler}>
        <div>
          <div className="modal-title">
            <h2>Add Contact</h2>
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

export default Contacts;
