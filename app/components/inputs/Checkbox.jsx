import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import UTILS from "../../utils";
import Icons from "../others/Icons";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 4,
            borderWidth: 2,
            borderColor: isChecked ? UTILS.COLORS.themeColor : "black",
            backgroundColor: isChecked
              ? UTILS.COLORS.themeColor
              : "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isChecked && <Icons.CheckIcon />}
        </View>
        <Text style={{ marginLeft: 8 }}>{props?.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
