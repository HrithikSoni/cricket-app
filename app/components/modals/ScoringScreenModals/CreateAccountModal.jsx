import React, { useRef } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import UTILS from "../../../utils";
import ComponentHandler from "../../inputs/ComponentHandler";
import BottomSheetHeader from "../../others/BottomSheetHeader";
import Button from "../../button/Button";

const CreateAccountModal = (props) => {
  const createAccountData = useRef({});

  const form = [
    {
      label: "Name",
      key: "name",
    },
    {
      type: UTILS.INPUT_TYPE.LOCATION_PICKER,
    },
    {
      key: "contact",
      type: UTILS.INPUT_TYPE.PHONE_NO_INPUT_BOX,
      isVerify: true,
    },
  ];

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
          <BottomSheetHeader header={"Create Account"} {...props} />
          {form.map((item, index) => (
            <ComponentHandler
              {...item}
              type={item?.type}
              key={index}
              onChangeText={(e) => (createAccountData.current[item.key] = e)}
              onLocationSelect={(e) =>
                (createAccountData.current = {
                  ...createAccountData.current,
                  ...e,
                })
              }
              onOtpInput={(e) => (createAccountData.current.otp = e)}
            />
          ))}
          <Button label={"Create Account"} onButtonPress={() => {}} />
        </View>
      </View>
    </Modal>
  );
};

export default CreateAccountModal;

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
    gap: 10,
  },
});
