import { StyleSheet, Text, View } from "react-native";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import TeamVersusCard from "../../components/cards/TeamVesesCard";
import UTILS from "../../utils";
import Button from "../../components/button/Button";
import AppText from "../../components/text/AppText";
// import useManageTeam from "../../hooks/useManageTeam";

const teamDetails = {
  name: "team A",
  matchLocation: "Garden",
  profilePic: "",
  captainProfile: { profilePic: "", name: "Team Captain" },
  teamName: "Team A",
};
export default function TeamsVersus({ navigation }) {
  // const { handleUpdateCurrentTeam } = useManageTeam();

  return (
    <ParentWrapper screenTitle="Teams" showBack={true}>
      <View style={styles.container}>
        <TeamVersusCard
          {...teamDetails}
          onPress={() => {
            // handleUpdateCurrentTeam(UTILS.TEAM_NAME.TEAM_A);
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.SELECT_TEAM);
          }}
        />
        <AppText style={styles.versusText}>V/S</AppText>
        <TeamVersusCard
          {...teamDetails}
          onPress={() => {
            // handleUpdateCurrentTeam(UTILS.TEAM_NAME.TEAM_B);
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.SELECT_TEAM);
          }}
        />
      </View>

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
