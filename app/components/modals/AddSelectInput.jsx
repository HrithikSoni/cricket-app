import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import UTILS from "../../utils";
import AppText from "../text/AppText";
import BottomSheetModal from "../modals/BottomSheetModal";

export default function AddSelectInput(props) {
  const [selectedValue, setSelectedValue] = useState("");
  const [modal, setModal] = useState(false);

  function handleOnSelect(option){
    setSelectedValue(option.label)
    props.onBottomSheetSelect(option.value)
    setModal(false)
  }

  return (
    <View style={[UTILS.STYLES.commonStyle, styles.inputContainer]}>
      <AppText style={styles.label}>{selectedValue || props.label}</AppText>
      <SelectorBtn />
    </View>
  );
  function SelectorBtn() {
    return (
      <>
        <TouchableOpacity style={styles.selectorBtn} onPress={() => setModal(true)}>
          <AppText style={{ color: UTILS.COLORS.themeColor }}>Add</AppText>
        </TouchableOpacity>
        <BottomSheetModal
          visible={modal}
          onRequestClose={() => setModal(false)}
          {...props}
          onBottomSheetSelect={handleOnSelect}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: UTILS.COLORS.themeColor,
    fontSize: 16,
  },
  selectorBtn: {
    height: 35,
    width: 74,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: UTILS.COLORS.border1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: UTILS.COLORS.background1,
  },
});
