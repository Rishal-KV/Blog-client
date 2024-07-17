import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slice";

// Persist configuration
const persistConfig = {
  key: 'user',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
