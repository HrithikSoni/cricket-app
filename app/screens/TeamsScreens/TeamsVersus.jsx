import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import TeamVersusCard from "../../components/cards/TeamVesesCard";
import UTILS from "../../utils";
import Button from "../../components/button/Button";
import AppText from "../../components/text/AppText";
import { updateCurrenTeam } from "../../services/teamServices/teamReducer";
import {
  useTeamDetailsSelector,
  useUpdateCurrentTeamKey,
} from "../../services/teamServices/useManageTeam";
import api from "../../services/api";

const { TEAM_A, TEAM_B } = UTILS.TEAM_NAME;

export default function TeamsVersus({ navigation, route }) {
  const teamsData = useTeamDetailsSelector();
  const dispatchCurrentTeamKey = useUpdateCurrentTeamKey();

  const { teamDetails } = useGetData();

  function handleCardFunction(team) {
    dispatchCurrentTeamKey(team);
    navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.SELECT_TEAM);
  }

  return (
    <ParentWrapper screenTitle="Teams" showBack={true}>
      <View style={styles.container}>
        <TeamVersusCard
          matchLocation="Garden"
          teamName="Team A"
          name={teamDetails.teamA.name}
          captainName={teamDetails.teamA.captain}
          onPress={() => handleCardFunction(TEAM_A)}
        />
        <AppText style={styles.versusText}>V/S</AppText>
        <TeamVersusCard
          matchLocation="Garden"
          teamName="Team B"
          name={teamDetails.teamB.name}
          captainName={teamDetails.teamB.captain}
          onPress={() => handleCardFunction(TEAM_B)}
        />
      </View>
      {/* handle team and match creation here */}
      <Button title="Continue" bottom={true} onButtonPress={() => {}} />
    </ParentWrapper>
  );

  function useGetData() {
    const [teamDetails, setTeamDetails] = useState({
      teamA: { captain: "Team A Captain", name: "Team A" },
      teamB: { captain: "Team B Captain", name: "Team B" },
    });
    const { data } = api.useGetMatchByIdQuery(route.params?.id, {
      refetchOnMountOrArgChange: true,
    });

    useEffect(() => {
      handleDataFetch();
    }, [data]);

    function handleDataFetch() {
      if (!data?.data) return;
      const details = data.data.matchTeamPlayer.reduce((acc, item) => {
        if (
          data?.data.teamA[0]?.id &&
          item.teamId === data?.data.teamA[0].id &&
          item.isCaptain
        ) {
          acc.teamA = {
            name: data?.data.teamA[0].name,
            captain: item.player.firstName,
          };
        }

        if (
          data?.data.teamB[0]?.id &&
          item.teamId === data?.data.teamB[0].id &&
          item.isCaptain
        ) {
          acc.teamB = {
            name: data?.data.teamB[0].name,
            captain: item.player.firstName,
          };
        }
        return acc;
      }, {});
      setTeamDetails({ ...teamDetails, ...details });
    }

    return { teamDetails };
  }
}

const styles = StyleSheet.create({
  container: { marginTop: 30 },
  versusText: {
    fontSize: 30,
    fontWeight: "700",
    color: UTILS.COLORS.gray1,
    textAlign: "center",
    marginVertical: 20,
  },
});
