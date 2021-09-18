import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, useWindowDimensions } from "react-native";

import { Surface, useTheme } from "react-native-paper";

import { isIOS } from "@misc/device";

export type ScreenProps = {
  noHeader?: boolean;
};

const Screen: React.FC<ScreenProps> = ({ noHeader = false, children }) => {
  const { width, height } = useWindowDimensions();
  const { colors, dark } = useTheme();

  if (noHeader) {
    return (
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle={dark ? "light-content" : "dark-content"} backgroundColor={colors.background} animated />
        <Surface style={styles.surface}>{children}</Surface>
      </SafeAreaView>
    );
  }

  return (
    <Surface style={[styles.surface, styles.root, { width, height }]}>
      <StatusBar
        barStyle={dark || !isIOS ? "light-content" : "dark-content"}
        backgroundColor={colors.statusBar}
        animated
      />
      {children}
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    width: "100%",
    height: "100%",
    elevation: 0,
  },
  root: {
    flex: 1,
  },
});

export default Screen;
