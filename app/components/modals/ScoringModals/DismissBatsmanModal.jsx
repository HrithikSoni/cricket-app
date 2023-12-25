import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import UTILS from "../../../utils";
import BoldText from "../../text/BoldText";
import AppText from "../../text/AppText";
import BottomBtn from "../../button/BottomBtn";
import { useDismissBatsman } from "../../../services/scoringServices/useScoring";

export default function DismissBatsmanModal(props) {
  const batsmanType = [
    { name: "Striker", value: "striker" },
    { name: "Non Striker", value: "nonStriker" },
  ];

  const [data, setData] = useState({
    batsMan: "striker",
    run: 0,
    dismissType: dismiss[0].name,
  });

  const updateData = (e) => setData({ ...data, ...e });

  const dispatchDismissBatsman = useDismissBatsman();

  const handleSubmit = () => {
    dispatchDismissBatsman(data.batsMan);
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
          <ChooseBatsman />
          <StrikerDismiss />
          <RunsScored />
          <BottomBtn {...props} onSubmit={handleSubmit} />
        </View>
      </View>
    </Modal>
  );

  function ChooseBatsman() {
    return (
      <>
        <BoldText style={{ marginLeft: 10 }}>Batsman</BoldText>

        <View style={styles.optionsBtnContainer}>
          {batsmanType.map((i, index) => (
            <TouchableOpacity
              key={i.name}
              style={[
                styles.optionsBtn,

                {
                  borderColor:
                    data.batsMan === i.value
                      ? UTILS.COLORS.themeColor
                      : "white",
                },
              ]}
              onPress={() => updateData({ batsMan: i.value })}
            >
              <AppText>{i.name}</AppText>
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  }
  function StrikerDismiss() {
    return (
      <>
        <BoldText style={{ marginLeft: 10, marginTop: 15 }}>
          Dismiss Type
        </BoldText>
        <View style={[styles.optionsBtnContainer, { height: 250 }]}>
          {dismiss.map((i) => {
            if (data.batsMan === batsmanType[1].name && i.strikerOnly)
              return null;
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
        {data.dismissType === dismiss[3].name ? (
          <View style={{ flex: 1 }}>
            <BoldText style={{ marginLeft: 10 }}>Run Scored</BoldText>
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

const styles = StyleSheet.create({
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
    height: UTILS.DIMENSIONS.height - 330,
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
  bottomBtnContainer: { flex: 1, flexDirection: "row", marginTop: 20 },
});
const dismiss = [
  { name: "Bowled", strikerOnly: true },
  { name: "Catch", strikerOnly: true },
  { name: "LBW", strikerOnly: true },
  { name: "Run Out" },
  { name: "Stumped" },
  { name: "Hit Wicket" },
  { name: "Ball Handled" },
  { name: "Obstructing Fielding" },
  { name: "Retired Hurt" },
  { name: "Timed Out" },
];
