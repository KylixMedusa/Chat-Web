import React, { useEffect, useRef } from "react";
import "./EditPhoto.scss";

const EditPhoto: React.FC = () => {
  const overlay = useRef<HTMLCanvasElement>(null);

  function createOverlay() {
    if (overlay.current) {
      overlay.current.width = 500;
      overlay.current.height = 375;
      var ctx = overlay.current.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(0, 0, 500, 375);
        ctx.translate(250, 187.5);

        // Create a circular clipping path
        ctx.beginPath();
        ctx.arc(0, 0, 162, 0, Math.PI * 2, true);
        ctx.clip();

        ctx.clearRect(-250, -187.5, 500, 375);
      }
    }
  }
  useEffect(() => {
    createOverlay();
  }, []);
  return (
    <React.Fragment>
      <canvas></canvas>
      <canvas ref={overlay}></canvas>
      <div className="zoom-buttons-container">
        <div className="zoom-button">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              width="28"
              height="28"
            >
              <path
                fill="currentColor"
                d="M19.619 14.803h-4.816v4.816h-1.605v-4.816H8.381v-1.605h4.816V8.381h1.605v4.816h4.816l.001 1.606z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="zoom-button">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              width="28"
              height="28"
            >
              <path
                fill="currentColor"
                d="M8.381 14.803v-1.605h11.237v1.605H8.381z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditPhoto;
