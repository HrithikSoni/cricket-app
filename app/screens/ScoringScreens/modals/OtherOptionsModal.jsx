import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import Button from "../../../components/button/Button";
import Icons from "../../../components/others/Icons";
import AppText from "../../../components/text/AppText";
import BoldText from "../../../components/text/BoldText";
import UTILS from "../../../utils";

export default function OtherOptionsModal(props) {
  const [selectedValue, setSelectedValue] = useState({});

  const handleSubmit = () => {
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
          <BoldText style={styles.header}>Other Options</BoldText>
          <Icons.Close
            onPress={props.onRequestClose}
            style={{ alignSelf: "flex-end" }}
          />
          <View style={{ height: 20 }} />
          {matchEvents.map((i) => {
            const bg =
              selectedValue?.label === i.label
                ? UTILS.COLORS.themeColor
                : UTILS.COLORS.gray1;
            const textColor =
              selectedValue?.label === i.label ? "white" : "black";
            return (
              <TouchableOpacity
                key={i.label}
                style={[styles.btn, { backgroundColor: bg }]}
                onPress={() => setSelectedValue(i)}
              >
                <AppText style={{ color: textColor, fontSize: 16 }}>
                  {i.label}
                </AppText>
              </TouchableOpacity>
            );
          })}
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
const matchEvents = [
  { label: "End Over", value: "End Over" },
  { label: "End Inning", value: "End Inning" },
  { label: "End Match", value: "End Match" },
  { label: "Retired Hurt", value: "Retired Hurt" },
];
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
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 10,
  },
});
