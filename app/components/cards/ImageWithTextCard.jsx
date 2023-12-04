import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";


import AppText from "../text/AppText";
import UTILS from "../../utils";

const ImageWithTextCard = (props) => {
  const [selected, setSelected] = useState(null);

  const cardStyle = selected === props.value? styles.selected : {}

  return (
    <TouchableOpacity style={[styles.container, cardStyle]} onPress={() => handleOnSelect(props.value)}>
      <Image source={props.imgUrl} style={[styles.img]} />
      <AppText style={[styles.text]}>{props.label}</AppText>
    </TouchableOpacity>
  );

  function handleOnSelect(option){
    setSelected(option);
    props.handleOnPress(option)
  }
};

export default ImageWithTextCard;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 170,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 30,
    borderColor: UTILS.COLORS.textColor,
    paddingHorizontal: 10
  },
  selected:{
    borderWidth: 2,
    borderColor: UTILS.COLORS.themeColor,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 20,
  },
});
