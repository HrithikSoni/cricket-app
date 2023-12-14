import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import UTILS from "../../utils";

const style = UTILS.STYLES;

const InputBox = (props) => {
  return (
    <View style={[style.commonStyle, styles.container]}>
      {props?.icon && <View style={[styles.iconStyle]}>{props?.icon}</View>}
      <TextInput
        style={styles.textInput}
        textContentType={props?.textContentType}
        key={props?.key}
        placeholder={props?.label}
        defaultValue={props?.value}
        onChangeText={props?.onChangeText}
        placeholderTextColor={UTILS.COLORS.gray2}
        secureTextEntry={props?.isSecureText}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    fontSize: 17,
  },
  iconStyle: {
    marginRight: 10,
  },
});
