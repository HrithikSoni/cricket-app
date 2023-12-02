import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import UTILS from "../../utils";

export default function BoldText({ children, style = {} }) {
  return (
    <AppText style={{ fontSize: 16, fontWeight: "500", ...style }}>
      {children}
    </AppText>
  );
}

const styles = StyleSheet.create({});
