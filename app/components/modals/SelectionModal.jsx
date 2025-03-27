import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import UTILS from "../../utils";
import AppText from "../text/AppText";
import Icons from "../others/Icons";

export default function SelectionModal(props) {
  return (
    <Modal visible={props.visible} transparent>
      <View style={styles.modalContainer}>
        {props.selections.map((i) => (
          <TouchableOpacity
            key={i.name}
            style={styles.btn}
            onPress={() => props.onDone(i)}
          >
            <AppText>{i.name}</AppText>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[UTILS.STYLES.squareBtn, styles.position]}
          onPress={() => props.onDone(null)}
        >
          <Icons.CrossIcon />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: UTILS.COLORS.opacity50,
    alignItems: "center",
    justifyContent: "center",
  },
  position: {
    position: "absolute",
    bottom: 120,
    left: (UTILS.DIMENSIONS.width - 60) / 2,
  },
  btn: {
    height: 60,
    width: 195,
    marginBottom: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
});
