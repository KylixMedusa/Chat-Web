import React from "react";
import "./SideSection.scss";

const SideSection: React.FC = () => {
  return (
    <div className="side-section">
      <div className="top-bar">
        <div role="button" className="icon">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"
              ></path>
            </svg>
          </i>
        </div>
        <p>Contact Info</p>
      </div>
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{textAlign:"center", borderBottom:'1px solid #dee2e6', padding: '5% 0'}}>
          <div className="main-image">
            <img src="https://www.aayushagarwal.me/assets/img/profilepic.jpg" alt=""/>
          </div>
          <h2 style={{marginBottom:'5px'}}>Aayush Agarwal</h2>
          <p style={{margin:0}}>Online</p>
        </div>
        <div className="temp">
          <div className="card">
            <small className="card-title">
              About and Phone Number
            </small>
            <p>Can't talk chat only</p>
            <div className="break"></div>
            <p>+919679883985</p>
          </div>
          <div className="card">
            <p style = {{color:'black', margin:'10px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style = {{marginRight:'10px', verticalAlign:'middle'}}><path fill="currentColor" d="M12 2.8c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7 9.7-4.3 9.7-9.7-4.4-9.7-9.7-9.7zm-7.3 9.7c0-4 3.3-7.3 7.3-7.3 1.6 0 3.1.5 4.3 1.4L6.1 16.8c-.9-1.2-1.4-2.7-1.4-4.3zm7.3 7.3c-1.6 0-3-.5-4.2-1.4L17.9 8.3c.9 1.2 1.4 2.6 1.4 4.2 0 4-3.3 7.3-7.3 7.3z"></path></svg>              Block
            </p>
          </div>
          <div className="card">
            <p style = {{color:'red', margin:'10px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style = {{marginRight:'10px', verticalAlign:'middle'}}><path fill="red" d="M14.091 4.2H6.318c-.691 0-1.295.432-1.555 1.036l-2.591 6.132c-.086.173-.172.346-.172.605V13.7c0 .95.777 1.727 1.727 1.727h5.441L8.305 19.4v.259c0 .345.173.691.345.95l.95.864 5.7-5.7c.345-.345.518-.777.518-1.209V5.927c0-.95-.777-1.727-1.727-1.727zm3.454 0v10.364H21V4.2h-3.455z" id="thumb-down"></path></svg>
                Report Contact</p>
          </div>
          <div className="card">
            <p style = {{color:'red', margin:'10px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style = {{marginRight:'10px', verticalAlign:'middle'}}><path fill="red" d="M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6H6v12zM19 3h-3.5l-1-1h-5l-1 1H5v2h14V3z"></path></svg>
              Delete Chat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSection;
