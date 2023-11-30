import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import UTILS from "../../utils";

const InputBox = (props) => {
  return (
    <TextInput
      style={[UTILS.STYLES.commonStyle]}
      textContentType={props?.textContentType}
      key={props?.key}
      placeholder={props?.label}
      defaultValue={props?.value}
      onChangeText={props?.onChangeText}
      placeholderTextColor={UTILS.COLORS.gray2}
    />
  );
};

export default InputBox;

const styles = StyleSheet.create({});
