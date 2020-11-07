import React from 'react';
import './ChannelsSection.scss'
import AllChats from '../../Components/All-Chats/All-Chats';
import Settings from '../../Components/Settings/Settings';
import Contacts from '../../Components/Contacts/Contacts';

const ChannelsSection:React.FC = ()=>{
    return(
        <div className="channels-section">
            {/* <Settings></Settings> */}
            {/* <AllChats></AllChats> */}
            <Contacts></Contacts>
        </div>
    );
}

export default ChannelsSection;