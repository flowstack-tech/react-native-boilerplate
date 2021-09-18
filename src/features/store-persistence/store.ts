import AsyncStorage from "@react-native-async-storage/async-storage";
import { action, entries, makeObservable, observable, toJS } from "mobx";

import Store, { StoreState } from "@src/application/store";

import { BaseStore } from "@common/store";
import Loadable from "@misc/loadable";

import { getStoreKey } from "./misc";

export class PersistenceStore implements BaseStore<void> {
  shouldPersist = false;
  importing = new Loadable();
  exporting = new Loadable();

  constructor() {
    makeObservable(this, {
      importing: observable,
      exporting: observable,
      importStores: action.bound,
      exportStores: action.bound,
      clearSession: action.bound,
      import: action.bound,
      export: action.bound,
    });
  }

  importStores(force = false) {
    if (!force && !this.importing.mustLoad) {
      return;
    }
    const stores = Store.store.stores;
    this.importing.setLoading();
    const persistentStores = toJS(
      entries(stores)
        .filter(([_, store]) => store.shouldPersist)
        .map(([name]) => [getStoreKey(name), name]),
    );

    // Generate reverse key-name mapping for easier reference
    const keyToName = new Map<string, keyof StoreState>(persistentStores as [string, keyof StoreState][]);

    AsyncStorage.multiGet(persistentStores.map(([key]) => key))
      .then((data) => {
        const storeData = data
          .filter((value): value is [string, string] => value[1] !== null)
          .map(([key, value]) => [keyToName.get(key), JSON.parse(value)] as [keyof StoreState, any]);

        storeData.forEach(([name, value]) => stores[name].import(value));
      })
      .finally(this.importing.setLoaded);
  }

  exportStores() {
    if (this.exporting.loading) {
      return;
    }
    this.exporting.setLoading();

    const data = toJS(
      entries(Store.store.stores)
        .filter(([_, store]) => store.shouldPersist)
        .map(([name, store]) => [getStoreKey(name), JSON.stringify(store.export())]),
    );

    AsyncStorage.multiSet(data, (errors) => {
      if (errors) {
        console.log("Failed to write to storage:", errors);
      }
    }).finally(this.exporting.setLoaded);
  }

  clearSession() {}

  export() {}

  import(_: void) {}
}

export default () => new PersistenceStore();
