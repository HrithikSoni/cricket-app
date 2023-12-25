import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import UTILS from "../../../utils";
import BoldText from "../../text/BoldText";
import AppText from "../../text/AppText";
import BottomBtn from "../../button/BottomBtn";

export default function InvalidDeliveryModal(props) {
  const [data, setData] = useState({
    batsMan: "Striker",
    run: 0,
    dismissType: dismiss[0].name,
  });

  const updateData = (e) => setData({ ...data, ...e });

  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}
    >
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <InvalidDeliveryType />
          <RunsScored />
          {/* <RunsScored /> */}
          <BottomBtn {...props} />
        </View>
      </View>
    </Modal>
  );

  function InvalidDeliveryType() {
    return (
      <>
        <BoldText style={{ marginLeft: 10, marginTop: 15 }}>
          Invalid Delivery Type
        </BoldText>
        <View style={[styles.optionsBtnContainer]}>
          {dismiss.map((i) => {
            return (
              <TouchableOpacity
                key={i.name}
                style={[
                  styles.optionsBtn,

                  {
                    borderColor:
                      data.dismissType === i.name
                        ? UTILS.COLORS.themeColor
                        : "white",
                  },
                ]}
                onPress={() => updateData({ dismissType: i.name })}
              >
                <AppText>{i.name}</AppText>
              </TouchableOpacity>
            );
          })}
        </View>
      </>
    );
  }
  function RunsScored() {
    const [run, setRun] = useState(0);
    return (
      <View style={{ marginTop: 10, height: 60 }}>
        {data.dismissType !== dismiss[2].name ? (
          <View style={{ flex: 1 }}>
            <BoldText style={{ marginLeft: 10 }}>Run</BoldText>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const bg = run == i ? UTILS.COLORS.themeColor : "white";
                const textColor = run !== i ? UTILS.COLORS.themeColor : "white";
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => setRun(i)}
                    style={[
                      styles.runContainer,
                      {
                        backgroundColor: bg,
                      },
                    ]}
                  >
                    <AppText style={{ color: textColor }}>{i}</AppText>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}
export const styles = StyleSheet.create({
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
    // height: UTILS.DIMENSIONS.height - 500,
    width: UTILS.DIMENSIONS.width - 50,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
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
  bottomBtnContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
const dismiss = [
  { name: "No Ball" },
  { name: "Wide" },
  { name: "Dead Ball" },
  { name: "Leg Bye" },
  // { name: "End Inning" },
  // { name: "End Match" },
];
