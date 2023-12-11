import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";

import UTILS from "../utils";
import TeamScoreWithTableComp from "../components/ScoringScreensComponent/TeamScoreWithTableComp";
import ScoringTableComp from "../components/ScoringScreensComponent/ScoringTableComp";

const Tab = createMaterialTopTabNavigator();
const colors = UTILS.COLORS;

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
        tabBarStyle: {
          backgroundColor: colors.themeColor,
          width: 200,
          height: 50,
          borderRadius: 100,
          marginBottom: 10,
        },
        tabBarIndicatorStyle: { backgroundColor: "transparent" },
      }}
    >
      <Tab.Screen
        name={"Team Score With Table Comp"}
        component={TeamScoreWithTableComp}
        options={{ tabBarLabel: "Live" }}
      />
      <Tab.Screen
        name={"Scoring Table Comp"}
        component={ScoringTableComp}
        options={{ tabBarLabel: "Scorecard" }}
      />
    </Tab.Navigator>
  );
}
