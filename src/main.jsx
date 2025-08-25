import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Toaster as HotToast } from "react-hot-toast";
import { store } from "./lib/redux/store";
import React from "react";
import { VehicleProvider } from "./context/VehicleContext";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';


createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <VehicleProvider>
      <App />
    </VehicleProvider>
    <ToastContainer />
    <HotToast />
  </Provider>
  // </StrictMode>
);
