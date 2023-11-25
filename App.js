import { StatusBar } from "expo-status-bar";
import React from "react";
// import 'react-native-reanimated';
import "react-native-gesture-handler";

import Root from "./app/screens";
import { AppProvider } from "./app/context/AppContext";

export default function App() {
  return (
   <>
    <AppProvider>
      <Root />
    </AppProvider>
   </>
  );
}
