import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import TableHeaderContainer from "../../components/table/TableHeaderContainer";
import TableRow from "../../components/table/TableRow";
import AppText from "../../components/text/AppText";
import BoldText from "../../components/text/BoldText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";

import UTILS from "../../utils";
import { useMatchStatsSelector } from "./scoringServices/hooks/scoringSelectors";

const colors = UTILS.COLORS;
export default function MatchStats() {
  const { batsmanStats, bowlerStats } = useMatchStatsSelector();
  return (
    <ParentWrapper screenTitle="Match Stats">
      <ScoreCardTable
        batsmanStats={batsmanStats}
        bowlerStats={bowlerStats}
        bottomTableData={bottomTableData}
        batsmanBottomData={batsmanBottomData}
        teamName={"New Delhi Heroes"}
        score={"173/8(20.0ov)"}
      />
    </ParentWrapper>
  );
}

function ScoreCardTable(props) {
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

        <View
          style={{
            backgroundColor: UTILS.COLORS.gray1,
            paddingLeft: 10,
            paddingRight: 20,
          }}
        >
          <DataHeaderRow title={"Extras"} value={"3"} />
          <DataHeaderRow title={"Total"} value={"400"} />
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

        {/* <BottomTable /> */}
        <View style={styles.bottomScoreContainer}>
          <AppText style={styles.scoreText}>{props.teamName}</AppText>
          <AppText style={styles.scoreText}>{props.score}</AppText>
        </View>
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
        <DataHeaderRow
          title={"Fall of Wicket"}
          value={"Score (Overs)"}
          darkMode={true}
        />
        <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
          {props?.bottomTableData.map((e, i) => (
            <DataRow {...e} key={i} />
          ))}
        </View>
      </View>
    );
  }

  function DataRow({ title, value, darkMode = false }) {
    const bg = darkMode ? colors.background2 : colors.gray1;
    const textColor = darkMode ? "white" : "grey";
    const titleColor = darkMode ? "white" : colors.themeColor;
    return (
      <View style={[styles.rowContainer, { backgroundColor: bg }]}>
        <AppText style={{ color: titleColor }}>{title}</AppText>
        <AppText style={{ color: textColor }}>{value}</AppText>
      </View>
    );
  }

  function DataHeaderRow({ title, value, darkMode = false }) {
    const bg = darkMode ? colors.background2 : colors.gray1;
    const textColor = darkMode ? "white" : "grey";
    const titleColor = darkMode ? "white" : "black";
    return (
      <View style={[styles.rowContainer, { backgroundColor: bg }]}>
        <BoldText style={{ color: titleColor }}>{title}</BoldText>
        <AppText style={{ color: textColor }}>{value}</AppText>
      </View>
    );
  }
}
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
const batsmanBottomData = [
  { title: "Extras:", data: ["3 ( Wd 3 )"] },
  { title: "Total", data: ["124/9 (20.0v) CRR 6.20"] },
  { title: "To Bat:", data: ["Kunal Raman rohit"] },
];

const bottomTableData = [
  { title: "1. Kathryn Murphy", value: "0 (0.1 Ov)" },
  { title: "1. Kathryn Murphy", value: "0 (0.1 Ov)" },
  { title: "1. Kathryn Murphy", value: "0 (0.1 Ov)" },
];
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginVertical: 5,
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 7,
  },
});
