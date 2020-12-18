import { observer } from "mobx-react-lite";
import React from "react";
import { ProfileContext } from "../../../store";
import { useStore } from "../../../store/hooks";
import './ViewPhoto.scss';

type Props = {
  class:string;
  toggle:()=>void;
}

const ViewPhoto: React.FC<Props> = (props) => {
  const profileStore = useStore(ProfileContext);

  return (
    <div className={`view-photo-container ${props.class}`}>
      <header>
        <div>
          <div className="image">
            <img src={profileStore.avatar} alt="" />
          </div>
          <p>{profileStore.phone}</p>
        </div>
        <div role="button" className="icon" onClick={props.toggle}>
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
      </header>
      <div className="image-holder">
        <img src={profileStore.avatar} alt="" />
      </div>
    </div>
  );
};

export default observer(ViewPhoto);
