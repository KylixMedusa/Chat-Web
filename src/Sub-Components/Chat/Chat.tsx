import React, { useEffect, useState } from 'react';
import ListMenu from '../ListMenu/ListMenu';
import './Chat.scss';

var parse = require('html-react-parser')

type Props = {
    text:string,
    author:number,
    time:string,
    dir:string,
    menuClass:string,
    toggle:()=>void,
    setPos:any
}

const Chat: React.FC<Props> = (props) => {

    return (
        <React.Fragment>
        {
            props.dir === 'left'?
            <div className="message-left">
                <span className="message-text">{parse(props.text)}
                    <span className="message-time">{props.time}</span>
                </span>
                <span className="icon-menu">
                    <span role="button" className={`icon ${props.menuClass === 'open-top-right'?'active':''}`} onClick={props.toggle}>
                        <i>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            >
                            <path
                                fill="currentColor"
                                d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                            ></path>
                            </svg>
                        </i>
                    </span>
                </span>
            </div>:
            <div className="message-right">
                <span className="icon-menu">
                    <span role="button" className={`icon ${props.menuClass === 'open-top-right'?'active':''}`} onClick={props.toggle}>
                        <i>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            >
                            <path
                                fill="currentColor"
                                d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                            ></path>
                            </svg>
                        </i>
                    </span>
                </span>
                <span className="message-text">{parse(props.text)}
                    <span className="message-time">{props.time}</span>
                </span>
            </div>
        }
        </React.Fragment>
        
    )
}

export default Chat;