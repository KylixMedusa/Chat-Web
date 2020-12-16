import React, { useEffect } from "react";
import "./Wallpaper.scss";

import { channelSectionHandler } from "../../App";

import {
  chatBackground,
  selectedChatBackground,
} from "../../Containers/Main-Chat/Main-Chat";
import { observer } from "mobx-react-lite";
import { observable } from "mobx";

const colorsLight = [
  { color: "var(--bg-color-4)", opacity: "0.06", pattern: "dark" },
  { color: "rgb(187, 228, 229)", opacity: "0.42", pattern: "light" },
  { color: "rgb(174, 216, 199)", opacity: "0.3", pattern: "light" },
  { color: "rgb(122, 203, 165)", opacity: "0.26", pattern: "light" },
  { color: "rgb(203, 218, 236)", opacity: "0.42", pattern: "light" },
  { color: "rgb(102, 210, 213)", opacity: "0.26", pattern: "light" },
  { color: "rgb(99, 189, 207)", opacity: "0.26", pattern: "light" },
  { color: "rgb(214, 208, 240)", opacity: "0.36", pattern: "light" },
  { color: "rgb(206, 206, 206)", opacity: "0.36", pattern: "light" },
  { color: "rgb(209, 218, 190)", opacity: "0.36", pattern: "light" },
  { color: "rgb(230, 225, 177)", opacity: "0.42", pattern: "light" },
  { color: "rgb(254, 239, 169)", opacity: "0.06", pattern: "dark" },
  { color: "rgb(254, 210, 151)", opacity: "0.42", pattern: "light" },
  { color: "rgb(253, 154, 155)", opacity: "0.26", pattern: "light" },
  { color: "rgb(253, 103, 105)", opacity: "0.26", pattern: "light" },
  { color: "rgb(251, 70, 104)", opacity: "0.26", pattern: "light" },
  { color: "rgb(146, 32, 64)", opacity: "0.17", pattern: "light" },
  { color: "rgb(220, 110, 79)", opacity: "0.2", pattern: "light" },
  { color: "rgb(10, 77, 82)", opacity: "0.13", pattern: "light" },
  { color: "rgb(81, 126, 126)", opacity: "0.13", pattern: "light" },
  { color: "rgb(49, 144, 187)", opacity: "0.13", pattern: "light" },
  { color: "rgb(53, 85, 138)", opacity: "0.1", pattern: "light" },
  { color: "rgb(85, 98, 111)", opacity: "0.1", pattern: "light" },
  { color: "rgb(29, 35, 38)", opacity: "0.1", pattern: "light" },
  { color: "rgb(48, 30, 52)", opacity: "0.1", pattern: "light" },
  { color: "rgb(236, 240, 241)", opacity: "0.06", pattern: "dark" },
  { color: "rgb(255, 254, 162)", opacity: "0.06", pattern: "dark" },
  { color: "rgb(231, 232, 210)", opacity: "0.06", pattern: "dark" },
];

const colorsDark = [
  { color: "var(--bg-color-4)", opacity: "0.06", pattern: "light" },
  { color: "rgb(15, 36, 36)", opacity: "0.06", pattern: "light" },
  { color: "rgb(18, 38, 31)", opacity: "0.06", pattern: "light" },
  { color: "rgb(17, 36, 28)", opacity: "0.06", pattern: "light" },
  { color: "rgb(17, 30, 39)", opacity: "0.06", pattern: "light" },
  { color: "rgb(15, 34, 36)", opacity: "0.06", pattern: "light" },
  { color: "rgb(14, 33, 37)", opacity: "0.06", pattern: "light" },
  { color: "rgb(31, 29, 37)", opacity: "0.06", pattern: "light" },
  { color: "rgb(33, 33, 33)", opacity: "0.06", pattern: "light" },
  { color: "rgb(31, 33, 28)", opacity: "0.06", pattern: "light" },
  { color: "rgb(35, 35, 27)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 36, 25)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 31, 23)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 23, 23)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 15, 16)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 10, 16)", opacity: "0.06", pattern: "light" },
  { color: "rgb(25, 5, 11)", opacity: "0.06", pattern: "light" },
  { color: "rgb(33, 16, 12)", opacity: "0.06", pattern: "light" },
  { color: "rgb(15, 12, 12)", opacity: "0.06", pattern: "light" },
  { color: "rgb(16, 25, 25)", opacity: "0.06", pattern: "light" },
  { color: "rgb(10, 29, 37)", opacity: "0.06", pattern: "light" },
  { color: "rgb(13, 21, 35)", opacity: "0.06", pattern: "light" },
  { color: "rgb(13, 15, 17)", opacity: "0.06", pattern: "light" },
  { color: "rgb(10, 12, 13)", opacity: "0.06", pattern: "light" },
  { color: "rgb(17, 11, 18)", opacity: "0.06", pattern: "light" },
  { color: "rgb(30, 31, 31)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 38, 24)", opacity: "0.06", pattern: "light" },
  { color: "rgb(35, 35, 31)", opacity: "0.06", pattern: "light" },
];

