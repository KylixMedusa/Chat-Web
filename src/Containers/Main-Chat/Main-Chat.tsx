import React, { useEffect, useRef, useState } from "react";
import Chat from "../../Sub-Components/Chat/Chat";
import "./Main-Chat.scss";
import Picker from "emoji-picker-react";
import ListMenu from "../../Sub-Components/ListMenu/ListMenu";
import { observable } from "mobx";
import {observer} from "mobx-react-lite";
import { patternView } from "../../Components/Wallpaper/Wallpaper";

export const sideSectionClass = observable.box('close');
export const chatBackground = observable.box({color:'var(--bg-color-4)', opacity:"0.06", pattern:"dark"});
export const selectedChatBackground = observable.box({color:'var(--bg-color-4)', opacity:"0.06", pattern:"dark"});


var emojis = require('../../emojis.json').emojis;
var emojiRegex = require('emoji-regex');

const MainChat: React.FC = () => {
  const [cursor, setCursor] = useState(0);
  const [visiblity, setVisiblity] = useState("visible");
  const [messages, setMessages] = useState([
    { header:"",focus:true, id: 0, text: "", author: 0, time: "" },
  ]);
  const inputElem = useRef<HTMLDivElement>(null);
  const [pickerClass, setPickerClass] = useState("");
  const [menuClass,setMenuClass] = useState("");

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
    let text = inputElem.current?.innerHTML;
    if (text && inputElem.current) {
      let d = new Date();
      let curr_hour = d.getHours();
      let curr_min = d.getMinutes();
      let time = formatTime(curr_hour) + ":" + formatTime(curr_min);
      let focus = true;
      let author = 1;
      if(messages.length >= 1)
        if(messages[messages.length - 1].author === author)
          focus = false;
      setMessages([
        ...messages,
        { header:"",focus:focus,id: messages.length, text: text.trim(), author: 1, time: time },
      ]);
      inputElem.current.innerHTML = "";
      setVisiblityHandler();
    }
  }

  function formatTime(time:number){
    let temp = String(time)
    if(temp.length == 1){
      return(`0${temp}`);
    }
    else{
      return(temp);
    }
  }

  const onEmojiClick = (event: any, emojiObject: any) => {
    event.stopPropagation();
    if(inputElem.current){
          let img = document.createElement('img');
          img.setAttribute('data-is-emoji','true');
          img.setAttribute('data-plain-text',emojiObject.emoji);
          img.setAttribute('alt',emojiObject.emoji);
          img.src =`https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-64/${emojiObject.unified}.png`;
          inputElem.current.appendChild(img);
          setVisiblityHandler();
      }
  };

  function emojiPickerHandler() {
    if (pickerClass === "open") {
      setPickerClass("close");
    } else {
      setPickerClass("open");
    }
  }

  function checkEmoji(event:any){
    event.stopPropagation();
    let temp = inputElem.current?.innerText;
    if(temp?.match(emojiRegex)){
      if(temp && inputElem.current){
        for(let emoji of emojis){
          if(emoji.emoji === temp){
            let unicode = String(emoji.unicode).toLowerCase().split(" ").join("-");
            let img = document.createElement('img');
            img.setAttribute('data-is-emoji','true');
            img.setAttribute('data-plain-text',emoji.emoji);
            img.setAttribute('alt',emoji.emoji);
            img.src =`https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-64/${unicode}.png`;
            inputElem.current.appendChild(img);
            break;
          }
        }
      }
    }
  }
  const menuToggleHandler = ()=>{
    if(menuClass === 'open-top-right'){
      setMenuClass('close-top-right');
    }
    else{
      setMenuClass('open-top-right');
    }
  }

  const [chatMenuClass,setChatMenuClass] = useState('');
  const [dir,setDir] = useState('right');
  const [chatPos,setChatPos] = useState({top:0,left:0});
  const chatMenuToggleHandler = ()=>{
    if(chatMenuClass === `open-top-right`){
      setChatMenuClass(`close-top-right`);
    }
    else if(chatMenuClass === `open-bottom-right`){
      setChatMenuClass(`close-bottom-right`);
    }
  }

  const chatMenuOpen = (direction:'bottom'|'top') => {
    if(direction === `top`){
      setChatMenuClass(`open-top-right`);
    }
    else if(direction === `bottom`){
      setChatMenuClass(`open-bottom-right`);
    }
  }

  return (
    <React.Fragment>
      <div className="main-chat-container">
        <div className="top-section">
          <div className="image">
            <img
              src="https://cliko.in/assets/team/aayush.jpg"
              alt=""
            />
          </div>
          <div className="content" onClick={()=>{sideSectionClass.set('open')}}>
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
            <div className="icon-menu">
              <div role="button" className={`icon ${menuClass === 'open-top-right'?'active':''}`} onClick={menuToggleHandler}>
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
                <ListMenu
                  class={menuClass}
                  style={{top:'120%',right:'50%'}}
                  toggle={menuToggleHandler}
                >
                  <li>Contact Info</li>
                  <li>Select Messages</li>
                  <li>Mute Notifications</li>
                  <li>Clear Messages</li>
                  <li>Delete Chat</li>
                </ListMenu>
            </div>
          </div>
        </div>
        <div className="chat-holder" style={{backgroundColor:chatBackground.get().color}}>
          {
            patternView.get()?
            <div className="pattern" style={{opacity: chatBackground.get().opacity}} data-pattern = {chatBackground.get().pattern}></div>
            :null
          }
          <div className="chat-wrapper" dir="btt">
            {messages
              .filter((message) => message.id && message.id !== 0)
              .map((message) => (
                <Chat
                  header={message.header === ""? null: message.header}
                  focus={message.focus}
                  text={message.text}
                  author={message.author}
                  time={message.time}
                  key={message.id}
                  dir={dir}
                  menuClass={chatMenuClass}
                  toggle={chatMenuOpen}
                  setPos={setChatPos}
                  ></Chat>
              ))}
          </div>
        </div>
        <div className={`picker ${pickerClass}`}>
          <Picker onEmojiClick={onEmojiClick} preload/>
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
                onInput={(e)=>{setVisiblityHandler(); checkEmoji(e)}}
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
                    fill="var(--bg-color-1)"
                    d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                  ></path>
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>
      <ListMenu
          class={chatMenuClass}
          style={{top:chatPos.top,left:chatPos.left}}
          toggle={chatMenuToggleHandler}
      >
          <li>Copy</li>
          <li>Reply</li>
          <li>Forward Message</li>
          <li>Star Message</li>
          <li>Delete Message</li>
      </ListMenu>
    </React.Fragment>
  );
};

export default observer(MainChat);
