import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icons from "../others/Icons";
import UTILS from "../../utils";

function Undo({ onPress, marginTop }) {
  return (
    <TouchableOpacity
      style={[styles.container, { marginTop }]}
      onPress={onPress}
    >
      <Icons.Undo />
    </TouchableOpacity>
  );
}

function Ball({ onPress, marginTop }) {
  return (
    <TouchableOpacity
      style={[styles.container, { marginTop }]}
      onPress={onPress}
    >
      <Image source={require("../../assets/images/red.png")} />
    </TouchableOpacity>
  );
}

function Submit({ onPress, marginTop }) {
  return (
    <TouchableOpacity
      style={[styles.submitBtn, { marginTop }]}
      onPress={onPress}
    >
      <Icons.DoubleCheck />
    </TouchableOpacity>
  );
}

function Wicket({ onPress, marginTop }) {
  return (
    <TouchableOpacity
      style={[styles.container, { marginTop }]}
      onPress={onPress}
    >
      <Image source={require("../../assets/images/bowled2.png")} />
    </TouchableOpacity>
  );
}

function OtherOptions({ onPress, marginTop }) {
  return (
    <TouchableOpacity
      style={[styles.container, { marginTop }]}
      onPress={onPress}
    >
      <Icons.Info />
    </TouchableOpacity>
  );
}

const ScoringBtn = {
  Undo,
  Ball,
  Submit,
  Wicket,
  OtherOptions,
};

export default ScoringBtn;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  submitBtn: {
    height: 60,
    width: 60,
    borderRadius: 16,
    backgroundColor: UTILS.COLORS.themeColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
