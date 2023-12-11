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
  backgroundColor = {},
  containerStyle = {},
}) {
  console.log(backgroundColor);
  return (
    <>
      <View
        style={[
          {
            flexDirection: "row",
            padding: 10,
            // justifyContent: "space-between",
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
          style={{
            flexDirection: "row",
            flex: 3,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {data.map((i) => (
            <View key={i}>
              <Text style={[{ color: "gray", textAlign: "center" }, textStyle]}>
                {i}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
