import { observable, action } from "mobx";

const colorsLight = [
  { color: "var(--bg-color-4)", opacity: "0.06", pattern: "dark" },
  { color: "rgb(187, 228, 229)", opacity: "0.42", pattern: "light" },
  { color: "rgb(174, 216, 199)", opacity: "0.3", pattern: "light" },
  { color: "rgb(122, 203, 165)", opacity: "0.26", pattern: "light" },
  { color: "rgb(203, 218, 236)", opacity: "0.42", pattern: "light" },
  { color: "rgb(102, 210, 213)", opacity: "0.26", pattern: "light" },
  { color: "rgb(99, 189, 207)", opacity: "0.26", pattern: "light" },
  { color: "rgb(214, 208, 240)", opacity: "0.36", pattern: "light" },
  { color: "rgb(206, 206, 206)", opacity: "0.36", pattern: "light" },
  { color: "rgb(209, 218, 190)", opacity: "0.36", pattern: "light" },
  { color: "rgb(230, 225, 177)", opacity: "0.42", pattern: "light" },
  { color: "rgb(254, 239, 169)", opacity: "0.06", pattern: "dark" },
  { color: "rgb(254, 210, 151)", opacity: "0.42", pattern: "light" },
  { color: "rgb(253, 154, 155)", opacity: "0.26", pattern: "light" },
  { color: "rgb(253, 103, 105)", opacity: "0.26", pattern: "light" },
  { color: "rgb(251, 70, 104)", opacity: "0.26", pattern: "light" },
  { color: "rgb(146, 32, 64)", opacity: "0.17", pattern: "light" },
  { color: "rgb(220, 110, 79)", opacity: "0.2", pattern: "light" },
  { color: "rgb(10, 77, 82)", opacity: "0.13", pattern: "light" },
  { color: "rgb(81, 126, 126)", opacity: "0.13", pattern: "light" },
  { color: "rgb(49, 144, 187)", opacity: "0.13", pattern: "light" },
  { color: "rgb(53, 85, 138)", opacity: "0.1", pattern: "light" },
  { color: "rgb(85, 98, 111)", opacity: "0.1", pattern: "light" },
  { color: "rgb(29, 35, 38)", opacity: "0.1", pattern: "light" },
  { color: "rgb(48, 30, 52)", opacity: "0.1", pattern: "light" },
  { color: "rgb(236, 240, 241)", opacity: "0.06", pattern: "dark" },
  { color: "rgb(255, 254, 162)", opacity: "0.06", pattern: "dark" },
  { color: "rgb(231, 232, 210)", opacity: "0.06", pattern: "dark" },
];

const colorsDark = [
  { color: "var(--bg-color-4)", opacity: "0.06", pattern: "light" },
  { color: "rgb(15, 36, 36)", opacity: "0.06", pattern: "light" },
  { color: "rgb(18, 38, 31)", opacity: "0.06", pattern: "light" },
  { color: "rgb(17, 36, 28)", opacity: "0.06", pattern: "light" },
  { color: "rgb(17, 30, 39)", opacity: "0.06", pattern: "light" },
  { color: "rgb(15, 34, 36)", opacity: "0.06", pattern: "light" },
  { color: "rgb(14, 33, 37)", opacity: "0.06", pattern: "light" },
  { color: "rgb(31, 29, 37)", opacity: "0.06", pattern: "light" },
  { color: "rgb(33, 33, 33)", opacity: "0.06", pattern: "light" },
  { color: "rgb(31, 33, 28)", opacity: "0.06", pattern: "light" },
  { color: "rgb(35, 35, 27)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 36, 25)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 31, 23)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 23, 23)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 15, 16)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 10, 16)", opacity: "0.06", pattern: "light" },
  { color: "rgb(25, 5, 11)", opacity: "0.06", pattern: "light" },
  { color: "rgb(33, 16, 12)", opacity: "0.06", pattern: "light" },
  { color: "rgb(15, 12, 12)", opacity: "0.06", pattern: "light" },
  { color: "rgb(16, 25, 25)", opacity: "0.06", pattern: "light" },
  { color: "rgb(10, 29, 37)", opacity: "0.06", pattern: "light" },
  { color: "rgb(13, 21, 35)", opacity: "0.06", pattern: "light" },
  { color: "rgb(13, 15, 17)", opacity: "0.06", pattern: "light" },
  { color: "rgb(10, 12, 13)", opacity: "0.06", pattern: "light" },
  { color: "rgb(17, 11, 18)", opacity: "0.06", pattern: "light" },
  { color: "rgb(30, 31, 31)", opacity: "0.06", pattern: "light" },
  { color: "rgb(38, 38, 24)", opacity: "0.06", pattern: "light" },
  { color: "rgb(35, 35, 31)", opacity: "0.06", pattern: "light" },
];

export default class ThemeStore {
  @observable dataTheme: string = "light";
  @observable selectedTheme: string = "light";
  @observable sideSectionClass: string = "close";
  @observable chatBackground: {
    color: string;
    opacity: string;
    pattern: string;
  } = { color: "var(--bg-color-4)", opacity: "0.06", pattern: "dark" };
  @observable selectedChatBackground: {
    color: string;
    opacity: string;
    pattern: string;
  } = { color: "var(--bg-color-4)", opacity: "0.06", pattern: "dark" };
  @observable colors: any[] = [...colorsLight];
  @observable patternView: boolean = true;

