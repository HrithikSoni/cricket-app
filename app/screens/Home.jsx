import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import ParentWrapper from "../components/wrappers/ParentWrapper";
import MatchCard from "../components/cards/MatchCard";
import UTILS from "../utils";
import SelectionModal from "../components/modals/SelectionModal";
import PlusButton from "../components/button/PlusButton";

const { TOURNAMENT_SCREENS, MATCH_DETAILS_SCREENS } = UTILS.SCREEN_NAMES;
export default function Home({ navigation }) {
  const [showModal, setShowModal] = useState(false);

  const btnDetails = [
    {
      name: "Start Tournament",
      screenName: TOURNAMENT_SCREENS.CREATE_TOURNAMENT,
    },
    { name: "Start Match", screenName: MATCH_DETAILS_SCREENS.FORM },
  ];

  return (
    <>
      <ParentWrapper>
        <Text>Home</Text>
        <MatchCard />

        <PlusButton onPress={handleModal} />
      </ParentWrapper>
      <SelectionModal
        visible={showModal}
        onDone={handleOnSelect}
        selections={btnDetails}
      />
    </>
  );

  function handleOnSelect(e) {
    handleModal();
    if (e?.screenName) {
      navigation.navigate(e.screenName);
    }
  }

  function handleModal() {
    setShowModal(!showModal);
  }
}

const styles = StyleSheet.create({});
