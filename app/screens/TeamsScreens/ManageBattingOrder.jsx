import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import SearchAndAdd from "../../components/search/SearchAndAdd";
import AppText from "../../components/text/AppText";
import PlayerDetailsCard from "../../components/cards/PlayerDetailsCard";
import {
  addPlayerInTeam,
  getCurrentTeam,
} from "../../services/store/reducers/matchReduce";
import Button from "../../components/button/Button";
import SearchTeamModal from "../../components/modals/SearchTeamModal";
import AddNewPlayerModal from "../../components/modals/AddNewPlayerModal";
import PlayerManageCard from "../../components/cards/PlayerManageCard";
import useManageTeam from "../../hooks/useManageTeam";
import UTILS from "../../utils";
import SearchAddPlayerModal from "../../components/modals/SearchAddPlayerModal";

export default function ManageBattingOrder({ navigation }) {
  return (
    <>
      <ParentWrapper screenTitle="Batting Order">
        <SearchAddPlayerModal />

        <List />

        <Button
          bottom={true}
          onButtonPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.SELECT_CAPTAIN)
          }
        />
      </ParentWrapper>
    </>
  );
}
function List() {
  const dispatch = useDispatch();
  const currentTeam = useSelector(getCurrentTeam);
  const { teamMembers, moveUp, moveDown } = useManageTeam();

  function handleAddPlayer(index) {
    dispatch(
      addPlayerInTeam({
        team: currentTeam,
        player: playerData[index],
      })
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {teamMembers.length > 0 &&
          teamMembers.map((e, i) => (
            <PlayerManageCard
              {...e}
              key={i}
              serialNo={i + 1}
              last={i == teamMembers.length - 1}
              onPress={() => handleAddPlayer(i)}
              moveUp={moveUp}
              moveDown={moveDown}
              // onPress={() => memoizedSelectedItem(i)}
            />
          ))}
        <View style={{ height: 100 }} />
      </View>
    </ScrollView>
  );
}

const playerData = [
  { id: 1, name: "Jason", type: "Bowler" },
  { id: 2, name: "Jerome", type: "Bowler" },
  { id: 3, name: "Fransis", type: "Bowler" },
  { id: 4, name: "Arlene", type: "Bowler" },
  { id: 5, name: "Darele", type: "Bowler" },
  { id: 6, name: "Kathrene", type: "Bowler" },
  { id: 7, name: "Jason", type: "Bowler" },
  { id: 8, name: "Fransis", type: "Bowler" },
  { id: 9, name: "Kathrene", type: "Bowler" },
  { id: 10, name: "Jerome", type: "Bowler" },
];
const styles = StyleSheet.create({
  container: {},
  playersListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 20,
  },
});
