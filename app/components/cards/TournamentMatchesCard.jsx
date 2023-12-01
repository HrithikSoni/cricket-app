import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AppText from "../AppText";
import UTILS from "../../utils";

export default function TournamentMatchesCard(props) {
  const countDown = 10;
  return (
    <View style={styles.container}>
      {props?.arrayData.map((item, index) => (
        <View key={index}>
          <View style={styles.dateTime}>
            <Text>
              {item.date} - {countDown} days left
            </Text>
            <View style={styles.overContainer}>
              <Text>{item.overs} Ov</Text>
            </View>
          </View>

          <AppText style={styles.location}>{item.location}</AppText>

          <View style={styles.teams}>
            <View style={[styles.team1Con]}>
              <AppText style={styles.teamText}>{item.team1}</AppText>
            </View>
            <AppText>V/S</AppText>
            <View style={[styles.team2Con]}>
              <AppText style={styles.teamText}>{item.team2}</AppText>
            </View>
          </View>
        </View>
      ))}
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
    width: "100%",
  },
  teams: {
    marginTop: 20,
    paddingTop: 10,
    borderTopColor: UTILS.COLORS.background1,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
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
