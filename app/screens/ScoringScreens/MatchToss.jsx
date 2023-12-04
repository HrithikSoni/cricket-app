import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import AppText from "../../components/text/AppText";
import ImageWithTextCard from "../../components/cards/ImageWithTextCard";
import Button from "../../components/button/Button";

const MatchToss = () => {
  const tossData = useRef({});

  const teamInfo = [
    { imgUrl: require("../../../assets/cricket-team.png"), label: "Team A" , value: "TEAM_A"},
    { imgUrl: require("../../../assets/cricket-team.png"), label: "Team B" , value: "TEAM_B"},
  ];

  const tossInfo = [
    { imgUrl: require("../../../assets/bat.png"), label: "Bat" , value:"BAT"},
    { imgUrl: require("../../../assets/bowl.png"), label: "Bowl" , value: "BALL"},
  ];

  function handleTeamSelection(teamValue) {
    tossData.current.selectedTeam = teamValue;
  }

  function handleTossSelection(tossValue) {
    tossData.current.selectedToss = tossValue;
  }

  return (
    <ParentWrapper screenTitle={"Toss"}>
      <AppText style={[styles.text]}>Won By</AppText>
      <View style={[styles.cardContainer]}>
        {teamInfo.map((item, index) => (
          <View key={index}>
            <ImageWithTextCard
              {...item}
              handleOnPress={handleTeamSelection}
            />
          </View>
        ))}
      </View>
      <AppText style={[styles.text]}>Choose To</AppText>
      <View style={[styles.cardContainer]}>
        {tossInfo.map((item, index) => (
          <View key={index}>
            <ImageWithTextCard
              {...item}
              handleOnPress={handleTossSelection}
            />
          </View>
        ))}
      </View>
      <Button
        label={"Confirm"}
        onButtonPress={() => console.log(tossData.current, "oooo")}
        bottom={true}
      />
    </ParentWrapper>
  );
};

export default MatchToss;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    gap: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
  },
});
