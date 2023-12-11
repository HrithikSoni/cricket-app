import { createStackNavigator } from "@react-navigation/stack";

import bundle from "./screenBundle/AuthBundle";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      {bundle.testAuthScreensBundle.map((item, index) => (
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

export default AuthNavigator;
