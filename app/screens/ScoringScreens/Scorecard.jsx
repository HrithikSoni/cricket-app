import React from "react";
import { StyleSheet, View } from "react-native";

import ScoreCardTable from "../../components/table/ScoreCardTable";
import UTILS from "../../utils";

const Scorecard = () => {
  return (
    <View>
      <ScoreCardTable
        tableData={tableData}
        batsManHeaderRowData={batsManHeaderRowData}
        bowlerHeaderStyle={bowlerHeaderStyle}
        bottomTableHeaderRowData={bottomTableHeaderRowData}
        bottomTableData={bottomTableData}
        teamName={"New Delhi Heroes"}
        score={"173/8(20.0ov)"}
      />
    </View>
  );
};

export default Scorecard;

const tableData = [
  { title: "name", subTitle: null, data: [1, 2, 3, 4, 5, 6] },
  { title: "new Team", subTitle: "game", data: [12, 24, 35, "00:00", 50, 50] },
];

const batsManHeaderRowData = {
  title: "Batsman",
  data: ["R", "B", "4s", "6s", "SR", "Min"],
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

const bottomTableData = [
  { title: "1. Kathryn Murphy", data: ["0 (0.1 Ov)"] },
  { title: "1. Kathryn Murphy", data: ["0 (0.1 Ov)"] },
  { title: "1. Kathryn Murphy", data: ["0 (0.1 Ov)"] },
];

const styles = StyleSheet.create({});
