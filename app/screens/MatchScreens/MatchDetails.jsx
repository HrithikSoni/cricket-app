import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import InputSelector from "../../components/inputs/ComponentHandler";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import useManageTeam from "../../hooks/useManageTeam";
// import { usersApi } from "../../services/store/api/usersApi";
import UTILS from "../../utils";

export default function MatchDetails({ navigation }) {
  const matchDetails = useRef({});

  const updateMatchDetails = (e) => {
    matchDetails.current = { ...matchDetails.current, ...e };
  };
  // const { data, error, isLoading } = usersApi.useGetUsersQuery();

  // console.log(data, "oooooo");

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
            onDropdownSelect={(e) => {}}
            onChangeText={(e) => updateMatchDetails({ [i.key]: e })}
            onLocationSelect={updateMatchDetails}
            onAppend={updateMatchDetails}
            key={index}
          />
        ))}

        <SelectInput
          label={"Add Umpires"}
          form={umpireForm}
          list={umpireNamesArray}
          onSelect={updateMatchDetails}
        />

        <SelectInput
          label={"Add Referee"}
          form={refereeForm}
          list={refereeNamesArray}
          onSelect={updateMatchDetails}
        />

        <SelectInput
          label={"Add Scorer"}
          form={scorerFrom}
          list={umpireNamesArray}
          onSelect={updateMatchDetails}
        />

        <View style={{ height: 40 }} />
        <Button
          // bottom={true}
          onButtonPress={() => {
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.TEAMS_VERSUS);
            // console.log(matchDetails.current, "iiiiiiiii");
          }}
          // onButtonPress={() => handleSubmitMatchDetails(matchDetails.current)}
        />
      </ScrollView>
    </ParentWrapper>
  );
}

function SelectInput({ label, form, list, onSelect }) {
  return (
    <>
      <AppText style={styles.formLabel}>{label}</AppText>
      {form.map((i) => (
        <InputSelector
          {...i}
          data={list}
          onBottomSheetSelect={(e) => onSelect({ [i.key]: e })}
          header={"Select A Umpire"}
        />
      ))}
    </>
  );
}

function useMatchDetails() {
  const { addMatchDetails } = useManageTeam();
  function handleSubmitMatchDetails(body) {
    addMatchDetails(body);
  }

  return {
    handleSubmitMatchDetails,
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
  { label: "Referee", key: "referee", type: UTILS.INPUT_TYPE.ADD_SELECT },
];

const scorerFrom = [
  { label: "Scorer", key: "scorer", type: UTILS.INPUT_TYPE.ADD_SELECT },
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
