import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import ScoringBtn from "../../../components/button/ScoringBtn";
import AppText from "../../../components/text/AppText";
import UTILS from "../../../utils";
import ChangeBowlerModal from "../modals/ChangeBowlerModal";
import DismissBatsmanModal from "../modals/DismissBatsmanModal";

import OtherOptionsModal from "../modals/OtherOptionsModal";
import { useDispatchResetCurrentOver } from "../scoringServices/hooks/scoringDispatches";
import {
  useBallsLeftInInningSelector,
  useScoreDetailsSelector,
} from "../scoringServices/hooks/scoringSelectors";

const scores = [50, 30, 15, 0, 15, 30, 50];

const dismissModal = "dismissModal";
const bowlerModal = "bowlerModal";
const otherOptionModal = "otherOptionModal";

export default function BottomScoring({ onUpdateScore, ...props }) {
  const [selected, setSelected] = useState(null);
  return (
    <ImageBackground
      style={{ height: 230, paddingTop: 20, position: "relative" }}
      source={require("../../../assets/images/scoreBg.png")}
    >
      <ActionBtn {...props} setNull={() => setSelected(null)} />
      <View style={styles.btnContainer}>
        {scores.map((e, i) => {
          const bg = selected == i ? UTILS.COLORS.themeColor : "white";
          const textColor = selected == i ? "white" : UTILS.COLORS.themeColor;
          return (
            <TouchableOpacity
              key={i}
              style={[styles.btn, { marginTop: e, backgroundColor: bg }]}
              onPress={() => {
                onUpdateScore(i);
                setSelected(i);
              }}
            >
              <AppText style={{ fontSize: 18, color: textColor }}>{i}</AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    </ImageBackground>
  );
}
function ActionBtn(props) {
  const [showModal, setShowModal] = useState(null);
  const details = useRef({});

  const { overs } = useScoreDetailsSelector();
  const { inningComplete } = useBallsLeftInInningSelector();

  const dispatchResetOver = useDispatchResetCurrentOver();

  useEffect(() => {
    if (overs != 0 && !inningComplete) {
      dispatchResetOver();
      setShowModal(bowlerModal);
    }
  }, [overs, inningComplete]);

  function handleSubmit() {
    props.onSubmit(details.current);
    details.current = {};
    props.setNull();
  }
  return (
    <>
      <View style={[styles.bottomBtnContainer, styles.btnContainer]}>
        <ScoringBtn.Undo marginTop={55} onPress={() => {}} />
        <ScoringBtn.Ball
          marginTop={30}
          onPress={() => setShowModal(bowlerModal)}
        />
        <ScoringBtn.Submit marginTop={10} onPress={handleSubmit} />
        <ScoringBtn.Wicket
          marginTop={30}
          onPress={() => setShowModal(dismissModal)}
        />
        <ScoringBtn.OtherOptions
          marginTop={55}
          onPress={() => setShowModal(otherOptionModal)}
        />
      </View>
      <DismissBatsmanModal
        visible={showModal == dismissModal}
        onRequestClose={() => setShowModal(null)}
        onSubmitDismissDetails={(e) => {
          details.current = { ...details.current, ...e };
        }}
      />
      <ChangeBowlerModal
        visible={showModal == bowlerModal}
        onRequestClose={() => setShowModal(null)}
      />

      <OtherOptionsModal
        visible={showModal == otherOptionModal}
        onRequestClose={() => setShowModal(null)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: UTILS.COLORS.themeColor,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bottomBtnContainer: {
    position: "absolute",
    top: 100,
    width: UTILS.DIMENSIONS.width,
  },
});
