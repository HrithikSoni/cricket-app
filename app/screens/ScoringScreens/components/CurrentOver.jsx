import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import AppText from "../../../components/text/AppText";
import UTILS from "../../../utils";
import { useScoreDetails } from "../scoringServices/hooks/scoringSelectors";

export default function CurrentOver() {
  const { currentOver } = useScoreDetails();
  const over = currentOver.bowls;

  const pLength = 6 - (over?.length || 0);
  const placeHolder = new Array(pLength > 0 ? pLength : 0).fill(0);

  return (
    <View style={styles.btnContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.grid}>
          {over?.length > 0 &&
            over.map((i, index) => <ScoreChip {...i} key={index} />)}

          {placeHolder.map((i, index) => (
            <View style={[styles.scoreBtn, styles.placeHolder]} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function ScoreChip({ run, dismissedBatsman, deliveryType }) {
  let bg = UTILS.COLORS.background3;
  let render = run;
  let textColor = "black";
  let ballStatus = null;

  if (run == 6) {
    bg = "green";
    textColor = "white";
  }
  if (run == 4) {
    bg = UTILS.COLORS.themeColor;
    textColor = "white";
  }

  if (dismissedBatsman) {
    render = "W";
    bg = "red";
    textColor = "white";
  }

  if (deliveryType == UTILS.DELIVERY_STATUS.NO_BALL) ballStatus = "NB";
  if (deliveryType == UTILS.DELIVERY_STATUS.WIDE) ballStatus = "W";
  if (deliveryType == UTILS.DELIVERY_STATUS.LEG_BYES) ballStatus = "LB";
  if (deliveryType == UTILS.DELIVERY_STATUS.BYES) ballStatus = "B";
  if (deliveryType == UTILS.DELIVERY_STATUS.DEAD_BALL) ballStatus = "DB";

  return (
    <View style={[styles.scoreBtn, { backgroundColor: bg }]}>
      <AppText style={{ fontSize: 20, color: textColor }}>{render}</AppText>
      {ballStatus && (
        <AppText style={{ fontSize: 10, color: textColor }}>
          {ballStatus}
        </AppText>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
  },

  placeHolder: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: UTILS.COLORS.themeColor,
  },

  btnContainer: {
    marginTop: 15,
    // marginLeft: 20,
  },
  scoreBtn: {
    backgroundColor: UTILS.COLORS.background3,
    height: 47,
    width: 47,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    marginTop: 5,
  },
});
