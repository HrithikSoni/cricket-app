import React from "react";
import { StyleSheet, Text, View } from "react-native";

import UTILS from "../../utils";
import AppText from "../text/AppText";
import SmallButton from "../button/SmallButton";
import useAuth from "../../hooks/useAuth";

export default function TournamentMatchesCard(props) {
  const countDown = 10;
  const { role } = useAuth();
  const isAdmin = role === UTILS.ROLE.ADMIN;
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
            <View style={[styles.teamInnerCon]}>
              <AppText style={styles.teamText}>{item.team1}</AppText>
              {isAdmin && (
                <SmallButton
                  label={"Match Toss"}
                  onPress={props.onPressLeftButton}
                />
              )}
            </View>
            <AppText>V/S</AppText>
            <View style={[styles.teamInnerCon]}>
              <AppText style={styles.teamText}>{item.team2}</AppText>
              {isAdmin && (
                <SmallButton
                  label={"Start Scorekeeping"}
                  onPress={props.onPressRightButton}
                  bgColor={UTILS.COLORS.gray2}
                  textColor={UTILS.COLORS.textColor}
                />
              )}
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
    width: "100%",
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
  teamInnerCon: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
