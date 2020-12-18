import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import { ProfileContext, SnackbarContext } from "../../../store";
import { useStore } from "../../../store/hooks";
import "./EditPhoto.scss";

type Props = {
  image: HTMLImageElement;
  toggle:()=>void;
};

const EditPhoto: React.FC<Props> = (props) => {
  const overlay = useRef<HTMLCanvasElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const profileStore = useStore(ProfileContext);
  const snackbarStore = useStore(SnackbarContext);
  
  var ratio = 0;
  var isDragging = false,
    shiftX: any = 0,
    shiftY: any = 0,
    startX:any = 0,
    startY:any = 0;

  function drawImageScaled(img: any) {
    if (canvas.current) {
      let ctx = canvas.current.getContext("2d");
      if (ctx && img) {
        var hRatio = canvas.current.width / img.width;
        var vRatio = canvas.current.height / img.height;
        ratio = Math.min(hRatio, vRatio);
        if (ratio * img.width < 325 || ratio * img.height < 325) {
          ratio = 325 / Math.min(img.width, img.height) ;
        }
        var centerShift_x = (canvas.current.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.current.height - img.height * ratio) / 2;
        // console.log(centerShift_x,centerShift_y);
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    }
  }

  function createOverlay() {
    if (overlay.current) {
      overlay.current.width = 500;
      overlay.current.height = 375;
      let ctx = overlay.current.getContext("2d");
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

  function zoomOut() {
    let img = props.image;
    if (canvas.current) {
      let ctx = canvas.current.getContext("2d");
      if (ctx && img) {
        ratio -= 0.1;
        if (ratio * img.width < 325 || ratio * img.height < 325) {
          ratio = 325 / Math.min(img.width, img.height) ;
        }
        var centerShift_x = (canvas.current.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.current.height - img.height * ratio) / 2;
        if((centerShift_x + (shiftX/2) >= 87.5)||(centerShift_x + (shiftX/2) +(img.width * ratio) <= 411.5)){
          shiftX = 0;
        }
        if((centerShift_y + (shiftY/2) >= 25)||(centerShift_y + (shiftY/2)+(img.height * ratio) <= 350)){
          shiftY = 0;
        }
        // console.log(centerShift_x,centerShift_y,shiftX,shiftY);
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x + (shiftX * ratio),
          centerShift_y + (shiftY * ratio),
          img.width * ratio,
          img.height * ratio
        );
      }
    }
  }
  function zoomIn() {
    let img = props.image;
    if (canvas.current) {
      let ctx = canvas.current.getContext("2d");
      if (ctx && img) {
        ratio += 0.1;
        if (ratio * img.width < 325 || ratio * img.height < 325) {
          ratio = 325 / Math.min(img.width, img.height) ;
        }
        var centerShift_x = (canvas.current.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.current.height - img.height * ratio) / 2;
        if((centerShift_x + (shiftX/2) >= 87.5)||(centerShift_x + (shiftX/2) +(img.width * ratio) <= 411.5)){
          shiftX = 0;
        }
        if((centerShift_y + (shiftY/2) >= 25)||(centerShift_y + (shiftY/2)+(img.height * ratio) <= 350)){
          shiftY = 0;
        }
        // console.log(centerShift_x,centerShift_y);
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x + (shiftX * ratio),
          centerShift_y + (shiftY * ratio),
          img.width * ratio,
          img.height * ratio
        );
      }
    }
  }

  function handleMouseUp(e: any){
    // return if we're not dragging
    if (!isDragging) {
      return;
    }
    // tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();
    // the drag is over -- clear the isDragging flag
    isDragging = false;
  }

  function handleMouseDown(e: any) {
    // tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();
    // calculate the current mouse position
    if (canvas.current) {
      startX = e.clientX - canvas.current.getBoundingClientRect().left;
      startY = e.clientY - canvas.current.getBoundingClientRect().top;
    }

    isDragging = true;
  }
  function handleMouseMove(e: any) {
    // return if we're not dragging
    if (!isDragging) {
      return;
    }
    // tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();
    // calculate the current mouse position
    let mouseX, mouseY;
    if (canvas.current) {
      mouseX = e.clientX - canvas.current.getBoundingClientRect().left;
      mouseY = e.clientY - canvas.current.getBoundingClientRect().top;
      // how far has the mouse dragged from its previous mousemove position?
      var dx = (mouseX - startX);
      var dy = (mouseY - startY);
      startX = mouseX;
      startY = mouseY;
      let img = props.image;
      if (canvas.current) {
        let ctx = canvas.current.getContext("2d");
        if (ctx && img) {
          var centerShift_x = (canvas.current.width - img.width * ratio) / 2;
          var centerShift_y = (canvas.current.height - img.height * ratio) / 2;
          if(((centerShift_x + ((shiftX + dx)/2)) < 87.5)&&((centerShift_x + ((shiftX + dx)/2) +(img.width * ratio)) > 411.5)){
            shiftX+=dx;
          }
          if(((centerShift_y + ((shiftY + dy)/2)) < 25)&&((centerShift_y + ((shiftY + dy)/2)+(img.height * ratio)) > 350)){
            shiftY+=dy;
          }

          ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
          ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x + (shiftX/2),
            centerShift_y + (shiftY/2),
            img.width * ratio,
            img.height * ratio
          );
        }
      }
    }
  }

  useEffect(() => {
    createOverlay();
    if (canvas.current) {
      canvas.current.width = 500;
      canvas.current.height = 375;
    }
  }, []);
  useEffect(() => {
    drawImageScaled(props.image);
  }, [props.image]);

  function saveProfilePic(e:any){
    e.stopPropagation();
    if (canvas.current){
      let canvas2 = document.createElement("canvas");
      canvas2.width = 648;
      canvas2.height = 648;
      let ctx2 = canvas2.getContext("2d");
      let img = props.image;
      if(ctx2){
        var centerShift_x = (canvas2.width - img.width * ratio * 2) / 2;
        var centerShift_y = (canvas2.height - img.height * ratio * 2) / 2;
        ctx2.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x + (shiftX),
          centerShift_y + (shiftY),
          img.width * ratio * 2,
          img.height * ratio * 2
        );
        let src = canvas2.toDataURL();
        if(src){
          if(profileStore.avatar === "")
            snackbarStore.addSnackbar("Profile Picture Added");
          else  
            snackbarStore.addSnackbar("Profile Picture Updated");
          profileStore.updateAvatar(src);
        }
        props.toggle();

      }
    }
  }
  
  window.addEventListener("mouseup",handleMouseUp);
  // window.addEventListener("mousemove",handleMouseUp);

  return (
    <React.Fragment>
      <div
        onMouseDown={(e)=>handleMouseDown(e)}
        onMouseUp={(e)=>handleMouseUp(e)}
        onMouseMove={(e)=>handleMouseMove(e)}
        className="image-adjust-holder"
      >
        <canvas ref={canvas}
          onMouseLeave={e=>handleMouseUp(e)}
          onMouseOut={e=>handleMouseUp(e)}
        ></canvas>
        <canvas ref={overlay}></canvas>
        <div className="zoom-buttons-container">
          <div className="zoom-button" onClick={zoomIn}>
            <span>
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
            <span onClick={zoomOut}>
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
      </div>
      <button className="upload-photo-button" onClick={(e)=>saveProfilePic(e)}>
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
    </React.Fragment>
  );
};

export default observer(EditPhoto);
