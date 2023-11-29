import { createStackNavigator } from "@react-navigation/stack";
import appBundle from "./screenBundle/AppBundle";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      {appBundle.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.name}
          component={item.Component}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
}
