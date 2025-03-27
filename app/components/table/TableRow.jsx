import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SmallGreyText from "../text/SmallGreyText";
import UTILS from "../../utils";

export default function TableRow({
  title,
  subTitle,
  data,
  textStyle = {},
  titleStyle = {},
  containerStyle = {},

  isSpcBtw,
}) {
  const dataContainerStyle = isSpcBtw
    ? { justifyContent: "space-between" }
    : { flex: 3, justifyContent: "space-around" };
  return (
    <View
      style={[
        {
          flexDirection: "row",
          padding: 10,
        },
        containerStyle,
      ]}
    >
      <View style={{ flex: 1.5 }}>
        <Text style={[{ color: UTILS.COLORS.themeColor }, titleStyle]}>
          {title}
        </Text>
        {subTitle && <SmallGreyText>{subTitle}</SmallGreyText>}
      </View>

      <View
        style={[
          { flexDirection: "row", alignItems: "center" },
          dataContainerStyle,
        ]}
      >
        <View
          style={[
            { flexDirection: "row", alignItems: "center" },
            dataContainerStyle,
          ]}
        >
          {data.map((i, index) => (
            <View key={index} style={{ flex: 1 }}>
              <Text style={[{ color: "gray", textAlign: "center" }, textStyle]}>
                {i === "NaN" || i === "Infinity" || !i ? "0" : i}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
