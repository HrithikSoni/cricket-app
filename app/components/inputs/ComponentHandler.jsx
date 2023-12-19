import { StyleSheet, Text, View } from "react-native";
import React from "react";

import InputBox from "./InputBox";
import DatePicker from "./DatePicker";
import OTPInputBox from "./OTPInputBox";
import DropDownModal from "../modals/DropdownModal";
import UTILS from "../../utils";
import RegisterContactInput from "./RegisterContactInput";
import PowerPlayInput from "./PowerPlayInput";
import BallType from "./BallType";

import LocationPicker from "./LocationPicker";
import DateTimePicker from "./DateTimePicker";
import MatchTypes from "./MatchTypes";
import PhoneNoInputBox from "./PhoneNoInputBox";
import AddSelectInput from "../modals/SearchAddUserModal/AddSelectInput";

const ComponentHandler = (props) => {
  const { type } = props;

  switch (type) {
    case UTILS.INPUT_TYPE.REGISTER_CONTACT_INPUT:
      return <RegisterContactInput {...props} />;

    case UTILS.INPUT_TYPE.PHONE_NO_INPUT_BOX:
      return <PhoneNoInputBox {...props} />;

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

    // case UTILS.INPUT_TYPE.DROPDOWN:
    //   return <DropDownModal {...props} />;

    case UTILS.INPUT_TYPE.POWER_PLAY:
      return <PowerPlayInput {...props} />;

    case UTILS.INPUT_TYPE.BALL_TYPE:
      return <BallType {...props} />;

    case UTILS.INPUT_TYPE.ADD_SELECT:
      return <AddSelectInput {...props} />;

    case UTILS.INPUT_TYPE.MATCH_TYPES:
      return <MatchTypes {...props} />;

    default:
      return <InputBox {...props} />;
  }
};

export default ComponentHandler;

const styles = StyleSheet.create({});
