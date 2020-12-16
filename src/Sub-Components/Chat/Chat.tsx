import React, { useRef } from "react";
import "./Chat.scss";

var parse = require("html-react-parser");

type Props = {
  header?: string|null;
  focus:boolean;
  text: string;
  author: number;
  time: string;
  dir: string;
  menuClass: string;
  toggle: (args0: "bottom" | "top") => void;
  setPos: any;
};

const Chat: React.FC<Props> = (props) => {
  const buttonLeft = useRef<HTMLDivElement>(null);
  const buttonRight = useRef<HTMLDivElement>(null);

  const openList = (val: string) => {
    if (val === "left") {
      if (buttonLeft.current) {
        let height = buttonLeft.current.getBoundingClientRect().top + 27 + 227;
        let windowHeight = window.innerHeight;
        if (height >= windowHeight) {
          props.setPos({
            top: buttonLeft.current.getBoundingClientRect().top - 227,
            left: buttonLeft.current.getBoundingClientRect().left - 641,
          });
          props.toggle("bottom");
        } else {
          props.setPos({
            top: buttonLeft.current.getBoundingClientRect().top + 27,
            left: buttonLeft.current.getBoundingClientRect().left - 641,
          });
          props.toggle("top");
        }
      }
    } else {
      if (buttonRight.current) {
        let height = buttonRight.current.getBoundingClientRect().top + 27 + 227;
        let windowHeight = window.innerHeight;
        if (height >= windowHeight) {
          props.setPos({
            top: buttonRight.current.getBoundingClientRect().top - 227,
            left: buttonRight.current.getBoundingClientRect().left - 641,
          });
          props.toggle("bottom");
        } else {
          props.setPos({
            top: buttonRight.current.getBoundingClientRect().top + 27,
            left: buttonRight.current.getBoundingClientRect().left - 641,
          });
          props.toggle("top");
        }
      }
    }
  };

  return (
    <React.Fragment>
      {props.header ? (
        <div className="date-header">
          <span>{props.header}</span>
        </div>
      ) : null}
      {props.dir === "left" ? (
        <div className={`message-left ${props.focus ? "focus" : ""}`}>
          <span className="message-text">
            {parse(props.text)}
            <span className="message-time">{props.time}</span>
          </span>
          <span className={`icon-menu ${props.menuClass ? "active" : ""}`}>
            <span
              role="button"
              className={`icon`}
              onClick={() => {
                openList("left");
              }}
              ref={buttonLeft}
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
                    d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                  ></path>
                </svg>
              </i>
            </span>
          </span>
        </div>
      ) : (
        <div className={`message-right ${props.focus ? "focus" : ""}`}>
          <span className={`icon-menu ${props.menuClass ? "active" : ""}`}>
            <span
              role="button"
              className={`icon`}
              onClick={() => openList("right")}
              ref={buttonRight}
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
                    d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                  ></path>
                </svg>
              </i>
            </span>
          </span>
          <span className="message-text">
            {parse(props.text)}
            <span className="message-time">{props.time}</span>
          </span>
        </div>
      )}
    </React.Fragment>
  );
};

export default Chat;
