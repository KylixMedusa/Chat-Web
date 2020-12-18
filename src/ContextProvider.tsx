import React from "react";
import * as Store from "./store";
import ProfileStore from "./store/ProfileStore";
import SnackbarStore from "./store/SnackbarStore";
import ThemeStore from "./store/ThemeStore";

const ContextProvider: React.FC<any> = (props) => {
  const snackbarStore = new SnackbarStore();
  const profileStore = new ProfileStore();
  const themeStore = new ThemeStore();

  return (
    <Store.SnackbarContext.Provider value={snackbarStore}>
      <Store.ProfileContext.Provider value={profileStore}>
        <Store.ThemeContext.Provider value={themeStore}>
        {props.children}
        </Store.ThemeContext.Provider>
      </Store.ProfileContext.Provider>
    </Store.SnackbarContext.Provider>
  );
};

export default ContextProvider;
