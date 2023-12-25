import React from "react";
import { StyleSheet, View } from "react-native";

import UTILS from "../../utils";
import TableHeaderContainer from "./TableHeaderContainer";
import TableRow from "./TableRow";
import { useScoreDetails } from "../../services/scoringServices/useScoring";

const style = UTILS.STYLES;
const colors = UTILS.COLORS;

export default function LiveScoreTable(props) {
  const { striker, nonStriker, playingBatsman } = useScoreDetails();

  const strikerScore = playingBatsman.find((i) => i.id == striker.id);
  const nonStrikerScore = playingBatsman.find((i) => i.id == nonStriker.id);

  const strikerRN =
    (strikerScore.totalRun / strikerScore.ballsPlayed).toFixed(1) || 0;
  const nonStrikerRN =
    (nonStrikerScore.totalRun / nonStrikerScore.ballsPlayed).toFixed(1) || 0;

  return (
    <View style={styles.container}>
      <TableHeaderContainer>
        <TableRow {...props.batsManHeaderRowData} />
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
        title="Bowler"
        data={["O", "M", "R", "W", "Eco"]}
        {...props.bowlerHeaderStyle}
      />

      <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
        {props?.bowlerData.map((e, i) => (
          <TableRow {...e} key={i} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});
