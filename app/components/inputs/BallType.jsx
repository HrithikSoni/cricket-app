import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AppText from "../text/AppText";
import UTILS from "../../utils";
import BoldText from "../text/BoldText";

export default function BallType(props) {
  const [selected, setSelected] = useState(null);
  const balls = [
    { name: "RED_BALL", img: require("../../assets/images/red.png") },
    { name: "TENNIS_BALL", img: require("../../assets/images/green.png") },
    { name: "WHITE_BALL", img: require("../../assets/images/white.png") },
  ];

  function handleOnPress(index) {
    setSelected(index);
    props.onAppend({ ballType: balls[index].name });
  }
  return (
    <View style={styles.container}>
      <BoldText>Ball Type</BoldText>
      <View style={styles.iconContainer}>
        {balls.map((i, index) => {
          const selectedStyle = selected == index ? styles.selected : {};

          return (
            <TouchableOpacity
              key={index}
              style={[styles.icons, selectedStyle]}
              onPress={() => handleOnPress(index)}
            >
              <Image source={i.img} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  icons: {
    backgroundColor: UTILS.COLORS.background1,
    height: 50,
    width: 65,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 14,
  },
  selected: {
    borderWidth: 2,
    borderColor: UTILS.COLORS.themeColor,
  },
});
