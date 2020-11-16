import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ChannelsSection from './Containers/ChannelsSection/ChannelsSection';
import MainChat from './Containers/Main-Chat/Main-Chat';
import SideSection from './Containers/SideSection/SideSection';
import { observable } from "mobx";
import {observer} from "mobx-react-lite";

export const channelSectionHandler = observable.box('Chats')

const  App:React.FC = () => {
  return (
    <div className="flex-container">
      <Navbar></Navbar>
      <ChannelsSection></ChannelsSection>
      <MainChat></MainChat>
      <SideSection></SideSection>
    </div>
  );
}

export default observer(App);
