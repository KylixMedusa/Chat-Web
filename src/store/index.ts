import { createContext, useContext } from "react";
import SnackbarStore from "./SnackbarStore";

export const SnackbarContext = createContext<SnackbarStore | undefined>(undefined);


export const useStore = <T>(Context: React.Context<T | undefined>) => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useStore must be used within that StoreProvider');
    }
    return context;
};