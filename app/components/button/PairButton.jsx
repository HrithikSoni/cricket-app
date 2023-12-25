import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import UTILS from "../../utils";

function PairBtn(props) {
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
          { backgroundColor: props?.color || UTILS.COLORS.themeColor },
          styles.btn,
        ]}
      >
        <Text style={{ color: UTILS.COLORS.textColor, fontSize: 20 }}>
          {props?.leftBtnText || "Cancel"}
        </Text>
      </TouchableOpacity>
      <View style={{ width: 20 }} />
      <TouchableOpacity
        onPress={props?.onPressRight}
        style={[
          {
            backgroundColor: props?.color,
            borderColor: UTILS.COLORS.black,
            borderWidth: 1,
          },
          styles.btn,
        ]}
      >
        <Text style={{ color: UTILS.COLORS.black, fontSize: 20 }}>
          {props?.rightBtnText || "Save"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

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
