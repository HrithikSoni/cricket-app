import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import UTILS from "../../utils";




const InputBox = (props) => {

  console.log(props, 'lllllllllllllllllllll');

  return (
    <TextInput
      style={[UTILS.STYLES.commonStyle]}
      textContentType={props?.type}
      key={props?.label}
      placeholder={props?.label}
      defaultValue={props?.value}
      onChangeText={props?.onChangeText}
    />
  );
};

export default InputBox;

const styles = StyleSheet.create({});
