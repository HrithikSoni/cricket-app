import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";

import { AppProvider } from "./app/context/AppContext";
import Root from "./app/screens";
import { store } from "./app/services/store";
import UTILS from "./app/utils";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppProvider>
          <Provider store={store}>
            <Root />
          </Provider>
        </AppProvider>
      </NavigationContainer>
      <Toast config={UTILS.CONFIG.toastConfig} topOffset={300} />
    </>
  );
}
