import React, { useState } from "react";
import ListMenu from "../../Sub-Components/ListMenu/ListMenu";
import "./Contacts.scss";

const Contacts: React.FC = () => {
  const [menuClass,setMenuClass] = useState("");
  const [pos,setPos] = useState({top:'0', left:'0'});
  const menuToggleHandler = ()=>{
    if(menuClass === 'open-top-left'){
      setMenuClass('close-top-left');
    }
    else{
      setMenuClass('open-top-left');
    }
  }
  function setPosition(event:any){
    setPos({top:`${event.target.getBoundingClientRect().top + 24}px`,left: `${event.target.getBoundingClientRect().left + 10}px`});
  }
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
                fill="currentColor"
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
        <div className="group-list">
          <h3 className="group-header">A</h3>
          <p>
            Aayush Agarwal
            <i onClick={e=>{setPosition(e);menuToggleHandler();}}>
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
          </p>
          <p>
            Aditya Kumar
            <i onClick={e=>{setPosition(e);menuToggleHandler();}}>
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
          </p>
          <p>
            Aditya Singh
            <i onClick={e=>{setPosition(e);menuToggleHandler();}}>
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
          </p>
        </div>
      </div>
      <ListMenu
                class={menuClass}
                style={{top:pos.top,left:pos.left}}
                toggle={menuToggleHandler}
              >
                <li>Share</li>
                <li>Block</li>
                <li>Delete</li>
      </ListMenu>
    </div>
  );
};

export default Contacts;
