import { useColorScheme } from "react-native";

import { darkTheme, lightTheme } from "@styles/global-theme";

import { PreferredTheme } from "@features/preferences";

const useGlobalTheme = (theme: PreferredTheme) => {
  const colorScheme = useColorScheme() || "light";

  const preferredTheme = theme === "system" ? colorScheme : theme;

  return preferredTheme === "dark" ? darkTheme : lightTheme;
};

export default useGlobalTheme;