var colors: any[] = [...colorsLight];

export function handleWallpaper(theme: string) {
  if (theme === "dark") {
    colors = [...colorsDark];
    setColorDark();
  } else {
    colors = [...colorsLight];
    setColorLight();
  }
}

export function setInitWallpaper(theme: string, color: string) {
  if (theme === "dark") {
    colors = [...colorsDark];
    setColorDarkColor(color);
  } else {
    colors = [...colorsLight];
    setColorLightColor(color);
  }
}

function setColorDarkColor(color: string) {
  if (color !== "var(--bg-color-4)") {
    let index = colorsDark.findIndex((set) => {
      return set.color === color;
    });
    chatBackground.set(colorsDark[index]);
    selectedChatBackground.set(colorsDark[index]);
  } else {
    chatBackground.set({ ...colorsDark[0], color: "var(--bg-color-4)" });
    selectedChatBackground.set({
      ...colorsDark[0],
      color: "var(--bg-color-4)",
    });
  }
}
function setColorLightColor(color: string) {
  if (color !== "var(--bg-color-4)") {
    let index = colorsLight.findIndex((set) => {
      return set.color === color;
    });
    chatBackground.set(colorsLight[index]);
    selectedChatBackground.set(colorsLight[index]);
  } else {
    chatBackground.set({ ...colorsLight[0], color: "var(--bg-color-4)" });
    selectedChatBackground.set({
      ...colorsLight[0],
      color: "var(--bg-color-4)",
    });
  }
}

function setColorDark() {
  if (selectedChatBackground.get().color !== "var(--bg-color-4)") {
    let index = colorsLight.findIndex((set) => {
      return set.color === selectedChatBackground.get().color;
    });
    localStorage.setItem("color", colorsDark[index].color);
    chatBackground.set(colorsDark[index]);
    selectedChatBackground.set(colorsDark[index]);
  } else {
    localStorage.setItem("color", "var(--bg-color-4)");
    chatBackground.set({ ...colorsDark[0], color: "var(--bg-color-4)" });
    selectedChatBackground.set({
      ...colorsDark[0],
      color: "var(--bg-color-4)",
    });
  }
}
function setColorLight() {
  if (selectedChatBackground.get().color !== "var(--bg-color-4)") {
    let index = colorsDark.findIndex((set) => {
      return set.color === selectedChatBackground.get().color;
    });
    localStorage.setItem("color", colorsLight[index].color);
    chatBackground.set(colorsLight[index]);
    selectedChatBackground.set(colorsLight[index]);
  } else {
    localStorage.setItem("color", "var(--bg-color-4)");
    chatBackground.set({ ...colorsLight[0], color: "var(--bg-color-4)" });
    selectedChatBackground.set({
      ...colorsLight[0],
      color: "var(--bg-color-4)",
    });
  }
}

export const patternView = observable.box(true);

const Wallpaper: React.FC = () => {
  useEffect(() => {
    generateColors();
  }, [colors]);

  function updatePatternState() {
    localStorage.setItem("pattern", String(!patternView.get()));
    patternView.set(!patternView.get());
  }

  function generateColors() {
    let colorElems = [];
    for (let index in colors) {
      let color = colors[index].color;
      if (color === "var(--bg-color-4)") {
        if (selectedChatBackground.get().color === "var(--bg-color-4)") {
          colorElems.push(
            <span
              className="color-card default selected"
              title="Default"
              onMouseEnter={() => {
                chatBackground.set({...colors[0]});
              }}
              onMouseLeave={() => {
                chatBackground.set(selectedChatBackground.get());
              }}
              onClick={() => {
                localStorage.setItem("color", color);
                selectedChatBackground.set({...colors[0]});
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
                chatBackground.set({...colors[0]});
              }}
              onMouseLeave={() => {
                chatBackground.set(selectedChatBackground.get());
              }}
              onClick={() => {
                localStorage.setItem("color", color);
                selectedChatBackground.set({...colors[0]});
              }}
              key="default"
            >
              <span className="color-text">Default</span>
            </span>
          );
        }
      } else {
        if (color === selectedChatBackground.get().color) {
          colorElems.push(
            <span
              className="color-card selected"
              onMouseEnter={() => {
                chatBackground.set({...colors[index]});
              }}
              onMouseLeave={() => {
                chatBackground.set(selectedChatBackground.get());
              }}
              onClick={() => {
                localStorage.setItem("color", color);
                selectedChatBackground.set({...colors[index]});
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
                chatBackground.set({...colors[index]});
              }}
              onMouseLeave={() => {
                chatBackground.set(selectedChatBackground.get());
              }}
              onClick={() => {
                console.log(color);
                localStorage.setItem("color", color);
                selectedChatBackground.set({...colors[index]});
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
              checked={patternView.get()}
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
