import React, { useEffect, useRef, useState } from "react";
import EditPhoto from "../EditPhoto/EditPhoto";
import "./TakePhoto.scss";

type Props = {
  class: string;
  toggle: () => void;
};

const TakePhoto: React.FC<Props> = (props) => {
  const videoElem = useRef<HTMLVideoElement>(null);
  const snapshot = useRef<HTMLDivElement>(null);
  const canvas = document.createElement("canvas");
  const [sectionClass, setSectionClass] = useState("");
  canvas.height = 750;
  canvas.width = 1000;
  function captureSnapshot() {
    if (videoElem.current) {
      setSectionClass("edit");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      if (ctx) {
        ctx.save();
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(videoElem.current, 0, 0, canvas.width, canvas.height);
        ctx.restore();
        img.src = canvas.toDataURL("image/png");
        img.width = 500;
        if (snapshot.current) {
          snapshot.current.innerHTML = "";
          snapshot.current.appendChild(img);
        }
        turnOffCamera();
      }
    }
  }

  function handleVideo() {
    setSectionClass("");
    if (props.class === "open") {
      turnOnCamera();
    } else if (props.class === "close") {
      turnOffCamera();
    }
  }

  function turnOffCamera() {
    if (videoElem.current) {
      videoElem.current.pause();
      let stream: any = videoElem.current.srcObject;
      if (stream)
        stream.getTracks().forEach(function (track: any) {
          track.stop();
        });
      videoElem.current.srcObject = null;
    }
  }

  function turnOnCamera() {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoElem.current) videoElem.current.srcObject = stream;
        })
        .catch(function (err) {
          console.log("Something went wrong!", err);
        });
    }
  }
  function goToCapture() {
    turnOnCamera();
    setSectionClass("");
  }

  useEffect(() => {
    handleVideo();
  }, [props.class]);

  return (
    <div className={`take-photo-container ${props.class}`}>
      <div className="take-photo-wrapper">
        <div className={`take-photo-set ${sectionClass}`}>
          <div>
            <header>
              <div>
                <h2>Take Photo</h2>
              </div>
              <div role="button" className="icon" onClick={props.toggle}>
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
            </header>
            <div className="video">
              <video autoPlay={true} ref={videoElem}></video>
            </div>
            <button onClick={captureSnapshot} className="capture">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M21.317 4.381H10.971L9.078 2.45c-.246-.251-.736-.457-1.089-.457H4.905c-.352 0-.837.211-1.078.468L1.201 5.272C.96 5.529.763 6.028.763 6.38v1.878l-.002.01v11.189a1.92 1.92 0 0 0 1.921 1.921h18.634a1.92 1.92 0 0 0 1.921-1.921V6.302a1.92 1.92 0 0 0-1.92-1.921zM12.076 18.51a5.577 5.577 0 1 1 0-11.154 5.577 5.577 0 0 1 0 11.154zm0-9.506a3.929 3.929 0 1 0 0 7.858 3.929 3.929 0 0 0 0-7.858z"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <header>
              <div>
                <h2>Drag Photo to adjust</h2>
              </div>
              <div>
                <div role="button" className="icon" onClick={goToCapture}>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      style={{ transform: "translateY(1px)" }}
                    >
                      <path
                        fill="currentColor"
                        d="M19.77 11.73c0 1.64-.5 2.95-1.48 3.89-1.38 1.32-3.26 1.41-3.75 1.41H9.01v-2.1h5.46c.05 0 1.47.04 2.38-.84.55-.53.82-1.32.82-2.37 0-1.27-.33-2.23-.99-2.84-.98-.92-2.43-.85-2.44-.85h-4.23v3.1L4 7.07 10.01 3v2.93h4.16c.03 0 2.29-.13 3.95 1.42 1.09 1.03 1.65 2.5 1.65 4.38z"
                      ></path>
                    </svg>
                  </i>
                </div>
                <div role="button" className="icon" onClick={props.toggle}>
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
              </div>
            </header>
            <div className = "image-adjust-holder">
              <div className="snapshot" ref={snapshot}></div>
              <EditPhoto></EditPhoto>
            </div>
            <button className="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30"
                height="30"
              >
                <path
                  fill="currentColor"
                  d="M9.9 21.25l-6.7-6.7-2.2 2.2 8.9 8.9L29 6.55l-2.2-2.2-16.9 16.9z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="take-photo-overlay" onClick={props.toggle}></div>
    </div>
  );
};

export default TakePhoto;
