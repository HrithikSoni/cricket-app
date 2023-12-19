import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import CaptainWicketKeeperCard from "../../components/cards/CaptainWicketKeeperCard";
import ParentWrapper from "../../components/wrappers/ParentWrapper";

import UTILS from "../../utils";
import SearchAddPlayerModal from "../../components/modals/SearchAddPlayersModal";
import useManageTeam from "../../services/teamServices/useManageTeam";

export default function SelectWicketKeeper({ navigation }) {
  return (
    <>
      <ParentWrapper screenTitle="Select WicketKeeper">
        <SearchAddPlayerModal />

        <List />

        <Button
          bottom={true}
          onButtonPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.TEAMS_VERSUS)
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
