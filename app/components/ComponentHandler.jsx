import { StyleSheet, Text, View } from "react-native";
import React from "react";

import InputBox from "./inputs/InputBox";
import DatePicker from "../components/inputs/DatePicker";
import OTPInputBox from "../components/inputs/OTPInputBox";
import DropDownModal from "../components/modals/DropdownModal";
import UTILS from "../utils";
import RegisterContactInput from "./inputs/RegisterContactInput";
import PowerPlayInput from "./inputs/PowerPlayInput";
import BallType from "./inputs/BallType";
import AddSelectInput from "./modals/AddSelectInput";
import LocationPicker from "./inputs/LocationPicker";
import DateTimePicker from "./inputs/DateTimePicker";

const ComponentHandler = (props) => {
  const { type } = props;

  switch (type) {
    case UTILS.INPUT_TYPE.REGISTER_CONTACT_INPUT:
      return <RegisterContactInput {...props} />;

    case UTILS.INPUT_TYPE.LOCATION_PICKER:
      return <LocationPicker {...props} />;

    case UTILS.INPUT_TYPE.DATE_PICKER:
      return <DatePicker {...props} />;

    case UTILS.INPUT_TYPE.TIME_PICKER:
      return <DatePicker {...props} />;

    case UTILS.INPUT_TYPE.DATE_TIME_PICKER:
      return <DateTimePicker {...props} />;

    case UTILS.INPUT_TYPE.OTP_INPUT_BOX:
      return <OTPInputBox {...props} />;

    case UTILS.INPUT_TYPE.DROPDOWN:
      return <DropDownModal {...props} />;

    case UTILS.INPUT_TYPE.DROPDOWN:
      return <DropDownModal {...props} />;

    case UTILS.INPUT_TYPE.POWER_PLAY:
      return <PowerPlayInput {...props} />;

    case UTILS.INPUT_TYPE.BALL_TYPE:
      return <BallType {...props} />;

    case UTILS.INPUT_TYPE.ADD_SELECT:
      return <AddSelectInput {...props} />;

    default:
      return <InputBox {...props} />;
  }
};

export default ComponentHandler;

const styles = StyleSheet.create({});
