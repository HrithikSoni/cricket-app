import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


import AppText from "../text/AppText";
import UTILS from "../../utils";

const ImageWithTextCard = (props) => {

  const cardStyle = props.isSelected ? [styles.container, styles.selected] : styles.container

  return (
    <TouchableOpacity style={cardStyle} onPress={props.onPress}>
      <Image source={props.imgUrl} style={[styles.img]} />
      <AppText style={[styles.text]}>{props.label}</AppText>
    </TouchableOpacity>
  );
};

export default ImageWithTextCard;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 165,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginVertical: 10,
  },
  selected:{
    borderRadius: 1,
    borderColor: UTILS.COLORS.black
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
