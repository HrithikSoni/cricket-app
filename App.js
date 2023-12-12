import React from "react";
// import 'react-native-reanimated';
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";

import { AppProvider } from "./app/context/AppContext";
import Root from "./app/screens";
import { store } from "./app/services/store";
import { toastConfig } from "./app/services/toast/toastConfig";
import LiveScoreTable from "./app/components/table/LiveScoreTable";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ marginTop: 100, paddingHorizontal: 20 }}>
      <LiveScoreTable />
    </View>
  );

  // return (
  //   <>
  //     <NavigationContainer>
  //       <AppProvider>
  //         <Provider store={store}>
  //           <Root />
  //         </Provider>
  //       </AppProvider>
  //     </NavigationContainer>
  //     <Toast config={toastConfig} topOffset={300} />
  //   </>
  // );
}
