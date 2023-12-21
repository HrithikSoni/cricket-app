import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import CaptainWicketKeeperCard from "../../components/cards/CaptainWicketKeeperCard";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import UTILS from "../../utils";
import SearchAddPlayerModal from "../../components/modals/SearchAddPlayersModal";
import useManageTeam, {
  useAllCurrentTeamPlayers,
  useAssignCaptainWicketKeeper,
  useCaptainWicketKeeperSelector,
} from "../../services/teamServices/useManageTeam";

export default function SelectCaptain({ navigation }) {
  return (
    <>
      <ParentWrapper screenTitle="Select Captain">
        {/* <SearchAddPlayerModal /> */}

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
  const teamMembers = useAllCurrentTeamPlayers();
  const captainWicketKeeper = useCaptainWicketKeeperSelector();
  const { assignCaptain } = useAssignCaptainWicketKeeper();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {teamMembers.map((e, i) => (
          <CaptainWicketKeeperCard
            {...e}
            name={e.player.user.firstName}
            type={e.player.specialization}
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
