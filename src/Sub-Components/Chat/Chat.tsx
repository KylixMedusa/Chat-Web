import React, { useEffect, useState } from 'react';
import ListMenu from '../../Components/ListMenu/ListMenu';
import './Chat.scss';

var parse = require('html-react-parser')

type Props = {
    text:string,
    author:number,
    time:string
}

const Chat: React.FC<Props> = (props) => {
    const [menuClass,setMenuClass] = useState("");
    const [dir,setDir] = useState('right');
    const menuToggleHandler = ()=>{
        if(menuClass === `open-top-${dir === 'left'?'left':'right'}`){
          setMenuClass(`close-top-${dir === 'left'?'left':'right'}`);
        }
        else{
          setMenuClass(`open-top-${dir === 'left'?'left':'right'}`);
        }
    }

    return (
        <React.Fragment>
        {
            dir === 'left'?
            <div className="message-left">
                <span className="message-text">{parse(props.text)}
                    <span className="message-time">{props.time}</span>
                </span>
                <span className="icon-menu">
                    <span role="button" className={`icon ${menuClass === 'open-top-right'?'active':''}`} onClick={menuToggleHandler}>
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
                    <ListMenu
                        class={menuClass}
                        style={{top:'120%',left:'50%'}}
                        toggle={menuToggleHandler}
                    >
                        <li>Copy</li>
                        <li>Reply</li>
                        <li>Forward Message</li>
                        <li>Star Message</li>
                        <li>Delete Message</li>
                    </ListMenu>
                </span>
            </div>:
            <div className="message-right">
                <span className="icon-menu">
                    <span role="button" className={`icon ${menuClass === 'open-top-right'?'active':''}`} onClick={menuToggleHandler}>
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
                    <ListMenu
                        class={menuClass}
                        style={{top:'120%',right:'50%'}}
                        toggle={menuToggleHandler}
                    >
                        <li>Copy</li>
                        <li>Reply</li>
                        <li>Forward Message</li>
                        <li>Star Message</li>
                        <li>Delete Message</li>
                    </ListMenu>
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