import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import BoldText from "../text/BoldText";
import UTILS from "../../utils";
import AppText from "../text/AppText";
import Button from "../button/Button";

export default function BattingBowlingStyle(props) {
  const battingBowlingData = useRef({});

  const bowlData = [
    {
      imgUrl: require("../../assets/images/rightBowl.png"),
      value: "RIGHT_HANDED",
      label: "Right Hand",
    },
    {
      imgUrl: require("../../assets/images/leftBowl.png"),
      value: "LEFT_HANDED",
      label: "Left Hand",
    },
  ];

  const batData = [
    {
      imgUrl: require("../../assets/images/rightBat.png"),
      value: "RIGHT_HANDED",
      label: "Right Hand",
    },
    {
      imgUrl: require("../../assets/images/leftBat.png"),
      value: "LEFT_HANDED",
      label: "Left Hand",
    },
  ];
  const form = [
    { label: "Batting Style", customKey: "battingStyle", data: batData },
    { label: "Bowling Style", customKey: "bowlingStyle", data: bowlData },
  ];

  function handleOnSelect(e, customKey) {
    battingBowlingData.current[customKey] = e.value;
    props.onBattinBowlingSelect(battingBowlingData.current);
  }

  return (
    <View>
      {form.map((item, index) => {
        return (
          <View key={index}>
            <BoldText>{item.label}</BoldText>
            <SelectionBtn
              data={item.data}
              {...props}
              selectedValue={(e) => handleOnSelect(e, item.customKey)}
            />
          </View>
        );
      })}
    </View>
  );
}
function SelectionBtn(props) {
  const [selectedBtn, setSelectedBtn] = useState(0);

  function handleOnSelect(e, i) {
    props.selectedValue(e);
    setSelectedBtn(i);
  }

  return (
    <View style={styles.styleContainer}>
      {props.data.map((e, i) => {
        const leftMargin = i == 1 ? styles.btnSpace : {};
        const selectedStyle = selectedBtn === i ? styles.selected : {};

        return (
          <TouchableOpacity
            style={[styles.btn, leftMargin, selectedStyle]}
            key={i}
            onPress={() => handleOnSelect(e, i)}
          >
            <Image source={e.imgUrl} />
            <AppText style={styles.label}>{e.label}</AppText>
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
