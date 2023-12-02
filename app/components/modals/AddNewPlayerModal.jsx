import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Button from "../button/Button";
import UTILS from "../../utils";
import BoldText from "../text/BoldText";
import InputBox from "../inputs/InputBox";
import BattingBowlingStyle from "../inputs/BattingBowlingStyle";

export default function AddNewPlayerModal(props) {
  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent
      animationType="slide"
    >
      <View style={styles.container}>
        <TouchableOpacity style={{ flex: 1 }} onPress={props.onRequestClose} />
        <View style={styles.formContainer}>
          <BoldText style={styles.header}>Add New Player</BoldText>
          <InputBox label="Name" />
          <View style={styles.contactSpecializationContainer}>
            <InputBox label="Phone Number" style={{ flex: 1 }} />
            <View style={{ width: 10 }} />
            <InputBox label="Specialization" style={{ flex: 1 }} />
          </View>
          <BattingBowlingStyle />
          <Button
            label="Add player in team"
            //   bottom={true}
            onButtonPress={props.onRequestClose}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: { textAlign: "center", marginBottom: 20 },
  container: {
    flex: 1,
    backgroundColor: UTILS.COLORS.opacity50,
    // alignItems: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 30,
  },
  contactSpecializationContainer: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
