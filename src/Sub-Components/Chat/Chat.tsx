import React from 'react';
import './Chat.scss';

var parse = require('html-react-parser')

type Props = {
    text:string,
    author:number,
    time:string
}

const Chat: React.FC<Props> = (props) => {
    return (
        <div className="message-right">
            <span className="message-text">{parse(props.text)}
                <span className="message-time">{props.time}</span>
            </span>
        </div>
    )
}

export default Chat;