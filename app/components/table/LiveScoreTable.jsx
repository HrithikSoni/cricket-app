import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TableRow from "./TableRow";
import TableHeaderContainer from "./TableHeaderContainer";
import UTILS from "../../utils";
import AppText from "../text/AppText";

const style = UTILS.STYLES;
const colors = UTILS.COLORS;

export default function LiveScoreTable(props) {
  return (
    <View style={styles.container}>
      <TableHeaderContainer>
        {props.teamName ? (
          <ScoreDetails />
        ) : (
          <TableRow {...props.batsManHeaderRowData} />
        )}
      </TableHeaderContainer>
      {props.teamName && <TableRow {...props.batsManHeaderRowData} />}
      <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
        {props?.tableData.map((e, i) => (
          <TableRow {...e} key={i} />
        ))}
      </View>

      <TableRow
        title="Bowler"
        data={["O", "M", "R", "W", "Eco"]}
        {...props.bowlerHeaderStyle}
      />

      <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
        {props?.tableData.map((e, i) => (
          <TableRow {...e} key={i} />
        ))}
      </View>

      {props.bottomTableHeaderRowData && <BottomTable />}
    </View>
  );

  function ScoreDetails() {
    return (
      <View style={styles.scoreDetailsContainer}>
        <AppText style={styles.scoreText}>{props.teamName}</AppText>
        <AppText style={styles.scoreText}>{props.score}</AppText>
      </View>
    );
  }

  function BottomTable() {
    return (
      <View>
        <TableRow {...props.bottomTableHeaderRowData} />
        <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
          {props?.bottomTableData.map((e, i) => (
            <TableRow {...e} key={i} />
          ))}
          <View style={styles.bottomScoreContainer}>
            <AppText style={styles.scoreText}>{props.teamName}</AppText>
            <AppText style={styles.scoreText}>{props.score}</AppText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scoreText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textColor,
  },
  scoreDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  container: {
    paddingTop: 30,
  },
  bottomScoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: UTILS.COLORS.themeColor,
    borderRadius: 20,
    marginVertical: 10,
  },
});
