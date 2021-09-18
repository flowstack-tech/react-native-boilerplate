# React Native Boilerplate
Custom Flow Stack template to quickly scaffold small and large scale React Native TypeScript projects supporting Android and iOS.

## Prerequisites

- Setup react-native. See [Environment Setup](https://reactnative.dev/docs/environment-setup)
  for more details

- Server running at port 8080

## Android

- Attach an emulator or a device using Android Studio

- Forward port 8080

```sh
adb reverse tcp:8080 tcp:8080
```

- Start app in debug mode

```sh
npx react-native run-android
```

## IOS

- Attach an emulator or a device using XCode

- Start app in debug mode

```sh
npx react-native run-ios
```

## Clear cache

If you face unresolved imports errors in bundler, try running:

```
rm -rf $TMPDIR/metro-* && rm -rf $TMPDIR/haste-* && watchman watch-del-all && npm cache clean --force && npm cache verify && rm -rf ios/build && rm -rf node_modules/ && npm i --ci
```

