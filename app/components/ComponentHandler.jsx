import { StyleSheet, Text, View } from "react-native";
import React from "react";

import InputBox from "./inputs/InputBox";
import CountryPickerBox from "../components/inputs/CountryPickerBox";
import DatePicker from "../components/inputs/DatePicker";
import OTPInputBox from "../components/inputs/OTPInputBox";
import PhoneNoInputBox from "../components/inputs/PhoneNoInputBox";
import DropDownModal from "../components/modals/DropdownModal";
import UTILS from "../utils";
import PowerPlayInput from "./inputs/PowerPlayInput";
import BallType from "./inputs/BallType";
import AddSelectInput from "./modals/AddSelectInput";

const ComponentHandler = (props) => {
  const { type } = props;

  // console.log(props, 'sssssssssssssssssss');

  switch (type) {
    case UTILS.INPUT_TYPE.COUNTRY_PICKER_BOX:
      return <CountryPickerBox {...props} />;

    case UTILS.INPUT_TYPE.DATE_PICKER:
      return <DatePicker {...props} />;

    case UTILS.INPUT_TYPE.TIME_PICKER:
      return <DatePicker {...props} />;

    case UTILS.INPUT_TYPE.OTP_INPUT_BOX:
      return <OTPInputBox {...props} />;

    case UTILS.INPUT_TYPE.PHONE_NO_INPUT_BOX:
      return <PhoneNoInputBox {...props} />;

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
