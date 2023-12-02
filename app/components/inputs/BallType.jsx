import { StyleSheet, Image, View } from "react-native";
import React from "react";
import AppText from "../text/AppText";
import UTILS from "../../utils";

export default function BallType() {
  const balls = [
    { img: require("../../assets/images/red.png") },
    { img: require("../../assets/images/green.png") },
    { img: require("../../assets/images/white.png") },
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <AppText style={{ fontWeight: "500", fontSize: 16 }}>Ball Type</AppText>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 15,
        }}
      >
        {balls.map((i, index) => (
          <View
            key={index}
            style={{
              backgroundColor: UTILS.COLORS.background1,
              height: 50,
              width: 65,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
              borderRadius: 14,
            }}
          >
            <Image source={i.img} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
