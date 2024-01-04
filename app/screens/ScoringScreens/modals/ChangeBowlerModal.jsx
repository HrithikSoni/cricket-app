import React, { useRef } from "react";
import { Modal, StyleSheet, View } from "react-native";

import Button from "../../../components/button/Button";
import OptionsSelectGrid from "../../../components/grid/OptionsSelectGrid";
import Icons from "../../../components/others/Icons";
import BoldText from "../../../components/text/BoldText";
import UTILS from "../../../utils";
import { useAssignBowler } from "../../../services/scoringServices/hooks/scoringDispatches";
import { useValidBowlerSelector } from "../../../services/scoringServices/hooks/scoringSelectors";

export default function ChangeBowlerModal(props) {
  const { playingFielders, invalidBowlers } = useValidBowlerSelector();

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
          <BoldText style={styles.header}>Next Bowler</BoldText>
          <Icons.Close
            onPress={props.onRequestClose}
            style={{ alignSelf: "flex-end" }}
          />
          <OptionsSelectGrid
            headerTitle={null}
            data={playingFielders}
            invalidData={invalidBowlers}
            onGridItemPress={(i) => (bowler.current = i)}
          />
          {/* <BottomBtn {...props} onSubmit={handleSubmit} /> */}
          <Button
            label="Confirm"
            onButtonPress={handleSubmit}
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
    marginBottom: 10,
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
  },
});
