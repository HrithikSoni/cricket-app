import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Button from "../../components/button/Button";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import {
  useAssignBowler,
  useAssignStrikerNonStriker,
} from "../../services/scoringServices/hooks/scoringDispatches";
import { usePlayerSelector } from "../../services/scoringServices/hooks/scoringSelectors";
import UTILS from "../../utils";

export default function ChooseInitialPlayers({ navigation }) {
  const [selected, setSelected] = useState("striker");
  const [playersId, setPlayersId] = useState({
    striker: { id: null },
    nonStriker: { id: null },
    bowler: { id: null },
  });
  const { playingBatsman, playingFielders } = usePlayerSelector();

  const dispatchBowler = useAssignBowler();
  const dispatchBatsman = useAssignStrikerNonStriker();

  function handleConfirm() {
    dispatchBowler(playersId.bowler.id);
    dispatchBatsman({
      strikerId: playersId.striker.id,
      nonStrikerId: playersId.nonStriker.id,
    });

    navigation.navigate(UTILS.SCREEN_NAMES.SCORING_SCREENS.SCORING);
  }
  return (
    <ParentWrapper screenTitle="Choose Players">
      <ScrollView>
        <BatsmanGrid />
        <View style={{ height: 10 }} />
        <BowlerGrid />
      </ScrollView>
      <Button bottom={true} onButtonPress={handleConfirm} />
    </ParentWrapper>
  );

  function BatsmanGrid() {
    return (
      <>
        <TopTab />
        <View style={styles.batsmanGridContainer}>
          {playingBatsman.map((e, i) => {
            const s =
              playersId.striker.id === e.id || playersId.nonStriker.id == e.id;
            const borderColor = s
              ? UTILS.COLORS.themeColor
              : UTILS.COLORS.gray1;
            const backgroundColor = s ? "white" : UTILS.COLORS.gray1;
            const color = s ? UTILS.COLORS.themeColor : "black";
            return (
              <TouchableOpacity
                key={i}
                style={[styles.batsmanButton, { borderColor, backgroundColor }]}
                onPress={() => setPlayersId({ ...playersId, [selected]: e })}
              >
                <AppText style={{ color }}>{e.name}</AppText>
                {playersId.striker.id == e.id && (
                  <AppText style={{ color: UTILS.COLORS.themeColor }}>
                    (S)
                  </AppText>
                )}
                {playersId.nonStriker.id == e.id && (
                  <AppText style={{ color: UTILS.COLORS.themeColor }}>
                    (NS)
                  </AppText>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </>
    );
  }

  function BowlerGrid() {
    return (
      <View>
        <View
          style={[styles.button, { backgroundColor: UTILS.COLORS.themeColor }]}
        >
          <AppText style={{ color: "white" }}>Bowler</AppText>
        </View>
        <View style={styles.batsmanGridContainer}>
          {playingFielders.map((e, i) => {
            const s = playersId.bowler.id === e.id;
            const borderColor = s
              ? UTILS.COLORS.themeColor
              : UTILS.COLORS.gray1;
            const color = s ? UTILS.COLORS.themeColor : "black";
            const backgroundColor = s ? "white" : UTILS.COLORS.gray1;
            return (
              <TouchableOpacity
                key={i}
                style={[styles.batsmanButton, { borderColor, backgroundColor }]}
                onPress={() => setPlayersId({ ...playersId, bowler: e })}
              >
                <AppText style={{ color }}>{e.name}</AppText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
  function TopTab() {
    return (
      <View style={styles.buttonContainer}>
        {[
          { label: "Striker", value: "striker" },
          { label: "Non Striker", value: "nonStriker" },
        ].map((e, i) => {
          if (i === 0) marginRight = 10;
          const backgroundColor =
            e.value === selected ? UTILS.COLORS.themeColor : UTILS.COLORS.gray1;
          const color = e.value === selected ? "white" : "black";
          return (
            <TouchableOpacity
              key={i}
              style={[styles.button, { marginRight, backgroundColor }]}
              onPress={() => setSelected(e.value)}
            >
              <AppText style={{ color }}>{e.label}</AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  button: {
    backgroundColor: UTILS.COLORS.gray1,
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 16,
    width: 110,
  },
  batsmanGridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: UTILS.COLORS.gray1,
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  batsmanButton: {
    backgroundColor: UTILS.COLORS.gray1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: UTILS.COLORS.gray1,

    // minWidth: 80,
  },
});
