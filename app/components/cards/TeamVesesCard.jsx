import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import UTILS from "../../utils";
import AppText from "../text/AppText";
import Icons from "../others/Icons";

const COLORS = UTILS.COLORS;

export default function TeamVersusCard(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.teamProfileContainer} />
      <View style={styles.detailsContainer}>
        <View style={styles.teamNameContainer}>
          <AppText style={styles.teamName}>{props.name}</AppText>
          {/* add icon here */}
        </View>
        <AppText style={styles.location}>{props.matchLocation}</AppText>

        <View style={styles.capDetails}>
          <View style={styles.capProfileContainer} />
          <AppText>{props.captainName}</AppText>
        </View>
      </View>
      <View style={[styles.editIconCon]}>
        <Icons.PencilIcon />
        <AppText style={[styles.text]}>{props.teamName}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background1,
    padding: 15,
    borderRadius: 14,
    flexDirection: "row",
  },
  teamProfileContainer: {
    height: 90,
    width: 90,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border1,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "space-evenly",
  },
  location: { color: COLORS.gray2 },
  teamName: { fontSize: 16, fontWeight: "600" },
  capProfileContainer: {
    height: 25,
    width: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.themeColor,
    marginRight: 5,
  },
  capDetails: { flexDirection: "row", alignItems: "center" },
  teamNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: COLORS.gray2,
    fontSize: 15,
    fontWeight: "700",
  },
  editIconCon: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
});
