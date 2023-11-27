import { StatusBar } from "expo-status-bar";
import React from "react";
// import 'react-native-reanimated';
import "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";

import Root from "./app/screens";
import { AppProvider } from "./app/context/AppContext";
import { store } from "./app/services/store";
import { toastConfig } from "./app/services/toast/toastConfig";

export default function App() {
  return (
    <>
      <AppProvider>
<<<<<<< HEAD
        <Root />
      </AppProvider>
=======
        <Provider store={store}>
          <Root />
        </Provider>
      </AppProvider>
      <Toast config={toastConfig} topOffset={300} />
>>>>>>> d25abfb3031878427a2a055f79abb6d0943b4912
    </>
  );
}
