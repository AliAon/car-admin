import { Provider } from "react-redux";
import { store,persist } from "./store";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>{children}</PersistGate>
    </Provider>
  );
}
