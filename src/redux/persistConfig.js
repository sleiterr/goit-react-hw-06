// src/redux/persistConfig.js

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"], 
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