  constructor() {
    this.dataTheme = "light";
    this.selectedTheme = "light";
    this.sideSectionClass = "close";
    this.chatBackground = {
      color: "var(--bg-color-4)",
      opacity: "0.06",
      pattern: "dark",
    };
    this.selectedChatBackground = {
      color: "var(--bg-color-4)",
      opacity: "0.06",
      pattern: "dark",
    };
    this.colors = [...colorsLight];
    this.patternView = true;
    this.checkTheme();
  }

  @action.bound
  checkSystemTheme() {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userPrefersDark) {
      this.dataTheme = "dark";
    } else {
      this.dataTheme = "light";
    }
  }

  @action.bound
  checkTheme() {
    let theme = localStorage.getItem("theme");
    if (theme) {
      this.selectedTheme = theme;
      this.dataTheme = theme;
      if (theme === "system default") this.checkSystemTheme();
    } else {
      this.dataTheme = "light";
      this.selectedTheme = "light";
      localStorage.setItem("theme", "light");
    }
    let color = localStorage.getItem("color");
    if (color) {
      this.setInitWallpaper(this.dataTheme, color);
    } else {
      this.handleWallpaper(this.dataTheme);
    }
    let pattern = localStorage.getItem("pattern");
    if (pattern) {
      if (pattern === "false") {
        this.patternView = false;
      } else {
        this.patternView = true;
      }
    } else {
      localStorage.setItem("pattern", "true");
    }
  }

  @action.bound
  handleWallpaper(theme: string) {
    if (theme === "dark") {
      this.colors = [...colorsDark];
      this.setColorDark();
    } else {
      this.colors = [...colorsLight];
      this.setColorLight();
    }
  }

  @action.bound
  setInitWallpaper(theme: string, color: string) {
    if (theme === "dark") {
      this.colors = [...colorsDark];
      this.setColorDarkColor(color);
    } else {
      this.colors = [...colorsLight];
      this.setColorLightColor(color);
    }
  }

  @action.bound
  setColorDarkColor(color: string) {
    if (color !== "var(--bg-color-4)") {
      let index = colorsDark.findIndex((set) => {
        return set.color === color;
      });
      this.chatBackground = { ...colorsDark[index] };
      this.selectedChatBackground = { ...colorsDark[index] };
    } else {
      this.chatBackground = { ...colorsDark[0], color: "var(--bg-color-4)" };
      this.selectedChatBackground = {
        ...colorsDark[0],
        color: "var(--bg-color-4)",
      };
    }
  }

  @action.bound
  setColorLightColor(color: string) {
    if (color !== "var(--bg-color-4)") {
      let index = colorsLight.findIndex((set) => {
        return set.color === color;
      });
      this.chatBackground = { ...colorsLight[index] };
      this.selectedChatBackground = { ...colorsLight[index] };
    } else {
      this.chatBackground = { ...colorsLight[0], color: "var(--bg-color-4)" };
      this.selectedChatBackground = {
        ...colorsLight[0],
        color: "var(--bg-color-4)",
      };
    }
  }

  @action.bound
  setColorDark() {
    if (this.selectedChatBackground.color !== "var(--bg-color-4)") {
      let index = colorsLight.findIndex((set) => {
        return set.color === this.selectedChatBackground.color;
      });
      localStorage.setItem("color", colorsDark[index].color);
      this.chatBackground = { ...colorsDark[index] };
      this.selectedChatBackground = { ...colorsDark[index] };
    } else {
      localStorage.setItem("color", "var(--bg-color-4)");
      this.chatBackground = { ...colorsDark[0], color: "var(--bg-color-4)" };
      this.selectedChatBackground = {
        ...colorsDark[0],
        color: "var(--bg-color-4)",
      };
    }
  }
  @action.bound
  setColorLight() {
    if (this.selectedChatBackground.color !== "var(--bg-color-4)") {
      let index = colorsDark.findIndex((set) => {
        return set.color === this.selectedChatBackground.color;
      });
      localStorage.setItem("color", colorsLight[index].color);
      this.chatBackground = { ...colorsLight[index] };
      this.selectedChatBackground = { ...colorsLight[index] };
    } else {
      localStorage.setItem("color", "var(--bg-color-4)");
      this.chatBackground = { ...colorsLight[0], color: "var(--bg-color-4)" };
      this.selectedChatBackground = {
        ...colorsLight[0],
        color: "var(--bg-color-4)",
      };
    }
  }
  @action
  setSectionClass(val: string) {
    this.sideSectionClass = val;
  }
  @action
  setPatternView(val: boolean) {
    this.patternView = val;
  }
  @action
  setChatBackground(val: { color: string; opacity: string; pattern: string }) {
    this.chatBackground = val;
  }
  @action
  setSelectedChatBackground(val: {
    color: string;
    opacity: string;
    pattern: string;
  }) {
    this.selectedChatBackground = val;
  }
  @action
  setDataTheme(val: string) {
    this.dataTheme = val;
  }
  @action
  setSelectedTheme(val: string) {
    this.selectedTheme = val;
  }
}
