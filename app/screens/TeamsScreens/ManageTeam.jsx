import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/button/Button";
import PlayerDetailsCard from "../../components/cards/PlayerDetailsCard";
import SearchAddPlayerModal from "../../components/modals/SearchAddPlayerModal";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import {
  addPlayerInTeam,
  getCurrentTeam,
  totalPlayer,
} from "../../services/store/reducers/matchReduce";
import UTILS from "../../utils";

export default function ManageTeam({ navigation }) {
  return (
    <>
      <ParentWrapper screenTitle="Team Name">
        <View style={styles.container}>
          <SearchAddPlayerModal />
        </View>

        <PlayersListHeader />
        <List />

        <Button
          bottom={true}
          onButtonPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.MANAGE_BATTING_ORDER)
          }
        />
      </ParentWrapper>
    </>
  );
}

function List() {
  const dispatch = useDispatch();
  const currentTeam = useSelector(getCurrentTeam);

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
        {playerData.map((e, i) => (
          <PlayerDetailsCard
            {...e}
            key={i}
            onPress={() => handleAddPlayer(i)}
          />
        ))}
        <View style={{ height: 100 }} />
      </View>
    </ScrollView>
  );
}

function PlayersListHeader() {
  const currentTeam = useSelector(getCurrentTeam);
  const totalPLayers = useSelector(totalPlayer(currentTeam));

  return (
    <View style={styles.playersListHeader}>
      <AppText>Add Player</AppText>
      <AppText>{totalPLayers}</AppText>
    </View>
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
