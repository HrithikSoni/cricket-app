import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/button/Button";
import InputSelector from "../../components/inputs/ComponentHandler";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import UTILS from "../../utils";
import useRTKQuery from "../../hooks/useRTKQuery";
import api from "../../services/api";
import { useAddMatchDetails } from "../../services/teamServices/useManageTeam";

const { TEAMS } = UTILS.SCREEN_NAMES;

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
          onSelect={updateMatchDetails}
          header={"Select A Umpire"}
          onAddingHeader={"Add Umpire"}
          role={"UMPIRE"}
        />

        <SelectInput
          label={"Add Referee"}
          form={refereeForm}
          onSelect={updateMatchDetails}
          header={"Select A Referee"}
          onAddingHeader={"Add Referee"}
          role={"REFEREE"}
        />

        <SelectInput
          label={"Add Scorer"}
          form={scorerFrom}
          onSelect={updateMatchDetails}
          header={"Select A Scorer"}
          onAddingHeader={"Add Scorer"}
          role={"SCORER"}
        />

        <View style={{ height: 40 }} />
        <Button
          onButtonPress={() => navigation.navigate(TEAMS.TEAMS_VERSUS)}
          // onButtonPress={() => handleSubmitMatchDetails(matchDetails.current)}
        />
      </ScrollView>
    </ParentWrapper>
  );
}

function useMatchDetails() {
  const navigation = useNavigation();
  const dispatchMatchDetails = useAddMatchDetails();
  const { request } = useRTKQuery(
    api.useAddNewMatchMutation,
    handleMatchCreateSuccess
  );

  function handleMatchCreateSuccess(e) {
    dispatchMatchDetails({ id: e.data?.id || null });
    // navigation.navigate(TEAMS.TEAMS_VERSUS);
  }

  async function handleSubmitMatchDetails(body) {
    if (
      body.umpireOneId === body.umpireTwoId ||
      body.umpireOneId === body.umpireThreeId ||
      body.umpireTwoId === body.umpireThreeId
    ) {
      Toast.show({ type: "error", text2: "Can not repeat umpire" });
      return;
    }

    await request(body);
  }

  return {
    handleSubmitMatchDetails,
  };
}

function SelectInput({
  label,
  form,
  list,
  onSelect,
  header,
  onAddingHeader,
  role,
}) {
  return (
    <>
      <AppText style={styles.formLabel}>{label}</AppText>
      {form.map((i) => (
        <InputSelector
          {...i}
          onBottomSheetSelect={(e) => onSelect({ [i.key]: e.id })}
          header={header}
          onAddingHeader={onAddingHeader}
          role={role}
        />
      ))}
    </>
  );
}

const form = [
  {
    label: "",
    key: "matchTypes",
    type: UTILS.INPUT_TYPE.MATCH_TYPES,
  },

  { type: UTILS.INPUT_TYPE.DATE_TIME_PICKER },
  { label: "Match Name", key: "matchName", type: UTILS.INPUT_TYPE.STRING },
  { label: "Ground Name", key: "groundName", type: UTILS.INPUT_TYPE.STRING },
  { type: UTILS.INPUT_TYPE.LOCATION_PICKER },
  { label: "Ball Type", key: "ballType", type: UTILS.INPUT_TYPE.BALL_TYPE },
];

const umpireForm = [
  {
    label: "1 Umpire",
    key: "umpireOneId",
    type: UTILS.INPUT_TYPE.ADD_SELECT,
  },
  {
    label: "2 Umpire",
    key: "umpireTwoId",
    type: UTILS.INPUT_TYPE.ADD_SELECT,
  },
  {
    label: "3 Umpire",
    key: "umpireThreeId",
    type: UTILS.INPUT_TYPE.ADD_SELECT,
  },
];

const refereeForm = [
  { label: "Referee", key: "refereeId", type: UTILS.INPUT_TYPE.ADD_SELECT },
];

const scorerFrom = [
  { label: "Scorer", key: "scorerId", type: UTILS.INPUT_TYPE.ADD_SELECT },
];

const styles = StyleSheet.create({
  matchType: {
    marginTop: 15,
    fontWeight: "500",
    fontSize: 16,
  },
  formLabel: { fontWeight: "500", fontSize: 16, marginTop: 20 },
});
