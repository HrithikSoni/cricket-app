import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import TeamVersusCard from "../../components/cards/TeamVesesCard";
import UTILS from "../../utils";
import Button from "../../components/Button";

const teamDetails = {
  name: "team A",
  matchLocation: "Garden",
  profilePic: "",
  captainProfile: { profilePic: "", name: "Team Captain" },
};
export default function TeamsVersus({ navigation }) {
  return (
    <ParentWrapper screenTitle="Teams" showBack={true}>
      <View style={styles.container}>
        <TeamVersusCard
          {...teamDetails}
          onPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.SELECT_TEAM)
          }
        />
        <AppText style={styles.versusText}>V/S</AppText>
        <TeamVersusCard
          {...teamDetails}
          onPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.SELECT_TEAM)
          }
        />
      </View>

      <Button title="Continue" bottom={true} />
    </ParentWrapper>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 50 },
  versusText: {
    fontSize: 30,
    fontWeight: "700",
    color: UTILS.COLORS.gray1,
    textAlign: "center",
    marginVertical: 20,
  },
});
