import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import CaptainWicketKeeperCard from "../../components/cards/CaptainWicketKeeperCard";
import ParentWrapper from "../../components/wrappers/ParentWrapper";

import useRTKQuery from "../../hooks/useRTKQuery";
import api from "../../services/api";
import {
  useAllCurrentTeamPlayers,
  useAssignCaptainWicketKeeper,
  useCaptainWicketKeeperSelector,
  useTeamDetailsSelector,
  useTeamSelector,
} from "../../services/teamServices/useManageTeam";
import UTILS from "../../utils";

export default function SelectWicketKeeper({ navigation }) {
  const matchTeams = useTeamDetailsSelector();
  const { request } = useRTKQuery(
    api.useAddPlayersInMatchMutation,
    handleAddTeamMatchSuccess
  );
  const { currentTeam } = useTeamSelector();

  function handleAddTeamMatchSuccess() {
    navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.TEAMS_VERSUS);
  }

  async function handleAddTeamMember() {
    const data = [];
    const teamData = matchTeams[matchTeams.currentTeam];
    // console.log(matchTeams);
    teamData.players.forEach((e, index) => {
      data.push({
        order: JSON.stringify(index + 1),
        isCaptain: teamData.captain.id == e.id,
        isPlaying: true,
        isWicketKeeper: teamData.wicketKeeper.id == e.id,
        matchId: matchTeams.matchDetails.id,
        teamId: teamData.teamDetails.id,
        playerId: e.player.user.id,
        // team: currentTeam,
      });
    });
    // console.log(data, "iiiii");
    request({ team: currentTeam, players: data });
  }

  return (
    <>
      <ParentWrapper screenTitle="Select WicketKeeper">
        <List />
        <Button
          bottom={true}
          label="Add Team In Match"
          onButtonPress={() => {
            handleAddTeamMember();
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.TEAMS_VERSUS);
          }}
        />
      </ParentWrapper>
    </>
  );
}

function List() {
  const teamMembers = useAllCurrentTeamPlayers();
  const captainWicketKeeper = useCaptainWicketKeeperSelector();
  const { assignWicketKeeper } = useAssignCaptainWicketKeeper();

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
