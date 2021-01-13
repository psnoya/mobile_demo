import { registerRootComponent } from "expo";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./state/store/store";

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

registerRootComponent(ConnectedApp);
