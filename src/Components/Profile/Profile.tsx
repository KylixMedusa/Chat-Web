import React, { useEffect, useRef, useState } from "react";
import "./Profile.scss";

import { observer } from "mobx-react-lite";

import { channelSectionHandler, profileData } from "../../App";
import ListMenu from "../../Sub-Components/ListMenu/ListMenu";
import ViewPhoto from "./ViewPhoto/ViewPhoto";
import TakePhoto from "./TakePhoto/TakePhoto";
import UploadPhoto from "./UploadPhoto/UploadPhoto";

const Profile: React.FC = () => {
  const [menuClass, setMenuClass] = useState("");
  const [pos, setPos] = useState({ left: "50%", top: "50%" });
  const [editHandleOne, setEditHandlerOne] = useState(false);
  const [editHandleTwo, setEditHandlerTwo] = useState(false);
  const nameInputElem = useRef<HTMLDivElement>(null);
  const aboutInputElem = useRef<HTMLDivElement>(null);
  const [name, setName] = useState(profileData.get().name);
  const [about, setAbout] = useState(profileData.get().status);

  const menuToggleHandler = () => {
    if (menuClass === `open-top-left`) {
      setMenuClass(`close-top-left`);
    } else {
      setMenuClass(`open-top-left`);
    }
  };
  const [viewPhotoClass, setViewPhotoClass] = useState("");
  const viewPhotoToggleHandler = () => {
    if (viewPhotoClass === `open`) {
      setViewPhotoClass(`close`);
    } else {
      setViewPhotoClass(`open`);
    }
  };
  const [takePhotoClass, setTakePhotoClass] = useState("");
  const takePhotoToggleHandler = () => {
    if (takePhotoClass === `open`) {
      setTakePhotoClass(`close`);
    } else {
      setTakePhotoClass(`open`);
    }
  };
  const setPosHandler = (event: any) => {
    setPos({ left: `${event.pageX}px`, top: `${event.pageY}px` });
  };
  const checkInputLength = (event:any, field:string, length:number)=>{
    if (event.which === 13) {
      event.preventDefault();
  }
    if(field && (field.replace(/&nbsp;/g, ' ').length >= length)){
      event.preventDefault();
    }
  }
  const [uploadPhotoClass, setUploadPhotoClass] = useState("");
  const [uploadImage, setUploadImage] = useState(document.createElement("img"));
  const uploadPhotoToggleHandler = () => {
    if (uploadPhotoClass === `open`) {
      setUploadPhotoClass(`close`);
    } else {
      setUploadPhotoClass(`open`);
    }
  };
  const uploadPhotoHandler = () => {
    let image = document.createElement('input');
    image.setAttribute("type", "file");
    image.setAttribute("accept",".jpg, .jpeg, .png, .svg, .gif, .bmp");
    image.click();
    image.addEventListener('change',(e:any)=>{
      var oFReader = new FileReader();
        oFReader.readAsDataURL(e.target.files[0]);

        oFReader.onload = function (oFREvent) {
            if(oFREvent.target?.result){
                let result:any = oFREvent.target.result;
                let img = new Image();
                img.src = result;
                img.onload = function (e:any) {
                  var height = e.target.height;
                  var width = e.target.width;
                  if (height < 324 || width < 324) {
                    alert("Height and Width must not be less than 324px.");
                  }
                  else{
                    setUploadImage(e.target);
                    uploadPhotoToggleHandler();
                  }
                };
            }
        };
    })
  };
  function saveProfileName(){
    profileData.set({...profileData.get(),name:name});
  }
  function saveProfileStatus(){
    profileData.set({...profileData.get(),status:about});
  }
  return (
    <div className="profile-section">
      <div className="top-bar">
        <div
          role="button"
          className="icon"
          onClick={() => {
            channelSectionHandler.set("Settings");
          }}
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
                d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
              ></path>
            </svg>
          </i>
        </div>
        <h2
          className="channel-title"
          style={{ marginBottom: "0px", paddingLeft: "0px" }}
        >
          Profile
        </h2>
      </div>
      <div style={{ overflowY: "auto", height: "100%" }}>
        <div className="main-image">
          <img src={profileData.get().avatar} alt="" />
          <div
            className={`hover-overlay ${
              menuClass === "open-top-left" ? "active" : ""
            }`}
            onClick={(e) => {
              setPosHandler(e);
              menuToggleHandler();
            }}
          >
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="white"
                  d="M21.317 4.381H10.971L9.078 2.45c-.246-.251-.736-.457-1.089-.457H4.905c-.352 0-.837.211-1.078.468L1.201 5.272C.96 5.529.763 6.028.763 6.38v1.878l-.002.01v11.189a1.92 1.92 0 0 0 1.921 1.921h18.634a1.92 1.92 0 0 0 1.921-1.921V6.302a1.92 1.92 0 0 0-1.92-1.921zM12.076 18.51a5.577 5.577 0 1 1 0-11.154 5.577 5.577 0 0 1 0 11.154zm0-9.506a3.929 3.929 0 1 0 0 7.858 3.929 3.929 0 0 0 0-7.858z"
                ></path>
              </svg>
            </p>
            <p>
              CHANGE <br></br> PROFILE PICTURE
            </p>
          </div>
        </div>
        <div className="temp">
          <div className="card">
            <small className="card-title">Name</small>
            <div className={`input ${editHandleOne ? "active" : ""}`}>
              <div 
                contentEditable={editHandleOne}
                ref={nameInputElem}
                onKeyPress={(e)=>checkInputLength(e,name,25)}
                onInput={()=>{
                  if(nameInputElem.current)
                    setName(nameInputElem.current?.innerHTML)
                }}
              >{profileData.get().name}</div>
              <i>
                {!editHandleOne ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    onClick={()=>setEditHandlerOne(!editHandleOne)}
                  >
                    <path
                      fill="currentColor"
                      d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
                    ></path>
                  </svg>
                ) : (
                  <React.Fragment>
                    <small>
                      {`${25 - name.replace(/&nbsp;/g, ' ').length}`}
                    </small>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      onClick={()=>{setEditHandlerOne(!editHandleOne); saveProfileName()}}
                    >
                      <path
                        fill="currentColor"
                        d="M9 17.2l-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z"
                      ></path>
                    </svg>
                  </React.Fragment>
                )}
              </i>
            </div>
          </div>
          <p style={{ padding: "0 5%", color: "var(--text-color-tertiary)", fontSize: "small" }}>
            This is not your Username or Pin. This name will be visible to your
            contacts.
          </p>
          <div className="card">
            <small className="card-title">Status</small>
            <div className={`input ${editHandleTwo ? "active" : ""}`}>
              <div 
                contentEditable={editHandleTwo}
                ref={aboutInputElem}
                onKeyPress={(e)=>checkInputLength(e,about,139)}
                onInput={()=>{
                  if(aboutInputElem.current)
                    setAbout(aboutInputElem.current?.innerHTML)
                }}
              >{profileData.get().status}</div>
              <i>
                {!editHandleTwo ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24" 
                    onClick={()=>setEditHandlerTwo(!editHandleTwo)}    
                  >
                    <path
                      fill="currentColor"
                      d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
                    ></path>
                  </svg>
                ) : (
                  <React.Fragment>
                    { (139 - about.replace(/&nbsp;/g, ' ').length < 50)?
                      <small>
                        {`${139 - about.replace(/&nbsp;/g, ' ').length}`}
                      </small>:
                      null
                    }
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      onClick={()=>{setEditHandlerTwo(!editHandleTwo); saveProfileStatus()}}
                    >
                      <path
                        fill="currentColor"
                        d="M9 17.2l-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z"
                      ></path>
                    </svg>
                  </React.Fragment>
                )}
              </i>
            </div>
          </div>
        </div>
      </div>
      <ListMenu
        class={menuClass}
        style={{ top: pos.top, left: pos.left }}
        toggle={menuToggleHandler}
      >
        <li onClick={()=>{viewPhotoToggleHandler();menuToggleHandler();}}>View Photo</li>
        <li onClick={()=>{takePhotoToggleHandler();menuToggleHandler();}}>Take Photo</li>
        <li onClick={()=>{uploadPhotoHandler();menuToggleHandler();}}>Upload Photo</li>
        <li>Remove Photo</li>
      </ListMenu>
      <ViewPhoto
        class = {viewPhotoClass}
        toggle = {viewPhotoToggleHandler}
      ></ViewPhoto>
      <TakePhoto
        class = {takePhotoClass}
        toggle = {takePhotoToggleHandler}
      ></TakePhoto>
      <UploadPhoto
        class = {uploadPhotoClass}
        toggle = {uploadPhotoToggleHandler}
        image = {uploadImage}
      ></UploadPhoto>
    </div>
  );
};

export default observer(Profile);
