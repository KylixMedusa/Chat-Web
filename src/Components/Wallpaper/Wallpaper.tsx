import React, { useEffect } from "react";
import "./Wallpaper.scss";
import { channelSectionHandler } from "../../App";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/hooks";
import { SnackbarContext, ThemeContext } from "../../store";

const Wallpaper: React.FC = () => {
  const snackbarStore = useStore(SnackbarContext);
  const themeStore = useStore(ThemeContext);

  useEffect(() => {
    generateColors();
  }, [themeStore.colors]);

  function updatePatternState() {
    if(themeStore.patternView){
      snackbarStore.addSnackbar("Removed chat doodles");
    }
    else{
      snackbarStore.addSnackbar("Added chat doodles");
    }
    localStorage.setItem("pattern", String(!themeStore.patternView));
    themeStore.setPatternView(!themeStore.patternView);
  }

  function generateColors() {
    let colorElems = [];
    for (let index in themeStore.colors) {
      let color = themeStore.colors[index].color;
      if (color === "var(--bg-color-4)") {
        if (themeStore.selectedChatBackground.color === "var(--bg-color-4)") {
          colorElems.push(
            <span
              className="color-card default selected"
              title="Default"
              onMouseEnter={() => {
                themeStore.setChatBackground({...themeStore.colors[0]});
              }}
              onMouseLeave={() => {
                themeStore.setChatBackground(themeStore.selectedChatBackground);
              }}
              onClick={() => {
                snackbarStore.addSnackbar("Wallpaper updated");
                localStorage.setItem("color", color);
                themeStore.setSelectedChatBackground({...themeStore.colors[0]});
              }}
              key="default"
            >
              <span className="color-text">Default</span>
            </span>
          );
        } else {
          colorElems.push(
            <span
              className="color-card default"
              title="Default"
              onMouseEnter={() => {
                themeStore.setChatBackground({...themeStore.colors[0]});
              }}
              onMouseLeave={() => {
                themeStore.setChatBackground(themeStore.selectedChatBackground);
              }}
              onClick={() => {
                snackbarStore.addSnackbar("Wallpaper updated");
                localStorage.setItem("color", color);
                themeStore.setSelectedChatBackground({...themeStore.colors[0]});
              }}
              key="default"
            >
              <span className="color-text">Default</span>
            </span>
          );
        }
      } else {
        if (color === themeStore.selectedChatBackground.color) {
          colorElems.push(
            <span
              className="color-card selected"
              onMouseEnter={() => {
                themeStore.setChatBackground({...themeStore.colors[index]});
              }}
              onMouseLeave={() => {
                themeStore.setChatBackground(themeStore.selectedChatBackground);
              }}
              onClick={() => {
                snackbarStore.addSnackbar("Wallpaper updated");
                localStorage.setItem("color", color);
                themeStore.setSelectedChatBackground({...themeStore.colors[index]});
              }}
              style={{ backgroundColor: color }}
              key={color}
            ></span>
          );
        } else {
          colorElems.push(
            <span
              className="color-card"
              onMouseEnter={() => {
                themeStore.setChatBackground({...themeStore.colors[index]});
              }}
              onMouseLeave={() => {
                themeStore.setChatBackground(themeStore.selectedChatBackground);
              }}
              onClick={() => {
                snackbarStore.addSnackbar("Wallpaper updated");
                localStorage.setItem("color", color);
                themeStore.setSelectedChatBackground({...themeStore.colors[index]});
              }}
              style={{ backgroundColor: color }}
              key={color}
            ></span>
          );
        }
      }
    }
    return colorElems;
  }

  return (
    <div className="chat-wallpaper-section">
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
              xmlns="http://www.w3.org/200/svg"
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
          Chat Wallpaper
        </h2>
      </div>
      <div style={{ overflowY: "auto", display:"flex", alignItems:"center", flexDirection:"column",height: "100%", marginTop:"30px" }}>
        <div className="checkbox-card">
          <div className="checkbox-wrapper">
            <input
              className="input-checkbox"
              type="checkbox"
              id="desktop-alerts"
              onChange={() => updatePatternState()}
              checked={themeStore.patternView}
            />
            <div
              className="custom-checkbox-wrapper"
              onClick={() => updatePatternState()}
            >
              <div className="custom-checkbox">
                <div className="tick-mark"></div>
              </div>
            </div>
          </div>
          <label className="checkbox-label" htmlFor="desktop-alerts">
            Add doodles
          </label>
        </div>
        <div className="colors-holder">{generateColors()}</div>
      </div>
    </div>
  );
};

export default observer(Wallpaper);
