import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import ChannelsSection from "./Containers/ChannelsSection/ChannelsSection";
import MainChat from "./Containers/Main-Chat/Main-Chat";
import SideSection from "./Containers/SideSection/SideSection";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import Snackbar from "./Components/Snackbars/Snackbar";
import { ThemeContext } from "./store";
import { useStore } from "./store/hooks";

export const channelSectionHandler = observable.box("Chats");

const App: React.FC = () => {
  const themeStore = useStore(ThemeContext);

  return (
    <div className="flex-container" data-theme={themeStore.dataTheme}>
      <div className="top-flex-bar"></div>
      <div className="flex-wrapper">
        <Snackbar></Snackbar>
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
