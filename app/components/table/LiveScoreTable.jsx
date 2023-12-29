import React from "react";
import { StyleSheet, View } from "react-native";

import UTILS from "../../utils";
import TableHeaderContainer from "./TableHeaderContainer";
import TableRow from "./TableRow";
import { useScoreDetails } from "../../services/scoringServices/useScoringEngine";

const style = UTILS.STYLES;
const colors = UTILS.COLORS;

export default function LiveScoreTable(props) {
  const { striker, nonStriker, playingBatsman, bowler, playingFielders } =
    useScoreDetails();

  const strikerScore = playingBatsman.find((i) => i.id == striker.id);
  const nonStrikerScore = playingBatsman.find((i) => i.id == nonStriker.id);

  const strikerRN =
    (strikerScore.totalRun / strikerScore.ballsPlayed).toFixed(1) || 0;
  const nonStrikerRN =
    (nonStrikerScore.totalRun / nonStrikerScore.ballsPlayed).toFixed(1) || 0;

  const bowlerStat = playingFielders.find((i) => i.id == bowler.id);

  const economy = (bowlerStat.totalRun / bowlerStat.totalOvers).toFixed(1);

  return (
    <View style={styles.container}>
      <TableHeaderContainer>
        <TableRow {...batsmanHeaderRowData} />
      </TableHeaderContainer>
      <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
        <TableRow
          title={striker.name}
          subTitle={null}
          data={[
            strikerScore.totalRun,
            strikerScore.ballsPlayed,
            strikerScore[4],
            strikerScore[6],
            isNaN(strikerRN) ? 0 : strikerRN,
          ]}
        />
        <TableRow
          title={nonStriker.name}
          subTitle={null}
          data={[
            nonStrikerScore.totalRun,
            nonStrikerScore.ballsPlayed,
            nonStrikerScore[4],
            nonStrikerScore[6],
            isNaN(nonStrikerRN) ? 0 : nonStrikerRN,
          ]}
        />
      </View>

      <TableRow
        title={"Bowler"}
        data={["R", "W", "4s", "6s", "Eco"]}
        {...bowlerHeaderStyle}
      />

      <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
        <TableRow
          title={bowler.name}
          subTitle={null}
          data={[
            bowlerStat.totalRun,
            bowlerStat.wickets,
            bowlerStat[4],
            bowlerStat[6],
            economy == "Infinity" ? 0 : economy,
          ]}
        />
      </View>
    </View>
  );
}

const batsmanHeaderRowData = {
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});
