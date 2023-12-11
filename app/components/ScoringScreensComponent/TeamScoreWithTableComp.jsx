import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

import TeamScoreCard from "../cards/TeamScoreCard";
import LiveScoreTable from "../table/LiveScoreTable";
import UTILS from "../../utils";

const TeamScoreWithTableComp = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TeamScoreCard {...currentInningTeamData} />
        <TeamScoreCard {...teamData} />
        <LiveScoreTable
          tableData={tableData}
          batsManHeaderRowData={batsManHeaderRowData}
          bowlerHeaderStyle={bowlerHeaderStyle}
        />
      </View>
    </View>
  );
};

export default TeamScoreWithTableComp;

const tableData = [
  { title: "name", subTitle: null, data: [1, 2, 3, 4, 5] },
  { title: "new Team", subTitle: "game", data: [12, 24, 35, "00:00", 50] },
];

const batsManHeaderRowData = {
  title: "Batsman",
  data: ["R", "B", "4s", "6s", "RS"],
  textStyle: { color: "white" },
  titleStyle: { color: "white" },
};

const bowlerHeaderStyle = {
  titleStyle: { color: "black" },
  textStyle: { color: "black" },
  containerStyle: { backgroundColor: "white", paddingVertical: 20 },
};

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
