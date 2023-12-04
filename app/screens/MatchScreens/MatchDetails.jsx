import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import UTILS from "../../utils";
import InputSelector from "../../components/inputs/ComponentHandler";
import Button from "../../components/button/Button";
import AppText from "../../components/text/AppText";
import useManageTeam from "../../hooks/useManageTeam";

export default function MatchDetails({ navigation }) {
  const matchDetails = useRef({});

  const updateMatchDetails = (e) => {
    matchDetails.current = { ...matchDetails.current, ...e };
  };

  const { handleSubmitMatchDetails } = useMatchDetails();

  return (
    <ParentWrapper description={`Enter Your Match Details`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 20 }} />
        {form.map((i, index) => (
          <InputSelector
            {...i}
            onDateTimeSelect={updateMatchDetails}
            // onChangeText={(e) => updateMatchDetails((i.key = e))}
            // onDropdownSelect={(e) => updateMatchDetails((i.key = e.value))}
            // onLocationSelect={(e) => updateMatchDetails(e)}
            onDropdownSelect={(e) => console.log(e)}
            onChangeText={(e) => updateMatchDetails({ [i.key]: e })}
            onLocationSelect={updateMatchDetails}
            onAppend={updateMatchDetails}
            key={index}
          />
        ))}

        <AppText style={styles.formLabel}>Add Umpires</AppText>
        {umpireForm.map((i) => (
          <InputSelector
            {...i}
            data={umpireNamesArray}
            onBottomSheetSelect={(e)=> matchDetails.current[i.key] = e}
            header={"Select A Umpire"}
          />
        ))}

        <AppText style={styles.formLabel}>Add Referee</AppText>
        <InputSelector
          type={UTILS.INPUT_TYPE.ADD_SELECT}
          label="Referee"
          data={refereeNamesArray}
          onBottomSheetSelect={(e)=> matchDetails.current.referee = e}
          header={"Select A Referee"}
        />

        <AppText style={styles.formLabel}>Add Scorer</AppText>
        <InputSelector
          type={UTILS.INPUT_TYPE.ADD_SELECT}
          label="Scorer"
          data={umpireNamesArray}
          onBottomSheetSelect={(e)=> matchDetails.current.scorer = e}
          header={"Select A Scorer"}
        />
        <View style={{ height: 40 }} />
        <Button
          // bottom={true}
          onButtonPress={() =>
            // navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.TEAMS_VERSUS)
            console.log(matchDetails.current, 'iiiiiiiii')
          }
          // onButtonPress={() => handleSubmitMatchDetails(matchDetails.current)}
        />
      </ScrollView>
    </ParentWrapper>
  );
}

function useMatchDetails() {
  

  const { addMatchDetails } = useManageTeam();
  function handleSubmitMatchDetails(body) {
    addMatchDetails(body);
  }

  return {
    handleSubmitMatchDetails
  };
}

const form = [
  {
    label: "",
    key: "matchTypes",
    type: UTILS.INPUT_TYPE.MATCH_TYPES,
  },

  { type: UTILS.INPUT_TYPE.DATE_TIME_PICKER },
  { label: "Ground Name", key: "groundName", type: UTILS.INPUT_TYPE.NUMBER },
  { type: UTILS.INPUT_TYPE.LOCATION_PICKER },
  { label: "Ball Type", key: "ballType", type: UTILS.INPUT_TYPE.BALL_TYPE },
];

const umpireForm = [
  { label: "1 Umpire", key: "umpire1", type: UTILS.INPUT_TYPE.ADD_SELECT },
  { label: "2 Umpire", key: "umpire2", type: UTILS.INPUT_TYPE.ADD_SELECT },
  { label: "3 Umpire", key: "umpire3", type: UTILS.INPUT_TYPE.ADD_SELECT },
];

const refereeForm = [
  { label: "Referee", key: "umpire1", type: UTILS.INPUT_TYPE.ADD_SELECT },
];

const scorerFrom = [
  { label: "Scorer", key: "umpire1", type: UTILS.INPUT_TYPE.ADD_SELECT },
];

const umpireNamesArray = [
  { label: "John Doe", value: "JOHN_DOE" },
  { label: "Alice Smith", value: "ALICE_SMITH" },
  { label: "David Brown", value: "DAVID_BROWN" },
];

const refereeNamesArray = [
  { label: "Max", value: "MAX" },
  { label: "Smith", value: "Smith" },
  { label: "Black", value: "BLACK" },
];

const styles = StyleSheet.create({
  matchType: {
    marginTop: 15,
    fontWeight: "500",
    fontSize: 16,
  },
  formLabel: { fontWeight: "500", fontSize: 16, marginTop: 20 },
});
