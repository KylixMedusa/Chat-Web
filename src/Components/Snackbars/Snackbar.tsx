import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { SnackbarContext } from '../../store';
import { useStore } from '../../store/hooks';
import "./Snackbar.scss";

const Snackbar:React.FC = ()=>{
    const snackbarStore = useStore(SnackbarContext);

    function generateSnackbars(){
        let snackbars:any = [];
        for(let index in snackbarStore.snackbars){
            let snackbar = snackbarStore.snackbars[index];
            snackbars.push(
                <div className={`snackbar ${snackbar.class}`} key={index}>
                    {snackbar.message}
                </div>
            )
        }

        return snackbars;
    }

    useEffect(()=>{
        generateSnackbars()
    },[snackbarStore.snackbars])

    return (
        <div className="snackbar-wrapper">
            {
                generateSnackbars()
            }
        </div>
    )
}

export default observer(Snackbar);