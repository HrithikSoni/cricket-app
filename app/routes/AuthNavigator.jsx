import { createStackNavigator } from "@react-navigation/stack";

import AuthScreens from "../screens/AuthScreens";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      {AuthScreens.map((item, index) => (
        <Stack.Screen key={index} {...item} options={{ headerShown: false }} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
