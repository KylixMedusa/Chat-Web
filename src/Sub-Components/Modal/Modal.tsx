import React from 'react';
import './Modal.scss';


type Props = {
    class:string;
    toggle:any;
}


const Modal:React.FC<Props> = (props)=>{
    return (
        <div className={`modal ${props.class}`}>
            <div className="modal-wrapper">
                {props.children}
            </div>
            <div className="modal-overlay" onClick={props.toggle}></div>
        </div>
    );
}

export default Modal;