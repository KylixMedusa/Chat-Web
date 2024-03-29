import React from 'react';
import './ChannelsSection.scss'
import AllChats from '../../Components/All-Chats/All-Chats';
import Settings from '../../Components/Settings/Settings';
import Contacts from '../../Components/Contacts/Contacts';
import Profile from '../../Components/Profile/Profile';
import Wallpaper from '../../Components/Wallpaper/Wallpaper';
import Notifications from '../../Components/Notifications/Notifications';
import Blocked from '../../Components/Blocked/Blocked';
import {observer} from "mobx-react-lite";

import { channelSectionHandler } from "../../App";

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
            case 'Notifications':
                return <Notifications></Notifications> 
            case 'Blocked':
                return <Blocked></Blocked>
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