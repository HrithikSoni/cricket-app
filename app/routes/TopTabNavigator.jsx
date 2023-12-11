import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import UTILS from "../utils";
import LiveMatchTopCard from "../components/cards/LiveMatchTopCard";
import ScoringCard from "../components/cards/ScoringCard";
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();
const colors = UTILS.COLORS;
const { TOP_TAB_COMPONENTS } = UTILS.COMPONENT_NAMES;

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.textColor,
        tabBarInactiveTintColor: colors.black,
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
          textTransform: "none",
        },
        tabBarStyle: { backgroundColor: colors.themeColor },
        tabBarIndicatorStyle: { backgroundColor: "transparent" },
      }}
    >
      <Tab.Screen
        name={TOP_TAB_COMPONENTS.LIVE_MATCH_CARD}
        component={LiveMatchTopCard}
        options={{ tabBarLabel: "Profile" }}
      />
      <Tab.Screen
        name={TOP_TAB_COMPONENTS.SCORING_CARD}
        component={ScoringCard}
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
}
