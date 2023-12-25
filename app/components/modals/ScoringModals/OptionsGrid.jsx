import { TouchableOpacity, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppText from "../../text/AppText";
import DismissBatsmanModal from "./DismissBatsmanModal";
import UTILS from "../../../utils";
import InvalidDeliveryModal from "./InvalidDeliveryModal";

const dismissBatsman = "dismissBatsman";

export function OptionsGrid({ headerTitle }) {
  const [showModal, setShowModal] = useState(null);

  function handleOnPress(i) {
    if (i.name == otherOptions[0].name) {
      setShowModal(otherOptions[0].name);
    }

    if (i.name == otherOptions[1].name) {
      setShowModal(otherOptions[1].name);
    }
  }

  return (
    <>
      <View style={{ marginTop: 15 }}>
        <AppText>{headerTitle}</AppText>
        <View
          style={[
            styles.optionsBtnContainer,
            { flexDirection: "row", flexWrap: "wrap", marginTop: 0 },
          ]}
        >
          {otherOptions.map((i) => (
            <TouchableOpacity
              key={i.name}
              onPress={() => handleOnPress(i)}
              style={[styles.optionsBtn, { marginTop: 10 }]}
            >
              <AppText>{i.name}</AppText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <DismissBatsmanModal
        visible={showModal == otherOptions[0].name}
        onRequestClose={() => setShowModal(null)}
      />

      <InvalidDeliveryModal
        visible={showModal == otherOptions[1].name}
        onRequestClose={() => setShowModal(null)}
      />
    </>
  );
}
const otherOptions = [
  { name: "Dismiss Batsman" },
  { name: "Invalid Delivery" },
  { name: "End Inning" },
  { name: "End Match" },
  { name: "End Over" },
];
export const styles = StyleSheet.create({
  optionsBtn: {
    padding: 14,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: UTILS.COLORS.gray1,
  },
  optionsBtnContainer: {
    marginTop: 15,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
});
