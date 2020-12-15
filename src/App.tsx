import React, { useState } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import ChannelsSection from "./Containers/ChannelsSection/ChannelsSection";
import MainChat, { chatBackground } from "./Containers/Main-Chat/Main-Chat";
import SideSection from "./Containers/SideSection/SideSection";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import { handleWallpaper, patternView, setInitWallpaper } from "./Components/Wallpaper/Wallpaper";

export const channelSectionHandler = observable.box("Chats");
export const profileData = observable.box({
  avatar: "https://cliko.in/assets/team/aayush.jpg",
  name: "Aayush Agarwal",
  status: "Can't talk chat only",
  phone: "+91 9679883985",
});

export const checkSystemTheme = () => {
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (userPrefersDark) {
    dataTheme.set("dark");
  } else {
    dataTheme.set("light");
  }
};

function checkTheme() {
  let theme = localStorage.getItem("theme");
  if (theme) {
    selectedTheme.set(theme);
    dataTheme.set(theme);
    if (theme === "system default") checkSystemTheme();
  } else {
    dataTheme.set("light");
    selectedTheme.set("light");
    localStorage.setItem("theme", "light");
  }
  let color = localStorage.getItem("color");
  if(color){
    setInitWallpaper(dataTheme.get(),color);
  }
  else{
    handleWallpaper(dataTheme.get());
  }
  let pattern = localStorage.getItem("pattern");
  if(pattern){
    if(pattern === "false"){
      patternView.set(false);
    }
    else{
      patternView.set(true);
    }
  }
  else{
    localStorage.setItem("pattern", "true");
  }
}
export const dataTheme = observable.box("light");
export const selectedTheme = observable.box("light");
checkTheme();

const App: React.FC = () => {
  return (
    <div className="flex-container" data-theme={dataTheme.get()}>
      <div className="top-flex-bar"></div>
      <div className="flex-wrapper">
        <Navbar></Navbar>
        <ChannelsSection></ChannelsSection>
        <div className="wrapper-side">
          <MainChat></MainChat>
          <SideSection></SideSection>
        </div>
      </div>
    </div>
  );
};

export default observer(App);
