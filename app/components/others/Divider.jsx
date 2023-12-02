import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UTILS from "../../utils";

export default function Divider({ style = {} }) {
  return (
    <View
      style={{ backgroundColor: UTILS.COLORS.background1, height: 1, ...style }}
    />
  );
}

const styles = StyleSheet.create({});
