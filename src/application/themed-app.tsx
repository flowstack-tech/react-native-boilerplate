import React from "react";
import { SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, Surface, Text } from "react-native-paper";

import { AppLanguage } from "@common/language";
import { inject } from "@common/store/inject";
import useGlobalTheme from "@hooks/global-theme";

import { PersistStore } from "@features/store-persistence";

const ThemedApp = inject((root) => ({
  theme: root.preferencesStore.theme,
}))(({ theme }) => {
  const globalTheme = useGlobalTheme(theme);

  return (
    <PaperProvider theme={globalTheme}>
      {/* Current color schemes require light content for both light and dark themes. Change this if the colors are changed */}
      <PersistStore
        loadingView={
          // TODO: Use Splash screen
          <SafeAreaView>
            <Surface>
              <Text>Loading store...</Text>
            </Surface>
          </SafeAreaView>
        }>
        <NavigationContainer>
          <Text>{AppLanguage.t("home.test.hello")}</Text>
        </NavigationContainer>
      </PersistStore>
    </PaperProvider>
  );
});

export default ThemedApp;
