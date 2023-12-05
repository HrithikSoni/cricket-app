import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";


import AppText from "../text/AppText";
import UTILS from "../../utils";

const ImageWithTextCard = (props) => {


  const cardStyle = props.selected ? styles.selected : {}

  return (
    <TouchableOpacity style={[styles.container, cardStyle]} onPress={props.onPress}>
      <Image source={props.imgUrl} style={[styles.img]} />
      <AppText style={[styles.text]}>{props.label}</AppText>
    </TouchableOpacity>
  );
};

export default ImageWithTextCard;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 170,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
    paddingHorizontal:5,
    backgroundColor: UTILS.COLORS.gray1
  },
  selected:{
    borderWidth: 2,
    borderColor: UTILS.COLORS.black,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 20,
  },
});
