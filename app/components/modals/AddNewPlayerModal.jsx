import React, { useRef } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";


import UTILS from "../../utils";
import Button from "../button/Button";
import ToggleButton from "../button/ToggleButton";
import BattingBowlingStyle from "../inputs/BattingBowlingStyle";
import InputBox from "../inputs/InputBox";
import BoldText from "../text/BoldText";

export default function AddNewPlayerModal(props) {
  const playerData = useRef({});

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
            <InputBox label="Phone Number" />
            <ToggleButton
            label={"Specialization"}
            option1={"Batsman"}
            option2={"Bowler"}
            onToggleSelect={(e) => (playerData.current.Specialization = e)
            }
          />
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
  },
});
