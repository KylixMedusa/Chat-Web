import React from 'react';
import './App.css';
import AllChats from './Components/All-Chats/All-Chats';
import Navbar from './Components/Navbar/Navbar';
import MainChat from './Containers/Main-Chat/Main-Chat';

function App() {
  return (
    <div className="flex-container">
      <Navbar></Navbar>
      <AllChats></AllChats>
      <MainChat></MainChat>
    </div>
  );
}

export default App;
