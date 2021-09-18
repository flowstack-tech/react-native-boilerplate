import { Linking } from "react-native";

export const safeOpenUrl = async (url: string) => {
  if (await Linking.canOpenURL(url)) {
    return await Linking.openURL(url);
  }
};
