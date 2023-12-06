import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UTILS from "../../utils";
import RadioButton from "../button/RadioButton";
import { TouchableOpacity } from "react-native";
import AppText from "../text/AppText";

function RadioBtnWithTextComp(props) {
  const [isSelected, setIsSelected] = useState(null);

  function handleOnSelect(item) {
    setIsSelected(item.id);
    props.onSelect(item);
  }

  return (
    <View style={UTILS.STYLES.rowSpaceBtw}>
      {props.data.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleOnSelect(item)}
          key={index}
          style={styles.radioBtnContainer}
        >
          <RadioButton checked={isSelected == item.id} />
          <AppText>{item.label}</AppText>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default RadioBtnWithTextComp;

const styles = StyleSheet.create({
  radioBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: UTILS.COLORS.themeColor,
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 10,
    marginVertical: 10,
    width: "45%",
  },
});
