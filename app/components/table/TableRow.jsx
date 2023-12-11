import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SmallGreyText from "../text/SmallGreyText";

export default function TableRow({
  title,
  subTitle,
  data,
  textStyle = {},
  titleStyle = {},
}) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          // justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1.5 }}>
          <Text style={[{ color: "blue" }, titleStyle]}>{title}</Text>
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
