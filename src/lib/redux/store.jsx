import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authApi } from "../services/auth-api";
import { vehicleApi } from "../services/vehicle-api";
import { videoApi } from "../services/videos-api";
import rootReducer from "../features/rootSlice";
import { imageApi } from "../services/image-api/image-api";
import { serviceApi } from "../services/service-api/service-api";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Only the 'counter' slice will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(vehicleApi.middleware)
        .concat(videoApi.middleware)
        .concat(imageApi.middleware)
        .concat(serviceApi.middleware),
  });

const store = makeStore();
setupListeners(store.dispatch);
const persist = persistStore(store);
export { store, persist };
