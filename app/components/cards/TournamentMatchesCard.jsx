import { StyleSheet, Text, View } from "react-native";

import UTILS from "../../utils";
import AppText from "../text/AppText";
export default function TournamentMatchesCard(props) {
  const countDown = 10;
  return (
    <View style={styles.container}>
      <View style={styles.dateTime}>
        <Text>
          {props.date} - {countDown} days left
        </Text>
        <View style={styles.overContainer}>
          <Text>{props.overs} Ov</Text>
        </View>
      </View>

      <AppText style={styles.location}>{props.location}</AppText>

      <View style={styles.teams}>
        <AppText style={styles.teamText}>{props.team1}</AppText>
        <AppText>V/S</AppText>
        <AppText style={styles.teamText}>{props.team2}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
    ...UTILS.STYLES.elevation,
  },
  teams: {
    marginTop: 20,
    paddingTop: 10,
    borderTopColor: UTILS.COLORS.background1,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dateTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  overContainer: {
    // height: 18,
    // width: 34,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: UTILS.COLORS.background1,
  },
  location: {
    fontSize: 16,
    fontWeight: "600",
    color: UTILS.COLORS.themeColor,
  },
  teamText: {
    fontWeight: "500",
  },
});
