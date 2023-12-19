import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { FlashList } from "@shopify/flash-list";

import Button from "../../components/button/Button";
import PlayerDetailsCard from "../../components/cards/PlayerDetailsCard";
import SearchAddPlayerModal from "../../components/modals/SearchAddPlayersModal";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";

import api from "../../services/api";
import UTILS from "../../utils";
import useManageTeam, {
  useCurrentTeamDetailsSelector,
} from "../../services/teamServices/useManageTeam";
import {
  addPlayerInTeam,
  getCurrentTeam,
} from "../../services/teamServices/teamReducer";

export default function ManageTeam({ navigation }) {
  const currentTeamDetails = useCurrentTeamDetailsSelector();

  const { data: teamPlayers } = api.useGetTeamPlayersQuery(
    currentTeamDetails?.id
  );

  return (
    <>
      <ParentWrapper screenTitle={currentTeamDetails.name}>
        <View style={styles.container}>
          <SearchAddPlayerModal />
        </View>

        <PlayersListHeader />
        <List list={teamPlayers || []} />

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

function List(props) {
  const dispatch = useDispatch();
  const currentTeam = useSelector(getCurrentTeam);

  function handleAddPlayer(index) {
    dispatch(
      addPlayerInTeam({
        team: currentTeam,
        player: props.list[index],
      })
    );
  }

  return (
    <FlatList
      data={props.list}
      renderItem={({ item, index }) => (
        <>
          <PlayerDetailsCard
            {...item}
            name={item?.player?.user?.firstName || null}
            specialization={item?.player?.specialization || null}
            key={index}
            onPress={() => handleAddPlayer(i)}
          />
        </>
      )}
      // estimatedItemSize={20}
      showsVerticalScrollIndicator={false}
    />
  );
}

function PlayersListHeader() {
  // const currentTeam = useSelector(getCurrentTeam);
  // const totalPLayers = useSelector(totalPlayer(currentTeam));

  const { totalPLayers } = useManageTeam();

  return (
    <View style={styles.playersListHeader}>
      <AppText>Add Player</AppText>
      <AppText>{totalPLayers}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  playersListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 20,
  },
});
