import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../../components/button/Button";
import Icons from "../../../components/others/Icons";
import BoldText from "../../../components/text/BoldText";

import UTILS from "../../../utils";
import api from "../../../services/api";
import useRTKQuery from "../../../hooks/useRTKQuery";
import {
  useBallsLeftInInningSelector,
  useScoreDetailsSelector,
} from "../scoringServices/hooks/scoringSelectors";
import { useTeamDetailsSelector } from "../../../services/teamServices/useManageTeam";

export default function InningEndModal(props) {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);

  const { inningComplete } = useBallsLeftInInningSelector();

  const {
    matchDetails: { id: matchId },
  } = useTeamDetailsSelector();

  const { battingTeam, currentScore, currentInning } =
    useScoreDetailsSelector();

  const { request } = useRTKQuery(
    api.useAddTeamScoreMutation,
    handleInningEndSuccess
  );

  useEffect(() => {
    if (inningComplete) {
      setShow(true);
    }
  }, [inningComplete]);

  console.log(currentInning, currentScore, "ii");

  const handleInningOver = () => {
    console.log({
      matchId,
      teamId: battingTeam.id,
      score: "30",
      inning: currentInning,
    });
    request({
      matchId,
      teamId: battingTeam.id,
      score: currentScore.toString(),
      inning: currentInning,
    });
    // setShow(false);
    // handleInningEndSuccess();
  };

  function handleInningEndSuccess() {
    navigation.navigate(UTILS.SCREEN_NAMES.NAV_SCREENS.BOTTOM_TAB_NAVIGATOR);
  }
  return (
    <Modal
      // visible={true}
      visible={show}
      transparent={true}
      onRequestClose={() => setShow(false)}
    >
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <BoldText style={styles.header}>Inning Over</BoldText>
          <Icons.Close
            onPress={() => setShow(false)}
            style={{ alignSelf: "flex-end" }}
          />

          <View style={{ height: 20 }} />

          <Button
            label="Confirm"
            onButtonPress={handleInningOver}
            style={{ marginTop: 15 }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 25,
  },
  runContainer: {
    borderWidth: 2,
    borderColor: UTILS.COLORS.themeColor,
    height: 30,
    width: 30,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: UTILS.COLORS.opacity1,
    justifyContent: "center",
    alignItems: "center",
  },

  dataContainer: {
    // height: UTILS.DIMENSIONS.height - 330,
    width: UTILS.DIMENSIONS.width - 50,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    // backgroundColor: "green",
  },
  cancelBtn: {
    borderColor: UTILS.COLORS.themeColor,
    borderWidth: 2,
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },

  submitBtn: {
    backgroundColor: UTILS.COLORS.themeColor,
    borderColor: UTILS.COLORS.themeColor,
    borderWidth: 2,
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  optionsBtn: {
    padding: 14,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: UTILS.COLORS.gray1,
    marginTop: 10,
    borderWidth: 2,
  },
  optionsBtnContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 0 },
  bottomBtnContainer: { flex: 1, flexDirection: "row", marginTop: 20 },
  tabHeader: {
    backgroundColor: UTILS.COLORS.gray1,
    flex: 1,
    height: 45,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    margin: 5,
  },
});
const striker = [
  { name: UTILS.DISMISS_TYPES.BOWLED },
  { name: UTILS.DISMISS_TYPES.CATCH },
  { name: UTILS.DISMISS_TYPES.LBW },
  { name: UTILS.DISMISS_TYPES.STUMPED },
  { name: UTILS.DISMISS_TYPES.RUN_OUT },
  { name: UTILS.DISMISS_TYPES.HIT_WICKET },
  { name: UTILS.DISMISS_TYPES.BALL_HANDLED_OUT },
  { name: UTILS.DISMISS_TYPES.OBSTRUCTING_FIELDING },
  // { name: UTILS.DISMISS_TYPES.RETIRED_HURT },
  { name: UTILS.DISMISS_TYPES.TIMED_OUT },
];
