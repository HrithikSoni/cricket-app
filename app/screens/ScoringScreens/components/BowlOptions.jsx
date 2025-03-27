import React, { useState, memo } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "../../../components/text/AppText";
import UTILS from "../../../utils";

export default function BowlOptions({ onBowlTypeSelect }) {
  const [selected, setSelected] = useState(null);

  const handleOptionPress = (i, index) => {
    setSelected((p) => {
      if (p !== index) {
        onBowlTypeSelect(i.value);
        return index;
      } else {
        onBowlTypeSelect(null);
        return null;
      }
    });
  };

  return (
    <ScrollView
      style={{ marginTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row" }}>
        {invalidBowl.map((i, index) => {
          const backgroundColor =
            selected == index ? "black" : UTILS.COLORS.gray1;
          const textColor = selected == index ? "white" : "black";

          return (
            <TouchableOpacity
              key={index}
              style={[styles.btn, { backgroundColor }]}
              onPress={() => handleOptionPress(i, index)}
            >
              <AppText style={{ color: textColor }}>{i.label}</AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const invalidBowl = [
  { label: "No Ball", value: UTILS.DELIVERY_STATUS.NO_BALL },
  { label: "Wide", value: UTILS.DELIVERY_STATUS.WIDE },
  { label: "Leg Bye", value: UTILS.DELIVERY_STATUS.LEG_BYES },
  { label: "Byes", value: UTILS.DELIVERY_STATUS.BYES },
  { label: "Dead Bowl", value: UTILS.DELIVERY_STATUS.DEAD_BALL },
];

const styles = StyleSheet.create({
  btn: {
    padding: 14,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: UTILS.COLORS.gray1,
  },
});
