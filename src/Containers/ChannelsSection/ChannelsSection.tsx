import React from 'react';
import './ChannelsSection.scss'
import AllChats from '../../Components/All-Chats/All-Chats';
import Settings from '../../Components/Settings/Settings';
import Contacts from '../../Components/Contacts/Contacts';
import Profile from '../../Components/Profile/Profile';

type Props = {
    channel:string
}

const ChannelsSection:React.FC<Props> = (props)=>{

    function checkSectionHandler(){
        switch(props.channel){
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

export default ChannelsSection;