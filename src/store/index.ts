import { createContext } from "react";
import ProfileStore from "./ProfileStore";
import SnackbarStore from "./SnackbarStore";
import ThemeStore from "./ThemeStore";

export const SnackbarContext = createContext<SnackbarStore | undefined>(undefined);
export const ProfileContext = createContext<ProfileStore | undefined>(undefined);
export const ThemeContext = createContext<ThemeStore | undefined>(undefined);
