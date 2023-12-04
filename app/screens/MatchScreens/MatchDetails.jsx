import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import UTILS from "../../utils";
import InputSelector from "../../components/inputs/ComponentHandler";
import Button from "../../components/button/Button";
import AppText from "../../components/text/AppText";
import useManageTeam from "../../hooks/useManageTeam";

// $$$$$$ show time when the time is picked in time input filed
// when date is selected just return date ---->ex-- 12-12-2023
// when time is selected just return time ---->ex-- 04:04:30
// fix umpire referee and scorer bottom sheet
// put create team in a modal. example SearchAddPlayerModal

export default function MatchDetails({ navigation }) {
  const matchDetails = useRef({});

  const updateMatchDetails = (e) => {
    matchDetails.current = { ...matchDetails.current, ...e };
  };

  const { handleSubmitMatchDetails, umpireNamesArray } = useMatchDetails();

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
          <InputSelector {...i} arrayData={umpireNamesArray} />
        ))}

        <AppText style={styles.formLabel}>Add Referee</AppText>
        <InputSelector type={UTILS.INPUT_TYPE.ADD_SELECT} label="Referee" />

        <AppText style={styles.formLabel}>Add Scorer</AppText>
        <InputSelector type={UTILS.INPUT_TYPE.ADD_SELECT} label="Scorer" />
        <View style={{ height: 40 }} />
        <Button
          // bottom={true}
          onButtonPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.TEAMS_VERSUS)
          }
          // onButtonPress={() => handleSubmitMatchDetails(matchDetails.current)}
        />
      </ScrollView>
    </ParentWrapper>
  );
}

function useMatchDetails() {
  const umpireNamesArray = [
    { label: "John Doe", value: "JOHN_DOE" },
    { label: "Alice Smith", value: "ALICE_SMITH" },
    { label: "David Brown", value: "DAVID_BROWN" },
  ];

  const { addMatchDetails } = useManageTeam();
  function handleSubmitMatchDetails(body) {
    addMatchDetails(body);
  }

  return {
    handleSubmitMatchDetails,
    umpireNamesArray,
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

const styles = StyleSheet.create({
  matchType: {
    marginTop: 15,
    fontWeight: "500",
    fontSize: 16,
  },
  formLabel: { fontWeight: "500", fontSize: 16, marginTop: 20 },
});
