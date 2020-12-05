import React, { useState } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import ChannelsSection from "./Containers/ChannelsSection/ChannelsSection";
import MainChat from "./Containers/Main-Chat/Main-Chat";
import SideSection from "./Containers/SideSection/SideSection";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

export const channelSectionHandler = observable.box("Chats");
export const dataTheme = observable.box("light");

export const checkSystemTheme = ()=>{
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if(userPrefersDark){
    dataTheme.set("dark");
  }
  else{
    dataTheme.set("light");
  }
  
}

const App: React.FC = () => {
  return (
    <div className="flex-container" data-theme={dataTheme.get()}>
      <Navbar></Navbar>
      <ChannelsSection></ChannelsSection>
      <div className="wrapper-side">
        <MainChat></MainChat>
        <SideSection></SideSection>
      </div>
    </div>
  );
};

export default observer(App);
