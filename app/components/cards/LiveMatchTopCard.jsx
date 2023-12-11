import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

import TeamScoreCard from "../cards/TeamScoreCard";

const LiveMatchTopCard = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TeamScoreCard {...currentInningTeamData} />
        <TeamScoreCard {...teamData} />
      </View>
    </View>
  );
};

export default LiveMatchTopCard;

const currentInningTeamData = {
  imgUrl: require("../../../assets/cricket-team.png"),
  teamName: "New Delhi Heroes",
  score: "173/8",
};

const teamData = {
  imgUrl: require("../../../assets/cricket-team-1.png"),
  teamName: "KC Riders",
  score: "(18.2/20 ov T:174) 142",
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
  },
});
