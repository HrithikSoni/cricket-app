import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import UTILS from "../../utils";
import Home from "../../screens/Other/Home";
import Social from "../../screens/Other/Social";
import Tournament from "../../screens/Other/Tournament";
import Profile from "../../screens/Other/Profile";
import TestHome from "../../screens/LiveMatchesScreen/UpComingMatches";
import Icons from "../../components/others/Icons";

const Tab = createBottomTabNavigator();
const { TAB_SCREENS, TEST_SCREENS } = UTILS.SCREEN_NAMES;

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
          height: 80,
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}
    >
      {/* <Tab.Screen
        name={TEST_SCREENS.TEST_HOME}
        component={TestHome}
        options={{
          tabBarIcon: ({ color }) => <Icons.HomeIcon color={color} />,
          tabBarLabel: ({ color, focused }) =>
            focused ? <Text style={{ color: color }}>Home</Text> : null,
        }}
      /> */}

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
