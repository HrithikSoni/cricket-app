import React, { useRef } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import UTILS from "../../../utils";
import Button from "../../button/Button";
import Checkbox from "../../inputs/Checkbox";
import BottomSheetHeader from "../../others/BottomSheetHeader";
import AppText from "../../text/AppText";
import SelectOptionModal from "./SelectOptionModal";

const style = UTILS.STYLES;
const colors = UTILS.COLORS;

const FallOfWicketModal = (props) => {
  const fallOfWicketData = useRef({});

  const form = [
    {
      title: "How Wicket Fall?",
      boxLabel: "Select Wicket Type",
      data: wicketTypeData,
      bottomSheetHeader: "Select Wicket Type",
      onBottomSheetSelect: (e) =>
        (fallOfWicketData.current.wicketType = e.label),
    },
    {
      title: "Bowler Name",
      boxLabel: "Select Bowler",
      data: playerData,
      bottomSheetHeader: "Select Bowler",
      onBottomSheetSelect: (e) => (fallOfWicketData.current.bowlerName = e),
    },
    {
      title: "New Batsman",
      boxLabel: "Select Batsman",
      data: playerData,
      bottomSheetHeader: "Select Batsman",
      onBottomSheetSelect: (e) => (fallOfWicketData.current.batsManName = e),
    },
  ];

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
          <BottomSheetHeader header={"Fall Of Wicket"} {...props} />
          <AppText style={styles.themeColorText}>Run</AppText>
          <View style={[style.rowCenter, styles.runCardsCon]}>
            {runCardData.map((item, index) => (
              <TouchableOpacity
                onPress={() => (fallOfWicketData.current.runs = item.label)}
                key={index}
                style={styles.runCardStyle}
              >
                <AppText style={[style.center, styles.text]}>
                  {item.label}
                </AppText>
              </TouchableOpacity>
            ))}
          </View>
          <View style={[style.commonStyle, styles.runCon]}>
            <AppText style={[styles.text, { color: colors.black }]}>
              {fallOfWicketData.current.runs}
            </AppText>
          </View>
          <View style={style.rowSpaceBtw}>
            <AppText style={styles.themeColorText}>Out</AppText>
            <Checkbox />
          </View>
          {form.map((item, index) => (
            <BottomSheetList {...item} key={index} />
          ))}
          <Button
            label={"Done"}
            onButtonPress={() => console.log(fallOfWicketData.current)}
          />
        </View>
      </View>
    </Modal>
  );

  function BottomSheetList(props) {
    return (
      <>
        <AppText style={styles.title}>{props.title}</AppText>
        <SelectOptionModal {...props} />
      </>
    );
  }
};

const runCardData = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
];

const wicketTypeData = [
  { id: 1, label: "Run Out", value: "RUN_OUT" },
  { id: 2, label: "Catch Out", value: "CATCH_OUT" },
  { id: 3, label: "LBW", value: "LBW" },
];

const playerData = [
  { id: 1, label: "Jason", value: "BatsMan" },
  { id: 2, label: "Jerome", value: "BatsMan" },
  { id: 3, label: "Fransis", value: "BatsMan" },
  { id: 4, label: "Arlene", value: "BatsMan" },
  { id: 5, label: "Darele", value: "BatsMan" },
  { id: 6, label: "Kathrene", value: "BatsMan" },
  { id: 7, label: "Jason", value: "BatsMan" },
  { id: 8, label: "Fransis", value: "BatsMan" },
  { id: 9, label: "Kathrene", value: "BatsMan" },
  { id: 10, label: "Jerome", value: "BatsMan" },
];

export default FallOfWicketModal;

const styles = StyleSheet.create({
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
    gap: 10,
  },
  runCardStyle: {
    backgroundColor: colors.themeColor,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  runCardsCon: {
    gap: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
  },
  text: {
    color: colors.textColor,
    fontSize: 17,
    fontWeight: "700",
  },
  themeColorText: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.themeColor,
  },
  runCon: {
    borderWidth: 2,
    borderColor: colors.themeColor,
    justifyContent: "center",
  },
});
