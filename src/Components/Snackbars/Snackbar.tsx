import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import * as store from '../../store';
import { useStore } from '../../store';
import "./Snackbar.scss";

const Snackbar:React.FC = ()=>{
    const snackbarStore = useStore(store.SnackbarContext);

    function generateSnackbars(){
        let snackbars:any = [];
        console.log(snackbarStore.snackbars)
        for(var snackbar of snackbars){
            snackbars.push(
                <div className="snackbar">
                    {snackbar}
                </div>
            )
        }

        return snackbars;
    }

    useEffect(()=>{
        console.log(snackbarStore.snackbars)
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