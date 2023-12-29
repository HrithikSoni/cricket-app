import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import UTILS from "../../utils";
import AppText from "../text/AppText";
import TableHeaderContainer from "./TableHeaderContainer";
import TableRow from "./TableRow";

const style = UTILS.STYLES;
const colors = UTILS.COLORS;

const ScoreCardTable = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TableHeaderContainer>
          <ScoreDetails />
        </TableHeaderContainer>
        <TableRow {...props.batsmanHeaderRowData} />
        <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
          {props?.tableData.map((e, i) => (
            <TableRow {...e} key={i} />
          ))}
        </View>

        <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
          {props?.batsmanBottomData.map((e, i) => (
            <TableRow
              {...e}
              key={i}
              titleStyle={{ color: colors.black }}
              isSpcBtw={true}
            />
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

        <BottomTable />
      </View>
    </ScrollView>
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
        <TableRow {...props.bottomTableHeaderRowData} isSpcBtw={true} />
        <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
          {props?.bottomTableData.map((e, i) => (
            <TableRow {...e} key={i} isSpcBtw={true} />
          ))}
          <View style={styles.bottomScoreContainer}>
            <AppText style={styles.scoreText}>{props.teamName}</AppText>
            <AppText style={styles.scoreText}>{props.score}</AppText>
          </View>
        </View>
      </View>
    );
  }
};

export default ScoreCardTable;

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
