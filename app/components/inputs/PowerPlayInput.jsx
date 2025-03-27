import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputBox from "./InputBox";
import UTILS from "../../utils";

export default function PowerPlayInput(props) {
  return (
    <View>
      <InputBox label="No of power play" onChangeText={props.onChangeText} />
      {/* <View
        style={{
          marginTop: 15,
          height: 50,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: UTILS.COLORS.background1,
        }}
      ></View> */}
    </View>
  );
}

const styles = StyleSheet.create({});
