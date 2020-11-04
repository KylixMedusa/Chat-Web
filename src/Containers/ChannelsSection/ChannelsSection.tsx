import React from 'react';
import './ChannelsSection.scss'
import AllChats from '../../Components/All-Chats/All-Chats';
import Settings from '../../Components/Settings/Settings';

const ChannelsSection:React.FC = ()=>{
    return(
        <div className="channels-section">
            <Settings></Settings>
            {/* <AllChats></AllChats> */}
        </div>
    );
}

export default ChannelsSection;