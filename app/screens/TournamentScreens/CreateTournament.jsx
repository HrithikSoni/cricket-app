import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import InputBox from "../../components/inputs/InputBox";
import UTILS from "../../utils";
import FormBuilder from "../../components/ComponentHandler";
import Button from "../../components/Button";

const locationDetails = [
  {
    label: "Country",
    key: "countryId",
    type: UTILS.INPUT_TYPE.DROPDOWN,
  },
  {
    label: "State",
    key: "stateId",
    type: UTILS.INPUT_TYPE.DROPDOWN,
  },

  {
    label: "City",
    key: "cityId",
    type: UTILS.INPUT_TYPE.DROPDOWN,
  },
];

export default function CreateTournament({ navigation }) {
  return (
    <ParentWrapper
      screenTitle="Create Tournament"
      description={`Enter Tournament Details`}
    >
      {locationDetails.map((i) => (
        <FormBuilder {...i} />
      ))}

      <Button
        label="Continue"
        bottom={true}
        onButtonPress={() =>
          navigation.navigate(
            UTILS.SCREEN_NAMES.TOURNAMENT_SCREENS.TOURNAMENT_MATCHES
          )
        }
      />
    </ParentWrapper>
  );
}

const styles = StyleSheet.create({});
