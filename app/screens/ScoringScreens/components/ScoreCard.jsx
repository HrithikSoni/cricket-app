import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../../../components/text/AppText";
import SmallGreyText from "../../../components/text/SmallGreyText";
import { useScoreDetails } from "../../../services/scoringServices/useScoringEngine";
import UTILS from "../../../utils";

export default function Scorecard() {
  const [showChangeBowler, setShowChangeBowler] = useState(false);
  const { currentScore, wickets, overs, ballsInCurrentOver, playingBatsman } =
    useScoreDetails();

  useEffect(() => {
    setShowChangeBowler(true);
  }, [overs]);

  return (
    <>
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
      {/* <ChangeBowlerModal
        visible={showChangeBowler}
        onRequestClose={() => setShowChangeBowler(false)}
      /> */}
    </>
  );
}

export const styles = StyleSheet.create({
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
});
