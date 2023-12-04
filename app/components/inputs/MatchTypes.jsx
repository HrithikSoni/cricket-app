import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import BoldText from "../text/BoldText";
import Divider from "../others/Divider";
import DropDownModal from "../modals/DropdownModal";
import InputBox from "./InputBox";
import PowerPlayInput from "./PowerPlayInput";
import UTILS from "../../utils";

export default function MatchTypes(props) {
  const [matchDetails, setMatchDetails] = useState({});

  const updateMatchDetails = (e) => {
    const data = { ...matchDetails, ...e };
    setMatchDetails(data);
    props.onAppend(data);
  };

  return (
    <>
      <BoldText style={styles.matchType}>Match Type</BoldText>
      <DropDownModal
        arrayData={UTILS.MATCH_TYPES}
        title="Select Type of Match"
        onDropdownSelect={(e) => updateMatchDetails({ matchType: e.value })}
      />

      <Divider style={{ marginVertical: 10 }} />

      {matchDetails.matchType == UTILS.MATCH_TYPES[3].value && (
        <>
          <InputBox
            label="Number of overs"
            onChangeText={(e) => updateMatchDetails({ noOfOvers: e })}
          />
          <InputBox
            label="Overs/Bowler"
            onChangeText={(e) => updateMatchDetails({ oversPerBowler: e })}
          />
          <PowerPlayInput
            label="Number Of Power Plays"
            onChangeText={(e) => updateMatchDetails({ noOfPowerPlays: e })}
          />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
