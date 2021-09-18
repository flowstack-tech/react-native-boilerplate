import { NativeModules, Platform } from "react-native";

export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";

export const majorVersionIOS = parseInt(String(Platform.Version), 10);
export const isAutoFillSupported = isIOS && majorVersionIOS >= 12;

export const getLocale = (): string => {
  if (isIOS) {
    return (
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] ||
      "unknown"
    );
  } else if (isAndroid) {
    return NativeModules.I18nManager.localeIdentifier || "unknown";
  }
  return "unknown";
};
