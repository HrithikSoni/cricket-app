import React from "react";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  FontAwesome5,
  EvilIcons,
  FontAwesome,
  Ionicons,
  AntDesign,
  Zocial,
  Entypo,
  Octicons,
  Fontisto,
  SimpleLineIcons,
} from "react-native-vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import UTILS from "../utils";

export const SearchIcon = () => (
  <Feather name="search" size={24} color={UTILS.STYLES.colors.gray2} />
);

export const CalendarIcon = () => (
  <AntDesign name="calendar" size={24} color={UTILS.STYLES.colors.themeColor} />
);

export const CheckIcon = () => (
  <MaterialIcons name="check" size={20} color={UTILS.STYLES.colors.textColor} />
);

export const LeftChevoronIcon = (props) => (
  <TouchableOpacity onPress={props?.onPress}>
    <AntDesign name="left" size={20} color={UTILS.STYLES.colors.black} />
  </TouchableOpacity>
);

export const CameraIcon = () => (
  <Feather name="camera" size={30} color={UTILS.STYLES.colors.themeColor} />
);

export const CheveronIcon = (props) => (
  <Ionicons
    name={props?.isListVisible ? "chevron-up" : "chevron-down"}
    size={24}
    color= {UTILS.STYLES.colors.gray2}
  />
)

export default ICONS = {SearchIcon, CalendarIcon, CheckIcon, LeftChevoronIcon, CheveronIcon};

// export const CalendarIcon = (props) => (
//   <TouchableOpacity onPress={props.onPress}>
//     <AntDesign name="calendar" size={24} color={colors.gray2} />
//   </TouchableOpacity>
// );

const styles = StyleSheet.create({});
