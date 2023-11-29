import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import PlusButton from "../../components/button/PlusButton";
import SelectionModal from "../../components/modals/SelectionModal";
import TournamentMatchesCard from "../../components/cards/TournamentMatchesCard";

const btnDetails = [
  {
    name: "Add Match",
    screenName: "TOURNAMENT_SCREENS.CREATE_TOURNAMENT",
  },
];

export default function TournamentMatches() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ParentWrapper screenTitle="Tournament Matches">
        <View style={{ height: 40 }} />
        <TournamentMatchesCard
          date={"20 July 23"}
          overs={"20"}
          location="Delhi, Noida"
          team1="Delhi"
          team2="Kolkata"
        />
        <TournamentMatchesCard
          date={"20 July 23"}
          overs={"20"}
          location="Delhi, Noida"
          team1="Delhi"
          team2="Kolkata"
        />
        <PlusButton style={{ bottom: 50, right: 30 }} onPress={handleModal} />
      </ParentWrapper>

      <SelectionModal
        visible={showModal}
        onDone={handleOnSelect}
        selections={btnDetails}
      />
    </>
  );

  function handleModal() {
    setShowModal(!showModal);
  }

  function handleOnSelect() {
    setShowModal(!showModal);
  }
}

const styles = StyleSheet.create({});
