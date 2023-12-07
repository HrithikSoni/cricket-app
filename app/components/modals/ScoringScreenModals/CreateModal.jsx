import React, { useRef } from "react";
import { Modal, StyleSheet, View, TouchableOpacity } from "react-native";

import UTILS from "../../../utils";
import Button from "../../button/Button";
import InputBox from "../../inputs/InputBox";
import HeaderWithCross from "../../others/HeaderWithCross";
import AppText from "../../text/AppText";

const CreateModal = (props) => {
  const data = useRef({});

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
          <HeaderWithCross {...props} />
          <AppText style={styles.themeColorText}>{props.title}</AppText>
          <InputBox
            label={props.label}
            onChangeText={(e) => (data.current.cityName = e)}
          />
          <Button label={"Create"} onButtonPress={() => {}} />
        </View>
      </View>
    </Modal>
  );
};

export default CreateModal;

const styles = StyleSheet.create({
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
    gap: 20,
  },
  themeColorText: {
    fontSize: 20,
    fontWeight: "700",
    color: UTILS.COLORS.themeColor,
  },
});
