import { StyleSheet, Text, View } from "react-native";
import React from "react";

import InputBox from "./inputs/InputBox";
import INPUT_TYPE from "../utils/constants/inputType";
import CountryPickerBox from "../components/inputs/CountryPickerBox";
import DatePicker from "../components/inputs/DatePicker";
import OTPInputBox from "../components/inputs/OTPInputBox";
import PhoneNoInputBox from "../components/inputs/PhoneNoInputBox";
import DropDown from '../components/inputs/Dropdown'

const ComponentHandler = (props) => {
  const { type } = props;

console.log(props, 'sssssssssssssssssss');

  switch (type) {
    case INPUT_TYPE.COUNTRY_PICKER_BOX:
      return <CountryPickerBox {...props} />;

    case INPUT_TYPE.DATE_PICKER:
      return <DatePicker {...props} />;

    case INPUT_TYPE.OTP_INPUT_BOX:
      return <OTPInputBox {...props} />;

    case INPUT_TYPE.PHONE_NO_INPUT_BOX:
      return <PhoneNoInputBox />;

    case INPUT_TYPE.DROPDOWN:
        return <DropDown {...props}/>

    default:
      return <InputBox {...props} />;
  }
};

export default ComponentHandler;

const styles = StyleSheet.create({});
