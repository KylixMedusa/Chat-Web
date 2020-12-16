import React from "react";
import * as Store from "./store";
import SnackbarStore from "./store/SnackbarStore";

const ContextProvider: React.FC<any> = (props) => {
  const snackbarStore = new SnackbarStore();

  return (
    <Store.SnackbarContext.Provider value={snackbarStore}>
      {props.children}
    </Store.SnackbarContext.Provider>
  );
};

export default ContextProvider;
