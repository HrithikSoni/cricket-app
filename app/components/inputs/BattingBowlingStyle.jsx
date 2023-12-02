import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BoldText from "../text/BoldText";
import UTILS from "../../utils";
import AppText from "../text/AppText";

export default function BattingBowlingStyle() {
  const bowlImages = [
    require("../../assets/images/rightBowl.png"),
    require("../../assets/images/leftBowl.png"),
  ];

  const batImages = [
    require("../../assets/images/rightBat.png"),
    require("../../assets/images/leftBat.png"),
  ];

  return (
    <View>
      <BoldText>Batting Style</BoldText>
      <SelectionBtn data={batImages} />
      <BoldText>Bowling Style</BoldText>
      <SelectionBtn data={bowlImages} />
    </View>
  );
}
function SelectionBtn({ data }) {
  const [selectedBtn, setSelectedBtn] = useState(0);

  return (
    <View style={styles.styleContainer}>
      {data.map((e, i) => {
        const leftMargin = i == 1 ? styles.btnSpace : {};
        const selectedStyle = selectedBtn === i ? styles.selected : {};

        return (
          <TouchableOpacity
            style={[styles.btn, leftMargin, selectedStyle]}
            key={i}
            onPress={() => setSelectedBtn(i)}
          >
            <Image source={e} />
            <AppText style={styles.label}> Right Hand</AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  styleContainer: {
    flexDirection: "row",
    marginVertical: 24,
  },
  btn: {
    height: 90,
    width: 95,
    borderRadius: 12,
    backgroundColor: UTILS.COLORS.background1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnSpace: {
    marginLeft: 25,
  },
  selected: {
    borderWidth: 3,
    borderColor: UTILS.COLORS.themeColor,
  },
  label: {
    fontSize: 12,
    marginTop: 5,
  },
});
