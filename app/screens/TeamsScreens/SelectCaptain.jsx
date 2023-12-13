import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import CaptainWicketKeeperCard from "../../components/cards/CaptainWicketKeeperCard";
import SearchAddPlayerModal from "../../components/modals/SearchAddPlayerModal";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import useManageTeam from "../../hooks/useManageTeam";
import UTILS from "../../utils";

export default function SelectCaptain({ navigation }) {
  return (
    <>
      <ParentWrapper screenTitle="Select Captain">
        <SearchAddPlayerModal />

        <List />

        <Button
          bottom={true}
          onButtonPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.SELECT_WICKET_KEEPER)
          }
        />
      </ParentWrapper>
    </>
  );
}

function List() {
  const { teamMembers, assignCaptain, captainWicketKeeper } = useManageTeam();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {teamMembers.map((e, i) => (
          <CaptainWicketKeeperCard
            {...e}
            key={i}
            serialNo={i + 1}
            captainWicketKeeper={captainWicketKeeper}
            assignRole={assignCaptain}
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
