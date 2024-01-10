import React from "react";
import { StyleSheet, View } from "react-native";

import UTILS from "../../utils";
import TableHeaderContainer from "./TableHeaderContainer";
import TableRow from "./TableRow";
import { useScoreDetailsSelector } from "../../screens/ScoringScreens/scoringServices/hooks/scoringSelectors";

export default function LiveScoreTable(props) {
  const { striker, nonStriker, bowler } = useScoreDetailsSelector();

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
            striker.totalRun,
            striker.ballsPlayed,
            striker[4],
            striker[6],
            striker.strikeRate,
          ]}
        />
        <TableRow
          title={nonStriker.name}
          subTitle={null}
          data={[
            nonStriker.totalRun,
            nonStriker.ballsPlayed,
            nonStriker[4],
            nonStriker[6],
            nonStriker.strikeRate,
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
            bowler.totalRun,
            bowler.wickets,
            bowler[4],
            bowler[6],
            bowler.economy,
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
