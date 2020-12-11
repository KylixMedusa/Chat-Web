import React, { useEffect, useRef } from "react";
import "./TakePhoto.scss";

type Props = {
  class: string;
  toggle: () => void;
};

const TakePhoto: React.FC<Props> = (props) => {
  const videoElem = useRef<HTMLVideoElement>(null);
  const canvas = document.createElement("canvas");
  canvas.height = 750;
  canvas.width = 1000;
  function captureSnapshot() {
    if (videoElem.current) {
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
      }
    }
  }

  function handleVideo(){
    if (props.class === "open") {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            if (videoElem.current) 
              videoElem.current.srcObject = stream;
          })
          .catch(function (err) {
            console.log("Something went wrong!", err);
          });
      }
    } 
    else if(props.class === "close") {
      if (videoElem.current) {
        videoElem.current.pause();
        let stream:any = videoElem.current.srcObject;
        stream.getTracks().forEach(function(track:any) {
          track.stop();
        });
        videoElem.current.srcObject = null;
      }
    }
  }

  useEffect(() => {
    handleVideo();
  }, [props.class]);

  return (
    <div className={`take-photo-container ${props.class}`}>
      <div className="take-photo-wrapper">
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
      <div className="take-photo-overlay" onClick={props.toggle}></div>
    </div>
  );
};

export default TakePhoto;
