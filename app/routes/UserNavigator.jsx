import { createStackNavigator } from "@react-navigation/stack";

import liveMatches from "../screens/LiveMatchesScreen";

const Stack = createStackNavigator();

function UserNavigator() {
  return (
    <Stack.Navigator>
      {liveMatches.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default UserNavigator;
