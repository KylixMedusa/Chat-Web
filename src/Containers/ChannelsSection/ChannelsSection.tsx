import React from 'react';
import './ChannelsSection.scss'
import AllChats from '../../Components/All-Chats/All-Chats';
import Settings from '../../Components/Settings/Settings';
import Contacts from '../../Components/Contacts/Contacts';
import Profile from '../../Components/Profile/Profile';
import {observer} from "mobx-react-lite";

import { channelSectionHandler } from "../../App";
import Wallpaper from '../../Components/Wallpaper/Wallpaper';

const ChannelsSection:React.FC = ()=>{

    function checkSectionHandler(){
        switch(channelSectionHandler.get()){
            case 'Chats': 
                return <AllChats></AllChats>
            case 'Groups':
                return <AllChats></AllChats>
            case 'Contacts':
                return <Contacts></Contacts>
            case 'Settings':
                return <Settings></Settings>
            case 'Profile':
                return <Profile></Profile>
            case 'Wallpaper':
                return <Wallpaper></Wallpaper>
        }
    }

    return(
        <div className="channels-section">
            {
                checkSectionHandler()
            }
        </div>
    );
}

export default observer(ChannelsSection);