import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

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

const { TEAM_A, TEAM_B } = UTILS.TEAM_NAME;

const teamDetails = {
  name: "team A",
  matchLocation: "Garden",
  profilePic: "",
  captainProfile: { profilePic: "", name: "Team Captain" },
  teamName: "Team A",
};
export default function TeamsVersus({ navigation }) {
  const teamsData = useTeamDetailsSelector();
  const dispatchCurrentTeamKey = useUpdateCurrentTeamKey();

  // console.log(teamsData.matchDetails);

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
          name={teamsData[TEAM_A]?.teamDetails?.name || "Team A"}
          captainName={teamsData[TEAM_A]?.captain?.name || "Team A Captain"}
          onPress={() => handleCardFunction(TEAM_A)}
        />
        <AppText style={styles.versusText}>V/S</AppText>
        <TeamVersusCard
          matchLocation="Garden"
          teamName="Team B"
          name={teamsData[TEAM_B]?.teamDetails?.name || "Team B"}
          captainName={teamsData[TEAM_B]?.captain?.name || "Team B Captain"}
          onPress={() => handleCardFunction(TEAM_B)}
        />
      </View>
      {/* handle team and match creation here */}
      <Button title="Continue" bottom={true} onButtonPress={() => {}} />
    </ParentWrapper>
  );
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
