import React, { useEffect, useRef } from 'react';
import "./EditPhoto.scss"

const EditPhoto:React.FC = ()=>{
    const overlay = useRef<HTMLCanvasElement>(null);
    
    function createOverlay(){
        if(overlay.current){
            overlay.current.width = 500;
            overlay.current.height = 375;
            var ctx = overlay.current.getContext("2d");
            if(ctx){
                ctx.fillStyle = "rgba(0,0,0,0.6)";
                ctx.fillRect(0, 0, 500, 375);
                ctx.translate(250, 187.5);

                // Create a circular clipping path
                ctx.beginPath();
                ctx.arc(0, 0, 162, 0, Math.PI * 2, true);
                ctx.clip();
                
                ctx.clearRect(-250, -187.5, 500, 375);
            }
        }
    }
    useEffect(()=>{
        createOverlay();
    },[])
    return(
        <React.Fragment>
            <canvas>

            </canvas>
            <canvas
                ref={overlay}
            ></canvas>
        </React.Fragment>
    );
}

export default EditPhoto;