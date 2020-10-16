import React from 'react';
import './ChannelsSection.scss'
import AllChats from '../../Components/All-Chats/All-Chats';

const ChannelsSection:React.FC = ()=>{
    return(
        <div className="channels-section">
            <AllChats></AllChats>
        </div>
    );
}

export default ChannelsSection;