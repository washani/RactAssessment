import React from "react";
import { Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
    BackHandler, Platform,
  } from "react-native";
import Navigator from "./navigation";
import store, { persistor } from "./redux";
import { useEffect, useState } from "react";


const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Home />
    </PersistGate>
  </Provider>
);

// ======= Navigation screen
const Home = () => {  
  return (
    <Navigator />
  );
};

export default App;
