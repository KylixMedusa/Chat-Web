import React, { CSSProperties } from 'react';
import './ListMenu.scss';

type Props = {
    class:string;
    style:CSSProperties;
    toggle:any;
}

const ListMenu: React.FC<Props> = (props) => {

    return (
        <React.Fragment>
            <div className={`list-menu ${props.class}`} style={props.style}>
                {props.children}
            </div>
            <div className="overlay" onClick={props.toggle}></div>
        </React.Fragment>
    )
}

export default ListMenu;