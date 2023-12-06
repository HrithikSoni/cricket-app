import React, { useRef } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import UTILS from "../../../utils";
import Button from "../../button/Button";
import Icons from "../../others/Icons";
import AppText from "../../text/AppText";
import RadioBtnWithTextComp from "../RadioBtnWithTextComp";
import SelectOptionModal from "./SelectOptionModal";
import InputBox from "../../inputs/InputBox";

const style = UTILS.STYLES;
const colors = UTILS.COLORS;

const PenaltyRunsModal = (props) => {
  const penaltyRunsData = useRef({});

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
            <AppText style={styles.header}>Penalty Runs</AppText>
            <Icons.CrossIcon
              onPress={props.onRequestClose}
              color={colors.themeColor}
            />
          </View>
          <View style={styles.detailsContainer}>
            <AppText style={style.commonTextStyle}>Penalty Run</AppText>
            <InputBox
              label={"Runs"}
              onChangeText={(e) => (penaltyRunsData.current.penaltyRuns = e)}
            />
          </View>
          <View style={styles.detailsContainer}>
            <AppText style={style.commonTextStyle}>Penalty Type</AppText>
            <RadioBtnWithTextComp
              data={penaltyTypeData}
              onSelect={(e) => (penaltyRunsData.current.penaltyType = e.value)}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button
              label={"Submit"}
              onButtonPress={() => console.log(penaltyRunsData.current)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const penaltyTypeData = [
  {
    id: 1,
    label: "Batting",
    value: "BATTING",
  },
  {
    id: 2,
    label: "Bowling",
    value: "BOWLING",
  },
];

export default PenaltyRunsModal;

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
  detailsContainer: {
    marginTop: 10,
  },
  btnContainer: {
    marginTop: 20,
  },
});
