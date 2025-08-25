import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { authApi } from "../services/auth-api";
import { vehicleApi } from "../services/vehicle-api";
import { videoApi } from "../services/videos-api";
import { imageApi } from "../services/image-api/image-api";
import { serviceApi } from "../services/service-api/service-api";
const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [vehicleApi.reducerPath]: vehicleApi.reducer,
  [videoApi.reducerPath]: videoApi.reducer,
  [imageApi.reducerPath]: imageApi.reducer,
  [serviceApi.reducerPath]: serviceApi.reducer,
});

export default rootReducer;
