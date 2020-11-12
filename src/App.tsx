import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ChannelsSection from './Containers/ChannelsSection/ChannelsSection';
import MainChat from './Containers/Main-Chat/Main-Chat';
import SideSection from './Containers/SideSection/SideSection';

const  App:React.FC = () => {
  const [channel,setChannel] = useState('Chats');

  return (
    <div className="flex-container">
      <Navbar
        channel = {channel}
        setChannel = {(val:string)=>setChannel(val)}
      ></Navbar>
      <ChannelsSection
        channel = {channel}
      ></ChannelsSection>
      <MainChat></MainChat>
      <SideSection></SideSection>
    </div>
  );
}

export default App;
