import React, { CSSProperties } from 'react';
import './Modal.scss';


type Props = {
    class:string;
    toggle:any;
    style?:CSSProperties;
}


const Modal:React.FC<Props> = (props)=>{
    return (
        <div className={`modal ${props.class}`}>
            <div className="modal-wrapper" style={props.style?props.style:{}}>
                {props.children}
            </div>
            <div className="modal-overlay" onClick={props.toggle}></div>
        </div>
    );
}

export default Modal;