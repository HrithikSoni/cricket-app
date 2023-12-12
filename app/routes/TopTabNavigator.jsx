import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import LiveScore from "../screens/ScoringScreens/LiveScore";
import Scorecard from "../screens/ScoringScreens/Scorecard";
import UTILS from "../utils";

const Tab = createMaterialTopTabNavigator();
const colors = UTILS.COLORS;
const { SCORING_SCREENS } = UTILS.SCREEN_NAMES;

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarActiveTintColor: colors.textColor,
        // tabBarInactiveTintColor: colors.black,
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
          textTransform: "none",
        },
        tabBarStyle: {
          // backgroundColor: colors.themeColor,
          // width: 200,
          // height: 50,
          borderRadius: 100,
          marginBottom: 10,
        },
        tabBarIndicatorStyle: { backgroundColor: "transparent" },
      }}
    >
      <Tab.Screen
        name={SCORING_SCREENS.LIVE_SCORE}
        component={LiveScore}
        options={{ tabBarLabel: "Live" }}
      />
      <Tab.Screen
        name={SCORING_SCREENS.SCORECARD}
        component={Scorecard}
        options={{ tabBarLabel: "Scorecard" }}
      />
    </Tab.Navigator>
  );
}
