import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import BottomSheetModal from "../BottomSheetModal";
import UTILS from "../../../utils";
import AppText from "../../text/AppText";

const SelectOptionModal = (props) => {
  const [boxLabel, setBoxLabel] = useState("");
  const [modal, setModal] = useState(false);
  const colors = UTILS.COLORS;

  const textStyle = {
    fontSize: 17,
    padding: 10,
    color: boxLabel ? colors.black : colors.gray2,
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setModal(true)}
        style={[UTILS.STYLES.commonStyle, styles.container]}
      >
        <AppText style={textStyle}>{boxLabel || props.boxLabel}</AppText>
      </TouchableOpacity>
      <BottomSheetModal
        {...props}
        header={props.bottomSheetHeader}
        visible={modal}
        onRequestClose={() => setModal(false)}
        onBottomSheetSelect={handleOnSelect}
      />
    </>
  );

  function handleOnSelect(selectedValue) {
    setModal(false);
    setBoxLabel(selectedValue.label);
    props.onBottomSheetSelect(selectedValue);
  }
};

export default SelectOptionModal;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: UTILS.COLORS.themeColor,
    justifyContent: "center",
  },
});
