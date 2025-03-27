import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UTILS from "../../utils";
import AppText from "./AppText";

export default function SmallGreyText({ children, style = {} }) {
  return (
    <AppText style={{ fontSize: 12, color: UTILS.COLORS.gray2, ...style }}>
      {children}
    </AppText>
  );
}

const styles = StyleSheet.create({});
