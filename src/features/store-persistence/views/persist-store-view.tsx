import React, { useCallback, useEffect, useRef, useState } from "react";
import { AppState } from "react-native";

import { typedInjector } from "@common/store";

import LoadingView, { LoadingViewProps } from "./loading-view";

export type PersistStoreProps = LoadingViewProps;

const PersistStore = typedInjector<PersistStoreProps>().injectFeatureStores("persistenceStore")(
  ({ persistenceStore: store, loadingView, children }) => {
    const [first, setFirst] = useState(true);
    const appState = useRef(AppState.currentState);

    const handleAppStateChange = useCallback(
      (nextState) => {
        if (nextState === appState.current) {
          return;
        }
        if (nextState === "active") {
          store.importStores();
        } else if (appState.current === "active") {
          store.exportStores();
        }
        appState.current = nextState;
      },
      [store],
    );

    useEffect(() => {
      if (first) {
        store.importStores();
        setFirst(false);
      }
    }, [first, store]);

    useEffect(() => {
      AppState.addEventListener("change", handleAppStateChange);
      return () => {
        AppState.removeEventListener("change", handleAppStateChange);
      };
    }, [handleAppStateChange, store]);

    return (
      <LoadingView loadingView={loadingView} first={first}>
        {children}
      </LoadingView>
    );
  },
);

export default PersistStore;
