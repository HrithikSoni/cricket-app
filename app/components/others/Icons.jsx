import React from "react";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  FontAwesome5,
  Foundation,
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

import UTILS from "../../utils";

const colors = UTILS.COLORS;

export const SearchIcon = () => (
  <Feather name="search" size={24} color={colors.themeColor} />
);

export const CalendarIcon = () => (
  <AntDesign name="calendar" size={24} color={colors.themeColor} />
);

export const CheckIcon = () => (
  <MaterialIcons name="check" size={20} color={colors.textColor} />
);

export const NotificationIcon = () => (
  <Ionicons name="notifications-outline" size={30} color={colors.black} />
);

export const LeftChevron = ({ onPress, style = {} }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <AntDesign name="left" size={20} color={colors.black} />
  </TouchableOpacity>
);

export const CameraIcon = () => (
  <Feather name="camera" size={30} color={colors.themeColor} />
);

export const CheveronIcon = (props) => (
  <Ionicons
    name={props?.isListVisible ? "chevron-up" : "chevron-down"}
    size={24}
    color={colors.gray2}
  />
);

export const HomeIcon = (props) => (
  <Foundation name="home" size={35} color={props?.color || colors.themeColor} />
);

export const CompassIcon = (props) => (
  <Ionicons
    name="compass"
    size={35}
    color={props?.color || colors.themeColor}
  />
);

export const CricketIcon = (props) => (
  <MaterialCommunityIcons
    name="cricket"
    size={35}
    color={props?.color || colors.themeColor}
  />
);

export const UserIcon = (props) => (
  <FontAwesome
    name="user"
    size={35}
    color={props?.color || colors.themeColor}
  />
);

export const CrossIcon = (props) => (
  <Entypo name="cross" size={30} color={props?.color || colors.textColor} />
);

const Icons = {
  SearchIcon,
  CalendarIcon,
  CheckIcon,
  CheveronIcon,
  HomeIcon,
  CompassIcon,
  CricketIcon,
  UserIcon,
  NotificationIcon,
  LeftChevron,
  CrossIcon,
  ArrowUp: ({ color = colors.themeColor, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Feather name="arrow-up-circle" size={28} color={color} />
    </TouchableOpacity>
  ),
  ArrowDown: ({ color = colors.themeColor, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Feather name="arrow-down-circle" size={28} color={color} />
    </TouchableOpacity>
  ),
};

export default Icons;

// export const CalendarIcon = (props) => (
//   <TouchableOpacity onPress={props.onPress}>
//     <AntDesign name="calendar" size={24} color={colors.gray2} />
//   </TouchableOpacity>
// );

const styles = StyleSheet.create({});
