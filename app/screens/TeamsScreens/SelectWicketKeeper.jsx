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
  totalPlayer,
} from "../../services/store/reducers/matchReduce";
import Button from "../../components/button/Button";
import SearchTeamModal from "../../components/modals/SearchTeamModal";
import AddNewPlayerModal from "../../components/modals/AddNewPlayerModal";
import UTILS from "../../utils";
import useManageTeam from "../../hooks/useManageTeam";
import CaptainWicketKeeperCard from "../../components/cards/CaptainWicketKeeperCard";
import SearchAddPlayerModal from "../../components/modals/SearchAddPlayerModal";

export default function SelectWicketKeeper({ navigation }) {
  return (
    <>
      <ParentWrapper screenTitle="Select WicketKeeper">
        <SearchAddPlayerModal />

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
  const { teamMembers, assignWicketKeeper, captainWicketKeeper } =
    useManageTeam();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {teamMembers.map((e, i) => (
          <CaptainWicketKeeperCard
            {...e}
            key={i}
            serialNo={i + 1}
            captainWicketKeeper={captainWicketKeeper}
            assignRole={assignWicketKeeper}
          />
        ))}
        <View style={{ height: 100 }} />
      </View>
    </ScrollView>
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
