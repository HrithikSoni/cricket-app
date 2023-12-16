import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FlashList } from "@shopify/flash-list";

import Button from "../../components/button/Button";
import PlayerDetailsCard from "../../components/cards/PlayerDetailsCard";
import SearchAddPlayerModal from "../../components/modals/SearchAddPlayerModal";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import useManageTeam from "../../hooks/useManageTeam";
import {
  addPlayerInTeam,
  getCurrentTeam,
} from "../../services/matchServices/matchReducer";
import api from "../../services/store/appApi";
import UTILS from "../../utils";

export default function ManageTeam({ navigation }) {
  const { data: list, isLoading } = api.useGetPlayerQuery();

  return (
    <>
      <ParentWrapper screenTitle="Team Name">
        <View style={styles.container}>
          <SearchAddPlayerModal />
        </View>

        <PlayersListHeader />
        <List list={list || []} />

        <Button
          bottom={true}
          onButtonPress={() =>
            navigation.navigate(
              UTILS.SCREEN_firstNameS.TEAMS.MANAGE_BATTING_ORDER
            )
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
    <FlashList
      data={props.list}
      renderItem={({ item, index }) => (
        <>
          <PlayerDetailsCard
            {...item}
            key={index}
            onPress={() => handleAddPlayer(i)}
          />
        </>
      )}
      estimatedItemSize={20}
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

const playerData = [
  { id: 1, firstName: "Jason", playerDetail: { specialization: "Bowler" } },
  { id: 2, firstName: "Jerome", playerDetail: { specialization: "Bowler" } },
  { id: 3, firstName: "Fransis", playerDetail: { specialization: "Bowler" } },
  { id: 4, firstName: "Arlene", playerDetail: { specialization: "Bowler" } },
  { id: 5, firstName: "Darele", playerDetail: { specialization: "Bowler" } },
  { id: 6, firstName: "Kathrene", playerDetail: { specialization: "Bowler" } },
  { id: 7, firstName: "Jason", playerDetail: { specialization: "Bowler" } },
  { id: 8, firstName: "Fransis", playerDetail: { specialization: "Bowler" } },
  { id: 9, firstName: "Kathrene", playerDetail: { specialization: "Bowler" } },
  { id: 10, firstName: "Jerome", playerDetail: { specialization: "Bowler" } },
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
