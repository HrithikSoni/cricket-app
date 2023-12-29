import React from "react";
import { StyleSheet, View } from "react-native";

import ScoreCardTable from "../../components/table/ScoreCardTable";
import UTILS from "../../utils";

const Scorecard = () => {
  return (
    <View>
      <ScoreCardTable
        tableData={tableData}
        batsmanHeaderRowData={batsmanHeaderRowData}
        bowlerHeaderStyle={bowlerHeaderStyle}
        bottomTableHeaderRowData={bottomTableHeaderRowData}
        bottomTableData={bottomTableData}
        batsmanBottomData={batsmanBottomData}
        teamName={"New Delhi Heroes"}
        score={"173/8(20.0ov)"}
      />
    </View>
  );
};

export default Scorecard;

const tableData = [
  { title: "name", subTitle: null, data: [1, 2, 3, 4, 5, 6] },
  { title: "new Team", subTitle: "game", data: [12, 24, 35, 0, 50, 49] },
];

const batsmanHeaderRowData = {
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

const batsmanBottomData = [
  { title: "Extras:", data: ["3 ( Wd 3 )"] },
  { title: "Total", data: ["124/9 (20.0v) CRR 6.20"] },
  { title: "To Bat:", data: ["Kunal Raman rohit"] },
];

const bottomTableData = [
  { title: "1. Kathryn Murphy", data: ["0 (0.1 Ov)"] },
  { title: "1. Kathryn Murphy", data: ["0 (0.1 Ov)"] },
  { title: "1. Kathryn Murphy", data: ["0 (0.1 Ov)"] },
];

const styles = StyleSheet.create({});
