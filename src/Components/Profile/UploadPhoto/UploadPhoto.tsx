import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import EditPhoto from "../EditPhoto/EditPhoto";
import "./UploadPhoto.scss";

type Props = {
  class: string;
  toggle: () => void;
  image: HTMLImageElement;
};

const UploadPhoto: React.FC<Props> = (props) => {

  const [image,setImage] = useState(document.createElement('img'));

  const uploadPhotoHandler = () => {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", ".jpg, .jpeg, .png, .svg, .gif, .bmp");
    input.click();
    input.addEventListener("change", (e: any) => {
      var oFReader = new FileReader();
      oFReader.readAsDataURL(e.target.files[0]);

      oFReader.onload = function (oFREvent) {
        if (oFREvent.target?.result) {
          let result: any = oFREvent.target.result;
          var img = new Image();
          img.src = result;
          img.onload = function (e:any) {
            var height = e.target.height;
            var width = e.target.width;
            if (height < 324 || width < 324) {
              alert("Height and Width must not be less than 324px.");
            }
            else{
              setImage(e.target);
            }
          };
        }
      };
    });
  };

  useEffect(() => {
    setImage(props.image);
  }, [props.image]);
  return (
    <div className={`upload-photo-container ${props.class}`}>
      <div className="upload-photo-wrapper">
        <header>
          <div>
            <h2>Drag Photo to adjust</h2>
          </div>
          <div>
            <div role="button" className="icon" onClick={uploadPhotoHandler}>
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
        <EditPhoto
          image = {image}
          toggle={props.toggle}
        ></EditPhoto>
      </div>
      <div className="upload-photo-overlay"></div>
    </div>
  );
};

export default observer(UploadPhoto);
