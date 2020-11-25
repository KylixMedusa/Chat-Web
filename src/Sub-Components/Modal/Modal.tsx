import React from 'react';
import './Modal.scss';


type Props = {
    class:string;
    toggle:any;
}


const Modal:React.FC<Props> = (props)=>{
    return (
        <React.Fragment>
            <div className={`modal ${props.class}`}>
                {props.children}
            </div>
            <div className="overlay" onClick={props.toggle}></div>
        </React.Fragment>
    );
}

export default Modal;