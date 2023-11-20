import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";


import { commonStyle } from "../constants/styles";

const InputBox = (props) => {

  console.log(props?.name, 'zzzzzzz');

  return (
    <TextInput
      style={[commonStyle]}
      textContentType={props?.type}
      key={props?.id}
      placeholder={props?.name}
      defaultValue={props?.value}
      onChangeText={props?.onChangeText}
    />
  );
};

export default InputBox;

const styles = StyleSheet.create({});
