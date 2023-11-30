import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import UTILS from "../../utils";
import AppText from "../../components/AppText";
import InputSelector from "../../components/ComponentHandler";
import Divider from "../../components/Divider";
import Button from "../../components/Button";

export default function MatchDetails({ navigation }) {
  const [matchDetails, setMatchDetails] = useState({});
  const updateMatchDetails = (e) => {
    setMatchDetails({ ...matchDetails, ...e });
  };

  const {
    form,
    umpireForm,
    scorerFrom,
    refereeForm,
    handleSubmitMatchDetails,
    matchTypesArray,
    umpireNamesArray
  } = useMatchDetails(matchDetails);
  return (
    <ParentWrapper description={`Enter Your Match Details`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputSelector label="Tournament Name" />
        <AppText style={styles.matchType}>Match Type</AppText>

        <InputSelector
          label=""
          key="matchType"
          type={UTILS.INPUT_TYPE.DROPDOWN}
          arrayData={matchTypesArray}
          title="Select Type of Match"
          onDropdownSelect={(e) => (updateMatchDetails(matchType = e.value))}
        />

        <Divider style={{ marginVertical: 10 }} />

        {form.map((i, index) => (
          <InputSelector
            {...i}
            onDateTimeSelect={(e) => updateMatchDetails(e)}
            onChangeText={(e) => (updateMatchDetails(i.key = e))}
            onDropdownSelect={(e) => (updateMatchDetails(i.key = e.value))}
            onLocationSelect={(e) => updateMatchDetails(e)}
            key={index}
          />
        ))}

        <AppText style={styles.formLabel}>Add Umpires</AppText>
        {umpireForm.map((i) => (
          <InputSelector {...i}  arrayData={umpireNamesArray}/>
        ))}

        <AppText style={styles.formLabel}>Add Referee</AppText>
        <InputSelector type={UTILS.INPUT_TYPE.ADD_SELECT} label="Referee" />

        <AppText style={styles.formLabel}>Add Scorer</AppText>
        <InputSelector type={UTILS.INPUT_TYPE.ADD_SELECT} label="Scorer" />
        <Button
          // bottom={true}
          onButtonPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.TEAMS_VERSUS)
          }
        />
      </ScrollView>
    </ParentWrapper>
  );
}

function useMatchDetails(body) {
  const form = [
    {
      label: "Number Of Overs",
      key: "noOfOvers",
      type: UTILS.INPUT_TYPE.NUMBER,
    },
    {
      label: "Overs/Bowler",
      key: "oversPerBowler",
      type: UTILS.INPUT_TYPE.NUMBER,
    },
    {
      label: "Number Of Powerplays",
      key: "noPerPowerplays",
      type: UTILS.INPUT_TYPE.POWER_PLAY,
    },
    { type: UTILS.INPUT_TYPE.DATE_TIME_PICKER },
    { label: "Ground Name", key: "groundName", type: UTILS.INPUT_TYPE.NUMBER },
    {type: UTILS.INPUT_TYPE.LOCATION_PICKER},
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

  const matchTypesArray = [
    { label: "T20(20 Overs)", value: "TWNETY_TWENTY" },
    { label: "One Day(50 Overs)", value: "ONE_DAY" },
    { label: "Test", value: "TEST_MATCH" },
    
  ];

  const umpireNamesArray = [
    { label: "John Doe", value: "JOHN_DOE" },
    { label: "Alice Smith", value: "ALICE_SMITH" },
    { label: "David Brown", value: "DAVID_BROWN" }
  ];
  function handleSubmitMatchDetails() {}

  return {
    form,
    umpireForm,
    scorerFrom,
    refereeForm,
    handleSubmitMatchDetails,
    matchTypesArray,
    umpireNamesArray
  };
}

const styles = StyleSheet.create({
  matchType: {
    marginTop: 15,
    fontWeight: "500",
    fontSize: 16,
  },
  formLabel: { fontWeight: "500", fontSize: 16, marginTop: 10 },
});
