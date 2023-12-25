import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import AppText from "../../components/text/AppText";
import UTILS from "../../utils";
import SmallGreyText from "../../components/text/SmallGreyText";
import LiveScoreTable from "../../components/table/LiveScoreTable";
import { OptionsGrid } from "../../components/modals/ScoringModals/OptionsGrid";
import {
  useAddScore,
  useScoreDetails,
} from "../../services/scoringServices/useScoring";

export default function Scoring() {
  return (
    <ParentWrapper screenTitle="Scorecard">
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText style={{ textAlign: "center" }}>
          Delhi heros won the toss and elected to bat
        </AppText>
        <Scorecard />
        <LiveScoreTable
          batsmanData={batsmanData}
          bowlerData={bowlerData}
          batsManHeaderRowData={batsManHeaderRowData}
          bowlerHeaderStyle={bowlerHeaderStyle}
        />
        <ScoreBtn />
        <OptionsGrid headerTitle={"Other Options"} data={otherOptions} />
        <BottomScoreBtn />
      </ScrollView>
    </ParentWrapper>
  );
}

function Scorecard() {
  const { currentScore, wickets, overs, ballsInCurrentOver, playingBatsman } =
    useScoreDetails();

  console.log("iiii");

  return (
    <View style={styles.scorecardContainer}>
      <View style={styles.teamDetails}>
        <AppText style={styles.teamName}>New Delhi Heros</AppText>
        <SmallGreyText>CRR 4.0</SmallGreyText>
      </View>
      <View style={styles.scoreContainer}>
        <AppText style={styles.liveScore}>
          {currentScore}/{wickets}
        </AppText>
        <AppText style={styles.runRate}>
          {ballsInCurrentOver}/{overs} Overs
        </AppText>
      </View>
    </View>
  );
}

function ScoreBtn() {
  const dispatchAddScore = useAddScore();
  return (
    <View style={styles.btnContainer}>
      <AppText>Score Options</AppText>
      <View style={styles.grid}>
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
        {btn.map((i) => (
          <TouchableOpacity
            key={i.name}
            style={[styles.scoreBtn, { backgroundColor: i.containerColor }]}
            onPress={() => dispatchAddScore(i.action)}
          >
            <AppText style={[{ fontSize: 20 }, { color: i.textColor }]}>
              {i.name}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

function OptionsBtn({ data, headerTitle }) {
  return (
    <View style={styles.optionsBtnContainer}>
      <AppText>{headerTitle}</AppText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((i) => (
          <TouchableOpacity key={i.name} style={styles.optionsBtn}>
            <AppText>{i.name}</AppText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function BottomScoreBtn() {
  return <View></View>;
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/images/scoreBg.png")}
    ></ImageBackground>
  );
}

export const styles = StyleSheet.create({
  optionsHeader: {},
  grid: { flexDirection: "row", flexWrap: "wrap" },
  scorecardContainer: {
    backgroundColor: UTILS.COLORS.gray1,
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  liveScore: {
    fontSize: 30,
    color: UTILS.COLORS.themeColor,
    fontWeight: "600",
  },

  scoreContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  teamDetails: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  teamName: {
    fontSize: 20,
    fontWeight: "600",
  },
  btnContainer: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 15,
  },
  scoreBtn: {
    backgroundColor: UTILS.COLORS.gray2,
    height: 47,
    width: 47,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  optionsBtn: {
    padding: 14,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: UTILS.COLORS.gray1,
  },
  optionsBtnContainer: {
    marginTop: 15,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
});
const btn = [
  {
    name: 1,
    containerColor: UTILS.COLORS.background3,
    action: { type: "runs", value: 1 },
  },
  {
    name: 0,
    containerColor: UTILS.COLORS.background3,
    action: { type: "runs", value: 0 },
  },
  {
    name: 6,
    containerColor: "green",
    textColor: "white",
    action: { type: "boundary", value: 6 },
  },
  {
    name: 4,
    containerColor: UTILS.COLORS.themeColor,
    textColor: "white",
    action: { type: "boundary", value: 4 },
  },
  {
    name: 2,
    containerColor: UTILS.COLORS.background3,
    action: { type: "runs", value: 2 },
  },
  {
    name: 3,
    containerColor: UTILS.COLORS.background3,
    action: { type: "runs", value: 3 },
  },
  {
    name: 5,
    containerColor: UTILS.COLORS.background3,
    action: { type: "runs", value: 5 },
  },
  {
    name: "W",
    containerColor: "red",
    textColor: "white",
    action: { type: "wide", value: 1 },
  },
];

const otherOptions = [
  { name: "Dismiss Batsman" },
  { name: "Invalid Delivery" },
  { name: "End Inning" },
  { name: "End Match" },
  { name: "End Over" },
];
const dismissStriker = [
  { name: "Bowled" },
  { name: "Catch" },
  { name: "LBW" },
  { name: "Run Out" },
  { name: "Stumped" },
  { name: "Hit Wicket" },
  { name: "Ball Handled" },
  { name: "Obstructing Fielding" },
  { name: "Retired Hurt" },
  { name: "Timed Out" },
];

const dismissNonOptions = [
  { name: "Run Out" },
  { name: "Stumped" },
  { name: "Hit Wicket" },
  { name: "Ball Handled" },
  { name: "Obstructing Fielding" },
  { name: "Retired Hurt" },
  { name: "Timed Out" },
];
const batsmanData = [
  { title: "name", subTitle: null, data: [1, 2, 3, 4, 5] },
  { title: "new Team", subTitle: "game", data: [12, 24, 35, 0, 50] },
];

const bowlerData = [
  { title: "new Team", subTitle: null, data: [12, 24, 35, 0, 50] },
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
