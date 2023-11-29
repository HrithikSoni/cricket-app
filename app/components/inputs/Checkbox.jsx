import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { CheckIcon } from "../constants/Icons";
import UTILS from "../../utils";

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
          {isChecked && <CheckIcon />}
        </View>
        <Text style={{ marginLeft: 8 }}>{props?.label || "Checkbox"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
