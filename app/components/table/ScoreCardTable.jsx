import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import UTILS from "../../utils";
import AppText from "../text/AppText";
import TableHeaderContainer from "./TableHeaderContainer";
import TableRow from "./TableRow";
import BoldText from "../text/BoldText";

const style = UTILS.STYLES;
const colors = UTILS.COLORS;

const ScoreCardTable = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <TableHeaderContainer>
          <ScoreDetails />
        </TableHeaderContainer>
        <TableRow {...batsmanHeaderRowData} />
        <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
          {props?.batsmanStats.map((e, i) => (
            <TableRow {...e} key={i} />
          ))}
        </View>

        <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
          <View>
            <BoldText>Extras:</BoldText>
            <AppText style={{ color: colors.gray1 }}>3 ( Wd 3 )</AppText>
            <BoldText>Total</BoldText>
            <AppText style={{ color: colors.gray1 }}>3 ( Wd 3 )</AppText>
            <BoldText>Extras:</BoldText>
            <AppText style={{ color: colors.gray1 }}>3 ( Wd 3 )</AppText>
          </View>
        </View>

        <TableRow
          title="Bowler"
          data={["O", "M", "R", "W", "Eco"]}
          {...bowlerHeaderStyle}
        />

        <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
          {props?.bowlerStats.map((e, i) => (
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
        <TableRow {...bottomTableHeaderRowData} isSpcBtw={true} />
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

const batsmanHeaderRowData = {
  title: "Batsman",
  data: ["R", "B", "4s", "6s", "SR"],
  textStyle: { color: "white" },
  titleStyle: { color: "white" },
  containerStyle: {
    backgroundColor: UTILS.COLORS.background2,
    paddingVertical: 10,
  },
};

const bowlerHeaderStyle = {
  titleStyle: { color: "white" },
  textStyle: { color: "white" },
  containerStyle: {
    backgroundColor: UTILS.COLORS.background2,
    paddingVertical: 10,
  },
};
const bottomTableHeaderRowData = {
  title: "Fall Of Wicket",
  data: ["Score(over)"],
  textStyle: { color: "white" },
  titleStyle: { color: "white" },
  containerStyle: {
    backgroundColor: UTILS.COLORS.background2,
  },
};
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
    paddingTop: 10,
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
