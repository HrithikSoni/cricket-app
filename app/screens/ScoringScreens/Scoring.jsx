import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

import LiveScoreTable from "../../components/table/LiveScoreTable";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import { useScoreEngine } from "../../services/scoringServices/useScoringEngine";
import UTILS from "../../utils";
import BottomScoring from "./components/BottomScoring";
import BowlOptions from "./components/BowlOptions";
import CurrentOver from "./components/CurrentOver";
import Scorecard from "./components/ScoreCard";

const initialState = {
  run: 0,
  type: UTILS.DELIVERY_STATUS.VALID,
  dismissalType: null,
};

export default function Scoring({ navigation }) {
  const bowlDetails = useRef(initialState);
  const [update, setUpdate] = useState(true);

  const { dispatchBowlDetails } = useScoreEngine();

  const updateDetails = (details) =>
    (bowlDetails.current = { ...bowlDetails.current, ...details });

  function handleSubmitDetails(e = {}) {
    dispatchBowlDetails({ ...bowlDetails.current, ...e });
    bowlDetails.current = initialState;
    setUpdate(!update);
  }

  return (
    <ParentWrapper
      screenTitle="Scorecard"
      paddingHorizontal={0}
      onStatsPress={() =>
        navigation.navigate(UTILS.SCREEN_NAMES.SCORING_SCREENS.MATCH_STATS)
      }
    >
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.dataContainer}>
        <View>
          <AppText style={{ textAlign: "center" }}>
            Delhi heros won the toss and elected to bat
          </AppText>
          <View style={{ marginHorizontal: 20 }}>
            <Scorecard />
            <LiveScoreTable />
          </View>
          <View style={{ marginLeft: 20 }}>
            <CurrentOver />
            <BowlOptions
              key={update}
              onBowlTypeSelect={(i) => updateDetails({ type: i })}
            />
          </View>
        </View>
        <BottomScoring
          onUpdateScore={(i) => updateDetails({ run: i })}
          onSubmit={handleSubmitDetails}
        />
      </View>
      {/* </ScrollView> */}
    </ParentWrapper>
  );
}

export const styles = StyleSheet.create({
  dataContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
});
const otherOptions = [
  { name: "Dismiss Batsman" },
  { name: "Invalid Delivery" },
  { name: "End Inning" },
  { name: "End Match" },
  { name: "End Over" },
];
