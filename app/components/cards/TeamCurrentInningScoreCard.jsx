import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../text/AppText";

const TeamCurrentInningScoreCard = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress || (() => {})}
    >
      <View style={styles.teamDetailsContainer}>
        <Image source={props.imgUrl} style={styles.imgStyle} />
        <AppText style={styles.teamNameText}>{props.teamName}</AppText>
      </View>
      <AppText style={styles.scoreText}>{props.score}</AppText>
    </TouchableOpacity>
  );
};

export default TeamCurrentInningScoreCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  teamDetailsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  teamNameText: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
  },
  scoreText: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 24,
  },
  imgStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});
