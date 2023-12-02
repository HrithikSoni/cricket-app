import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import InputBox from "../../components/inputs/InputBox";
import UTILS from "../../utils";
import FormBuilder from "../../components/inputs/ComponentHandler";
import Button from "../../components/button/Button";

const locationDetails = [
  {
    type: UTILS.INPUT_TYPE.LOCATION_PICKER,
  },
  {
    label: "City",
    key: "cityId",
    type: UTILS.INPUT_TYPE.DROPDOWN,
    arrayData: [
      { label: "New Delhi", value: "NEW DELHI" },
      { label: "Old Delhi", value: "OLD DELHI" },
      { label: "Dwarka", value: "DWARKA" },
      { label: "Lajpat Nagar", value: "LAJPAT NAGAR" },
      { label: "Chandni Chowk", value: "CHANDNI CHOWK" },
      { label: "Connaught Place", value: "CONNAUGHT PLACE" },
    ],
  },
];

export default function CreateTournament({ navigation }) {
  return (
    <ParentWrapper
      screenTitle="Create Tournament"
      description={`Enter Tournament Details`}
      showBack={true}
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
