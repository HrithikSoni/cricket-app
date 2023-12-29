import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import Button from "../../../components/button/Button";
import OptionsSelectGrid from "../../../components/grid/OptionsSelectGrid";
import Divider from "../../../components/others/Divider";
import Icons from "../../../components/others/Icons";
import AppText from "../../../components/text/AppText";
import BoldText from "../../../components/text/BoldText";
import UTILS from "../../../utils";

const batsmanType = UTILS.BATSMAN;

export default function DismissBatsmanModal(props) {
  const [data, setData] = useState({
    batsman: "striker",
    dismissalType: striker[0].value,
  });

  const updateData = (e) => setData({ ...data, ...e });

  const handleSubmit = () => {
    props.onSubmitDismissDetails(data);
    props.onRequestClose();
  };
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}
    >
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <BoldText style={styles.header}>Dismissal</BoldText>
          <Icons.Close
            onPress={props.onRequestClose}
            style={{ alignSelf: "flex-end" }}
          />

          <TopTab />
          <Divider style={{ marginTop: 10 }} />
          <OptionsSelectGrid
            key={data.batsman}
            headerTitle={null}
            data={striker}
            invalidData={
              data.batsman === batsmanType[0].value ? [] : [0, 1, 2, 3]
            }
            onGridItemPress={(i) => updateData({ dismissalType: i.name })}
          />
          <Button
            label="Confirm"
            onButtonPress={handleSubmit}
            style={{ marginTop: 15 }}
          />
        </View>
      </View>
    </Modal>
  );
  function TopTab() {
    return (
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        {batsmanType.map((i) => {
          const borderColor =
            data.batsman === i.value
              ? UTILS.COLORS.themeColor
              : UTILS.COLORS.gray1;

          return (
            <TouchableOpacity
              key={i.name}
              onPress={() => updateData({ batsman: i.value })}
              style={[styles.tabHeader, { borderColor }]}
            >
              <AppText
                style={{
                  fontSize: 16,
                }}
              >
                {i.name}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 25,
  },
  runContainer: {
    borderWidth: 2,
    borderColor: UTILS.COLORS.themeColor,
    height: 30,
    width: 30,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: UTILS.COLORS.opacity1,
    justifyContent: "center",
    alignItems: "center",
  },

  dataContainer: {
    // height: UTILS.DIMENSIONS.height - 330,
    width: UTILS.DIMENSIONS.width - 50,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    // backgroundColor: "green",
  },
  cancelBtn: {
    borderColor: UTILS.COLORS.themeColor,
    borderWidth: 2,
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },

  submitBtn: {
    backgroundColor: UTILS.COLORS.themeColor,
    borderColor: UTILS.COLORS.themeColor,
    borderWidth: 2,
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  optionsBtn: {
    padding: 14,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: UTILS.COLORS.gray1,
    marginTop: 10,
    borderWidth: 2,
  },
  optionsBtnContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 0 },
  bottomBtnContainer: { flex: 1, flexDirection: "row", marginTop: 20 },
  tabHeader: {
    backgroundColor: UTILS.COLORS.gray1,
    flex: 1,
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    margin: 5,
  },
});
const striker = [
  { name: UTILS.DISMISS_TYPES.BOWLED },
  { name: UTILS.DISMISS_TYPES.CATCH },
  { name: UTILS.DISMISS_TYPES.LBW },
  { name: UTILS.DISMISS_TYPES.STUMPED },
  { name: UTILS.DISMISS_TYPES.RUN_OUT },
  { name: UTILS.DISMISS_TYPES.HIT_WICKET },
  { name: UTILS.DISMISS_TYPES.BALL_HANDLED_OUT },
  { name: UTILS.DISMISS_TYPES.OBSTRUCTING_FIELDING },
  { name: UTILS.DISMISS_TYPES.RETIRED_HURT },
  { name: UTILS.DISMISS_TYPES.TIMED_OUT },
];
