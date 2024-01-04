import { createStackNavigator } from "@react-navigation/stack";
import adminScreens from "../screens/AdminScreens";
import UTILS from "../utils";

const Stack = createStackNavigator();

export default function AdminNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={UTILS.SCREEN_NAMES.NAV_SCREENS.BOTTOM_TAB_NAVIGATOR}
    >
      {adminScreens.map((item, index) => (
        <Stack.Screen key={index} {...item} />
      ))}
    </Stack.Navigator>
  );
}
