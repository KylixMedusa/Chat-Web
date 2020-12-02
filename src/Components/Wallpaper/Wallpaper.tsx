import React, { useState } from "react";
import "./Wallpaper.scss";

import { channelSectionHandler } from "../../App";

import {chatBackground,selectedChatBackground} from '../../Containers/Main-Chat/Main-Chat'
import { observer } from "mobx-react-lite";

const colors = [
  "default",
  "rgb(204, 235, 220)",
  "rgb(174, 216, 199)",
  "rgb(122, 203, 165)",
  "rgb(199, 233, 235)",
  "rgb(169, 219, 216)",
  "rgb(104, 213, 217)",
  "rgb(110, 195, 212)",
  "rgb(242, 218, 213)",
  "rgb(242, 213, 225)",
  "rgb(251, 202, 210)",
  "rgb(255, 167, 168)",
  "rgb(203, 218, 236)",
  "rgb(215, 211, 235)",
  "rgb(229, 192, 235)",
  "rgb(208, 222, 177)",
  "rgb(222, 224, 180)",
  "rgb(230, 223, 168)",
  "rgb(247, 233, 168)",
  "rgb(255, 209, 164)",
  "rgb(255, 138, 140)",
  "rgb(255, 89, 120)",
  "rgb(245, 96, 86)",
  "rgb(220, 110, 79)",
  "rgb(230, 227, 101)",
  "rgb(115, 199, 128)",
  "rgb(34, 147, 164)",
  "rgb(33, 158, 217)",
  "rgb(43, 90, 166)",
  "rgb(116, 103, 106)",
  "rgb(72, 50, 77)",
  "rgb(222, 227, 233)",
  "rgb(217, 218, 222)",
  "rgb(192, 193, 196)",
  "rgb(126, 144, 163)",
  "rgb(85, 98, 111)",
  "rgb(36, 54, 64)",
  "rgb(22, 33, 39)",
];

const Wallpaper: React.FC = () => {

  function generateColors() {
    let colorElems = [];
    for(let color of colors){
      if(color === "default"){
        if(selectedChatBackground.get() === "white"){
          colorElems.push(
            <span className="color-card default selected" title="Default"
            onMouseEnter = {()=>{chatBackground.set('white')}}
            onMouseLeave = {()=>{chatBackground.set(selectedChatBackground.get())}}
            onClick = {()=>{selectedChatBackground.set('white')}}
          >
            <span className="color-text">Default</span>
          </span>
          )
        }
        else{
          colorElems.push(
            <span className="color-card default" title="Default"
            onMouseEnter = {()=>{chatBackground.set('white')}}
            onMouseLeave = {()=>{chatBackground.set(selectedChatBackground.get())}}
            onClick = {()=>{selectedChatBackground.set('white')}}
          >
            <span className="color-text">Default</span>
          </span>
          )
        }
      }
      else{
        if(color === selectedChatBackground.get()){
          colorElems.push(
            <span 
              className="color-card selected" 
              onMouseEnter = {()=>{chatBackground.set(color)}}
              onMouseLeave = {()=>{chatBackground.set(selectedChatBackground.get())}}
              onClick = {()=>{selectedChatBackground.set(color)}}
              style={{backgroundColor:color}}
            ></span>
          )
        }
        else{
          colorElems.push(
            <span 
              className="color-card" 
              onMouseEnter = {()=>{chatBackground.set(color)}}
              onMouseLeave = {()=>{chatBackground.set(selectedChatBackground.get())}}
              onClick = {()=>{selectedChatBackground.set(color)}}
              style={{backgroundColor:color}}
            ></span>
          )
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
              xmlns="http://www.w3.org/2000/svg"
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
      <div style={{ overflowY: "auto", height: "100%" }}>
        <div className="colors-holder">
          {
            generateColors()
          }
        </div>
      </div>
    </div>
  );
};

export default observer(Wallpaper);
