/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";

import ThemedApp from "@src/application/themed-app";
import { stores } from "@src/features";

import { StoreProvider } from "@contexts/store";

import Store from "./store";

const App = () => {
  return (
    <StoreProvider value={Store.store}>
      <ThemedApp />
    </StoreProvider>
  );
};

Store.createStore(stores);

export default App;
