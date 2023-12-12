import { createMyNavigator } from "./CustomNavigator";
import LiveScore from "../screens/ScoringScreens/LiveScore";
import Scorecard from "../screens/ScoringScreens/Scorecard";
import UTILS from "../utils";
import { StyleSheet } from "react-native";

const TopTab = createMyNavigator();
const { SCORING_SCREENS } = UTILS.SCREEN_NAMES;

export default function TopTabNavigator() {
  return (
    <TopTab.Navigator
      tabBarStyle={tabBarStyle}
      contentStyle={contentStyle}
      labelStyle={labelStyle}
    >
      <TopTab.Screen name={SCORING_SCREENS.LIVE_SCORE} component={LiveScore} />
      <TopTab.Screen name={SCORING_SCREENS.SCORECARD} component={Scorecard} />
    </TopTab.Navigator>
  );
}

const tabBarStyle = StyleSheet.create({
  padding: 10,
  gap: 30,
  width: 120,
  borderRadius: 30,
});

const contentStyle = StyleSheet.create({});

const labelStyle = StyleSheet.create({
  fontSize: 17,
  fontWeight: "600",
});

const styles = StyleSheet.create({
  container: {},
});
