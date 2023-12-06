import React, { useRef, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import UTILS from "../../../utils";
import RadioButton from "../../button/RadioButton";
import Icons from "../../others/Icons";
import AppText from "../../text/AppText";
import SelectOptionModal from "./SelectOptionModal";
import Button from "../../button/Button";
import RadioBtnWithTextComp from "../RadioBtnWithTextComp";

const style = UTILS.STYLES;
const colors = UTILS.COLORS;

const RetiredHurtModal = (props) => {
  const retiredHurtBatsmanData = useRef({});

  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent
      animationrightText="slide"
    >
      <View style={styles.container}>
        <TouchableOpacity style={{ flex: 1 }} onPress={props.onRequestClose} />
        <View style={styles.formContainer}>
          <View style={style.rowSpaceBtw}>
            <AppText style={styles.header}>Retired Hurt</AppText>
            <Icons.CrossIcon
              onPress={props.onRequestClose}
              color={colors.themeColor}
            />
          </View>
          <View style={styles.batsmanDetailContainer}>
            <AppText style={style.commonTextStyle}>
              Retired Hurt Batsman
            </AppText>
            <RadioBtnWithTextComp
              data={batsManData}
              onSelect={(e) =>
                (retiredHurtBatsmanData.current.retiredHurtBatsman = e.id)
              }
            />
          </View>
          <View style={styles.batsmanDetailContainer}>
            <AppText style={style.commonTextStyle}>New Batsman</AppText>
            <SelectOptionModal
              data={playerData}
              boxLabel={"Select A Batsman"}
              onBottomSheetSelect={(e) =>
                (retiredHurtBatsmanData.current.newBatsMan = e)
              }
            />
          </View>
          <View style={styles.btnContainer}>
            <Button
              label={"Done"}
              onButtonPress={() => console.log(retiredHurtBatsmanData.current)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const playerData = [
  { id: 1, label: "Jason", rightText: "BatsMan" },
  { id: 2, label: "Jerome", rightText: "BatsMan" },
  { id: 3, label: "Fransis", rightText: "BatsMan" },
  { id: 4, label: "Arlene", rightText: "BatsMan" },
  { id: 5, label: "Darele", rightText: "BatsMan" },
  { id: 6, label: "Kathrene", rightText: "BatsMan" },
  { id: 7, label: "Jason", rightText: "BatsMan" },
  { id: 8, label: "Fransis", rightText: "BatsMan" },
  { id: 9, label: "Kathrene", rightText: "BatsMan" },
  { id: 10, label: "Jerome", rightText: "BatsMan" },
];

const batsManData = [
  {
    id: 1,
    label: "BatsMan A",
  },
  {
    id: 2,
    label: "BatsMan B",
  },
];

export default RetiredHurtModal;

const styles = StyleSheet.create({
  header: { fontSize: 20, marginVertical: 10, fontWeight: "700" },
  container: {
    flex: 1,
    backgroundColor: UTILS.COLORS.opacity50,
    // alignItems: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 30,
  },
  batsmanDetailContainer: {
    marginTop: 10,
  },
  btnContainer: {
    marginTop: 20,
  },
});
