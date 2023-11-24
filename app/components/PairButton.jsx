import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


import UTILS from "../utils";

const PairBtn = (props) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginVertical:
            props?.marginVertical == 0 ? props?.marginVertical : 35,
        },
      ]}
    >
      <TouchableOpacity
        onPress={props?.onPressLeft}
        style={[
          { backgroundColor: props?.color || UTILS.STYLES.colors.themeColor },
          styles.btn,
        ]}
      >
        <Text style={{ color: UTILS.STYLES.colors.textColor, fontSize: 20 }}>
          {props?.leftBtnText || "Cancel"}
        </Text>
      </TouchableOpacity>
      <View style={{ width: 50 }} />
      <TouchableOpacity
        onPress={props?.onPressRight}
        style={[
          {
            backgroundColor: props?.color,
            borderColor: UTILS.STYLES.colors.black,
            borderWidth: 1,
          },
          styles.btn,
        ]}
      >
        <Text style={{ color: UTILS.STYLES.colors.black, fontSize: 20 }}>
          {props?.rightBtnText || "Save"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PairBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
  },
  btn: {
    borderRadius: 15,
    height: 57,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
