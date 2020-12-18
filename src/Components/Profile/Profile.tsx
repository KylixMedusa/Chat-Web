import React, { useRef, useState } from "react";
import "./Profile.scss";

import { observer } from "mobx-react-lite";

import { channelSectionHandler } from "../../App";
import ListMenu from "../../Sub-Components/ListMenu/ListMenu";
import ViewPhoto from "./ViewPhoto/ViewPhoto";
import TakePhoto from "./TakePhoto/TakePhoto";
import UploadPhoto from "./UploadPhoto/UploadPhoto";
import Modal from "../../Sub-Components/Modal/Modal";
import { ProfileContext, SnackbarContext } from "../../store";
import { useStore } from "../../store/hooks";

const Profile: React.FC = () => {
  const profileStore = useStore(ProfileContext);
  const [menuClass, setMenuClass] = useState("");
  const [pos, setPos] = useState({ left: "50%", top: "50%" });
  const [editHandleOne, setEditHandlerOne] = useState(false);
  const [editHandleTwo, setEditHandlerTwo] = useState(false);
  const nameInputElem = useRef<HTMLDivElement>(null);
  const aboutInputElem = useRef<HTMLDivElement>(null);
  const [name, setName] = useState(profileStore.name);
  const [about, setAbout] = useState(profileStore.status);
  const snackbarStore = useStore(SnackbarContext);

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
  const checkInputLength = (event: any, field: string, length: number) => {
    if (event.which === 13) {
      event.preventDefault();
    }
    if (field && field.replace(/&nbsp;/g, " ").length >= length) {
      event.preventDefault();
    }
  };
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
    let image = document.createElement("input");
    image.setAttribute("type", "file");
    image.setAttribute("accept", ".jpg, .jpeg, .png, .svg, .gif, .bmp");
    image.click();
    image.addEventListener("change", (e: any) => {
      var oFReader = new FileReader();
      oFReader.readAsDataURL(e.target.files[0]);

      oFReader.onload = function (oFREvent) {
        if (oFREvent.target?.result) {
          let result: any = oFREvent.target.result;
          let img = new Image();
          img.src = result;
          img.onload = function (e: any) {
            var height = e.target.height;
            var width = e.target.width;
            if (height < 324 || width < 324) {
              alert("Height and Width must not be less than 324px.");
            } else {
              setUploadImage(e.target);
              uploadPhotoToggleHandler();
            }
          };
        }
      };
    });
  };
  function saveProfileName() {
    snackbarStore.addSnackbar("Name Updated");
    profileStore.updateName(name);
  }
  function saveProfileStatus() {
    snackbarStore.addSnackbar("Status Updated");
    profileStore.updateStatus(about);
  }
  const [removePhotoClass, setRemovePhotoClass] = useState("");
  const removePhotoToggleHandler = () => {
    if (removePhotoClass === `open`) {
      setRemovePhotoClass(`close`);
    } else {
      setRemovePhotoClass(`open`);
    }
  };
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
          {profileStore.avatar && profileStore.avatar !== "" ? (
            <img src={profileStore.avatar} alt="" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 212 212"
              width="212"
              height="212"
            >
              <path
                  fill="var(--svg-background-avatar)"
                  d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
                ></path>
                <path
                  fill="var(--svg-primary-avatar)"
                  d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
                ></path>
            </svg>
          )}
          <div
            className={`hover-overlay ${
              menuClass === "open-top-left" ||
              !profileStore.avatar ||
              profileStore.avatar === ""
                ? "active"
                : ""
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
            {profileStore.avatar && profileStore.avatar !== "" ? (
              <p>
                CHANGE <br></br> PROFILE PICTURE
              </p>
            ) : (
              <p>
                ADD PROFILE <br></br> PICTURE
              </p>
            )}
          </div>
        </div>
        <div className="temp">
          <div className="card">
            <small className="card-title">Name</small>
            <div className={`input ${editHandleOne ? "active" : ""}`}>
              <div
                contentEditable={editHandleOne}
                ref={nameInputElem}
                onKeyPress={(e) => checkInputLength(e, name, 25)}
                onInput={() => {
                  if (nameInputElem.current)
                    setName(nameInputElem.current?.innerHTML);
                }}
              >
                {profileStore.name}
              </div>
              <i>
                {!editHandleOne ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    onClick={() => setEditHandlerOne(!editHandleOne)}
                  >
                    <path
                      fill="currentColor"
                      d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
                    ></path>
                  </svg>
                ) : (
                  <React.Fragment>
                    <small>
                      {`${25 - name.replace(/&nbsp;/g, " ").length}`}
                    </small>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      onClick={() => {
                        setEditHandlerOne(!editHandleOne);
                        saveProfileName();
                      }}
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
          <p
            style={{
              padding: "0 5%",
              color: "var(--text-color-tertiary)",
              fontSize: "small",
            }}
          >
            This is not your Username or Pin. This name will be visible to your
            contacts.
          </p>
          <div className="card">
            <small className="card-title">Status</small>
            <div className={`input ${editHandleTwo ? "active" : ""}`}>
              <div
                contentEditable={editHandleTwo}
                ref={aboutInputElem}
                onKeyPress={(e) => checkInputLength(e, about, 139)}
                onInput={() => {
                  if (aboutInputElem.current)
                    setAbout(aboutInputElem.current?.innerHTML);
                }}
              >
                {profileStore.status}
              </div>
              <i>
                {!editHandleTwo ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    onClick={() => setEditHandlerTwo(!editHandleTwo)}
                  >
                    <path
                      fill="currentColor"
                      d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
                    ></path>
                  </svg>
                ) : (
                  <React.Fragment>
                    {139 - about.replace(/&nbsp;/g, " ").length < 50 ? (
                      <small>
                        {`${139 - about.replace(/&nbsp;/g, " ").length}`}
                      </small>
                    ) : null}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      onClick={() => {
                        setEditHandlerTwo(!editHandleTwo);
                        saveProfileStatus();
                      }}
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
        {profileStore.avatar && profileStore.avatar !== "" ? (
          <li
            onClick={() => {
              viewPhotoToggleHandler();
              menuToggleHandler();
            }}
          >
            View Photo
          </li>
        ) : null}
        <li
          onClick={() => {
            takePhotoToggleHandler();
            menuToggleHandler();
          }}
        >
          Take Photo
        </li>
        <li
          onClick={() => {
            uploadPhotoHandler();
            menuToggleHandler();
          }}
        >
          Upload Photo
        </li>
        {profileStore.avatar && profileStore.avatar !== "" ? (
          <li
            onClick={() => {
              removePhotoToggleHandler();
              menuToggleHandler();
            }}
          >
            Remove Photo
          </li>
        ) : null}
      </ListMenu>
      <ViewPhoto
        class={viewPhotoClass}
        toggle={viewPhotoToggleHandler}
      ></ViewPhoto>
      <TakePhoto
        class={takePhotoClass}
        toggle={takePhotoToggleHandler}
      ></TakePhoto>
      <UploadPhoto
        class={uploadPhotoClass}
        toggle={uploadPhotoToggleHandler}
        image={uploadImage}
      ></UploadPhoto>
      <Modal
        class={removePhotoClass}
        toggle={removePhotoToggleHandler}
        style={{ height: "150px" }}
      >
        <div>
          <div className="modal-title">
            <p>Remove your profile photo?</p>
          </div>
        </div>
        <div className="modal-buttons">
          <button className="cancel" onClick={removePhotoToggleHandler}>
            Cancel
          </button>
          <button
            className="submit"
            onClick={() => {
              profileStore.updateAvatar("")
              removePhotoToggleHandler();
              snackbarStore.addSnackbar("Profile Picture Removed");
            }}
          >
            Remove
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default observer(Profile);
