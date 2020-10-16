import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ChannelsSection from './Containers/ChannelsSection/ChannelsSection';
import MainChat from './Containers/Main-Chat/Main-Chat';
import SideSection from './Containers/SideSection/SideSection';

function App() {
  return (
    <div className="flex-container">
      <Navbar></Navbar>
      <ChannelsSection></ChannelsSection>
      <MainChat></MainChat>
      <SideSection></SideSection>
    </div>
  );
}

export default App;
