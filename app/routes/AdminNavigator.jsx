import { createStackNavigator } from "@react-navigation/stack";
import adminScreens from "../screens/AdminScreens";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function AdminNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {adminScreens.map((item, index) => (
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
