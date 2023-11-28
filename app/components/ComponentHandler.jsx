import { StyleSheet, Text, View } from "react-native";
import React from "react";

import InputBox from "./inputs/InputBox";
import DatePicker from "../components/inputs/DatePicker";
import OTPInputBox from "../components/inputs/OTPInputBox";
import DropDownModal from "../components/modals/DropdownModal";
import UTILS from "../utils";
import RegisterContactInput from "./inputs/RegisterContactInput";

const ComponentHandler = (props) => {
  const { type } = props;

  switch (type) {
    case UTILS.INPUT_TYPE.REGISTER_CONTACT_INPUT:
      return <RegisterContactInput {...props}/>;

    case UTILS.INPUT_TYPE.DATE_PICKER:
      return <DatePicker {...props} />;

    case UTILS.INPUT_TYPE.OTP_INPUT_BOX:
      return <OTPInputBox {...props} />;

    case UTILS.INPUT_TYPE.DROPDOWN:
      return <DropDownModal {...props} />;

    default:
      return <InputBox {...props} />;
  }
};

export default ComponentHandler;

const styles = StyleSheet.create({});
