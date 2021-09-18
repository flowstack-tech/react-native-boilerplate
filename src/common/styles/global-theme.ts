import { DarkTheme, DefaultTheme } from "react-native-paper";

/* global ReactNativePaper */
declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      hint: string;
      statusBar: string;
    }
  }
}

export const lightTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00A699",
    accent: "#FF5A5F",
    background: "#F5F3F3",
    surface: "#FFFFFF",
    text: "#000000",
    error: "#B00020",
    hint: "#989898",
    statusBar: "#139389",
  },
};

export const darkTheme: ReactNativePaper.Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#42B6AA",
    accent: "#F27A80",
    background: "#121212",
    surface: "#121212",
    text: "#FFFFFF",
    error: "#CF6679",
    hint: "#989898",
    statusBar: "#121212",
  },
};
