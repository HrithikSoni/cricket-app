import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import UTILS from "../utils";
import { TAB_SCREENS } from "../utils/constants/screenNames";
import Home from "../screens/Home";
import Social from "../screens/Social";
import Tournament from "../screens/Tournament";
import Profile from "../screens/Profile";
import Icons from "../components/icons";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: UTILS.COLORS.themeColor,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          height: 100,
          paddingTop: 20,
          paddingBottom: 20,
        },
      }}
    >
      <Tab.Screen
        name={TAB_SCREENS.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Icons.HomeIcon color={color} />,
          tabBarLabel: ({ color, focused }) =>
            focused ? (
              <Text style={{ color: color }}>{TAB_SCREENS.HOME}</Text>
            ) : null,
        }}
      />
      <Tab.Screen
        name={TAB_SCREENS.SOCIAL}
        component={Social}
        options={{
          tabBarIcon: ({ color }) => <Icons.CompassIcon color={color} />,
          tabBarLabel: ({ color, focused }) =>
            focused ? (
              <Text style={{ color: color }}>{TAB_SCREENS.SOCIAL}</Text>
            ) : null,
        }}
      />
      <Tab.Screen
        name={TAB_SCREENS.TOURNAMENT}
        component={Tournament}
        options={{
          tabBarIcon: ({ color }) => <Icons.CricketIcon color={color} />,
          tabBarLabel: ({ color, focused }) =>
            focused ? (
              <Text style={{ color: color }}>{TAB_SCREENS.TOURNAMENT}</Text>
            ) : null,
        }}
      />
      <Tab.Screen
        name={TAB_SCREENS.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <Icons.UserIcon color={color} />,
          tabBarLabel: ({ color, focused }) =>
            focused ? (
              <Text style={{ color: color }}>{TAB_SCREENS.PROFILE}</Text>
            ) : null,
        }}
      />
    </Tab.Navigator>
  );
}
