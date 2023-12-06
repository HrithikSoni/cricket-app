import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import UTILS from "../../utils";

const RadioButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <View
        style={{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: props.checked ? UTILS.COLORS.themeColor : "black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.checked && (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: UTILS.COLORS.themeColor,
            }}
          />
        )}
      </View>
      <Text style={{ marginLeft: 10 }}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
