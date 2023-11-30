import { createStackNavigator } from "@react-navigation/stack";
import appBundle from "./screenBundle/AppBundle";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {appBundle.map((item, index) => (
        <Stack.Screen
          key={index}
          {...item}
          // options={{presentation:""}}
          // name={item.name}
          // component={item.Component}
          // options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
}
