import React, { useRef } from "react";
import { Modal, StyleSheet, View } from "react-native";
import {
  useAssignBowler,
  useScoreDetails,
} from "../../../services/scoringServices/useScoringEngine";

import UTILS from "../../../utils";
import BottomBtn from "../../../components/button/BottomBtn";
import OptionsSelectGrid from "../../../components/grid/OptionsSelectGrid";

export default function ChangeBowlerModal(props) {
  const { playingFielders, bowlerStat, overs } = useScoreDetails();

  const invalidBowlers = playingFielders.map((i, index) => {
    if (i.overs.length !== 0) {
      return overs + 1 - i.overs[i.overs.length - 1] < 1 ? index : null;
    }
    return null;
  });

  const bowler = useRef({ id: null });

  const dispatchNextBowler = useAssignBowler();

  const handleSubmit = () => {
    dispatchNextBowler(bowler.current.id);
    props.onRequestClose();
  };

  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}
    >
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <OptionsSelectGrid
            headerTitle={"Choose Next Bowler"}
            data={playingFielders}
            invalidData={invalidBowlers}
            onGridItemPress={(i) => (bowler.current = i)}
          />
          <BottomBtn {...props} onSubmit={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  },
});
const dismiss = [
  { name: "Bowled", strikerOnly: true },
  { name: "Catch", strikerOnly: true },
  { name: "LBW", strikerOnly: true },
  { name: "Run Out" },
  { name: "Stumped" },
  { name: "Hit Wicket" },
  { name: "Ball Handled" },
  { name: "Obstructing Fielding" },
  { name: "Retired Hurt" },
  { name: "Timed Out" },
];
