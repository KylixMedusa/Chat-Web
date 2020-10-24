import React, { useEffect, useRef, useState } from "react";
import Chat from "../../Sub-Components/Chat/Chat";
import "./Main-Chat.scss";
import Picker from "emoji-picker-react";
import * as emojiUnicode from 'emoji-unicode'
import ContentEditable from "../../Components/ContentEditable";

const MainChat: React.FC = () => {
  const [cursor, setCursor] = useState(0);
  const [visiblity, setVisiblity] = useState("visible");
  const [messages, setMessages] = useState([
    { id: 0, text: "", author: 0, time: "" },
  ]);
  const inputElem = useRef<HTMLDivElement>(null);
  const [pickerClass, setPickerClass] = useState("");
  var currentEmoji:any = undefined;

  useEffect(() => {
    // if (inputElem.current) {
    //   let len = inputElem.current.innerText.length;
    //   setCursor(len);
    //   setPos(len);
    // }
  }, []);

  function focus() {
    // setPos(cursor);
    if (inputElem.current) {
      inputElem.current.focus();
    }
  }

  function setPos(pos: number) {
    // if (inputElem.current) {
    //   if (inputElem.current.innerText.length > 0) {
    //     // Creates range object
    //     let setpos = document.createRange();

    //     // Creates object for selection
    //     let set = window.getSelection();

    //     // Set start position of range
    //     setpos.setStart(inputElem.current.childNodes[0], pos);

    //     // Collapse range within its boundary points
    //     // Returns boolean
    //     setpos.collapse(true);
    //     if (set) {
    //       // Remove all ranges set
    //       set.removeAllRanges();

    //       // Add range with respect to range object.
    //       set.addRange(setpos);
    //     }
    //   }
    //   // Set cursor on focus
    //   inputElem.current.focus();
    // }
    // return;
  }
  function setCursorPos(event: React.SyntheticEvent<HTMLDivElement, Event>) {
    // let val;
    // let sel = window.getSelection();
    // let pos = sel?.toString().length;
    // if (pos === 0) {
    //   if (inputElem.current) {
    //     let _range = document.getSelection()?.getRangeAt(0);
    //     if (_range) {
    //       inputElem.current.focus();
    //       let range = _range.cloneRange();
    //       range.selectNodeContents(inputElem.current);
    //       range.setEnd(_range.endContainer, _range.endOffset);
    //       val = range.toString().length;
    //       setCursor(val);
    //     }
    //   }
    // } else {
    //   let setpos = document.createRange();
    //   if (inputElem.current && sel) {
    //     setpos = sel.getRangeAt(0).cloneRange();
    //     sel.removeAllRanges();
    //     console.log(setpos);
    //     sel.addRange(setpos);
    //     return;
    //   }
    // }
  }

  function setVisiblityHandler() {
    if ((
      inputElem.current?.innerText.length &&
      inputElem.current?.innerText.length > 0) || (
        inputElem.current?.innerHTML
      )
    ) {
      setVisiblity("hidden");
    } else {
      setVisiblity("visible");
    }
  }

  function sendMessage() {
    let text = inputElem.current?.innerText;
    if (text && inputElem.current) {
      let d = new Date();
      let curr_hour = d.getHours();
      let curr_min = d.getMinutes();
      let time = curr_hour + ":" + curr_min;
      setMessages([
        ...messages,
        { id: messages.length, text: text, author: 1, time: time },
      ]);
      inputElem.current.innerText = "";
      setVisiblityHandler();
    }
  }

  const onEmojiClick = (event: any, emojiObject: any) => {
    currentEmoji = emojiObject;
  };

  function getImageSrc(event:any){
    let src1 = event.target?.getAttribute("src");
    let src2 = event.target.children[0]?.getAttribute("src");
    if (inputElem.current){
      if(src1){
        let img = document.createElement('img');
        img.setAttribute('data-is-emoji','true');
        img.setAttribute('data-plain-text',currentEmoji.emoji);
        img.setAttribute('alt',currentEmoji.emoji);
        img.src = src1;
        inputElem.current.appendChild(img);
      }
      else if(src2){
        let img = document.createElement('img');
        img.setAttribute('data-is-emoji','true');
        img.setAttribute('data-plain-text',currentEmoji.emoji);
        img.setAttribute('alt',currentEmoji.emoji);
        img.src = src2;
        inputElem.current.appendChild(img);
      }
    }
    setVisiblityHandler();
  }

  function emojiPickerHandler() {
    if (pickerClass === "open") {
      setPickerClass("close");
    } else {
      setPickerClass("open");
    }
  }

  function checkEmoji(){
    let temp = inputElem.current?.innerText.charAt(inputElem.current.innerText.length - 1);
    if(temp && temp!=''){
      if(isEmoji(temp)){
        console.log(emojiUnicode(temp))
      }
    }
  }
  function isEmoji(str:any) {
    var ranges = [
        '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])' // U+1F680 to U+1F6FF
    ];
    if (str.match(ranges.join('|'))) {
        return true;
    } else {
        return false;
    }
  }

  return (
    <div className="main-chat-container">
      <div className="top-section">
        <div className="image">
          <img
            src="https://www.aayushagarwal.me/assets/img/profilepic.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <h3>Aayush Agarwal</h3>
          <small>Online</small>
        </div>
        <div>
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
                  d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
                ></path>
              </svg>
            </i>
          </div>
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
                  d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                ></path>
              </svg>
            </i>
          </div>
        </div>
      </div>
      <div className="chat-holder">
        {messages
          .filter((message) => message.id && message.id !== 0)
          .map((message) => (
            <Chat
              text={message.text}
              author={message.author}
              time={message.time}
              key={message.id}
            ></Chat>
          ))}
      </div>
      <div className={`picker ${pickerClass}`} onClick={getImageSrc}>
        <Picker onEmojiClick={onEmojiClick} />
      </div>
      <div className="input-section" onClick={focus}>
        <div className="icons">
          <div className="icon" onClick={emojiPickerHandler}>
            <i>
              {
                pickerClass === 'open'?
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
                </svg>:
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="currentColor"
                    d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
                  ></path>
                </svg>
              }
            </i>
          </div>
          <div className="icon">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
                ></path>
              </svg>
            </i>
          </div>
        </div>
        <div className="input-holder" tabIndex={-1}>
          <div className="input-wrapper" tabIndex={-1}>
            <span
              className="placeholder"
              style={{
                visibility: visiblity === "visible" ? "visible" : "hidden",
              }}
            >
              Enter Message...
            </span>
            <div
              className="input"
              contentEditable
              spellCheck
              dir="ltr"
              id="input"
              ref={inputElem}
              onSelectCapture={(e) => setCursorPos(e)}
              onInput={()=>{setVisiblityHandler(); checkEmoji()}}
            ></div>
          </div>
        </div>
        <div className="icons" onClick={sendMessage}>
          <button className="send">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                ></path>
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainChat;
