import React, { useRef } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import UTILS from "../../../utils";
import Button from "../../button/Button";
import InputBox from "../../inputs/InputBox";
import BottomSheetHeader from "../../others/BottomSheetHeader";
import api from "../../../services/api";
import useRTKQuery from "../../../hooks/useRTKQuery";

export default function AddNewPersonModal(props) {
  const personData = useRef({ role: props.role });

  const { request: addUser } = useRTKQuery(
    api.useAddUmpireMutation,
    handleUserCreatedSuccess,
    handleUserCreatedFail
  );

  // const [request, details] = api.useAddUmpireMutation();

  function handleUserCreatedSuccess() {
    props.onRequestClose();
  }
  function handleUserCreatedFail(e) {
    props.onRequestClose();
  }

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
          <BottomSheetHeader {...props} header={props.onAddingHeader} />
          <InputBox
            label="Name"
            onChangeText={(e) => (personData.current.firstName = e)}
          />
          <View style={styles.contactSpecializationContainer}>
            <InputBox
              label="Phone Number"
              onChangeText={(e) => (personData.current.contact = e)}
            />
          </View>
          <Button
            label="Add"
            onButtonPress={() => addUser(personData.current)}
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
