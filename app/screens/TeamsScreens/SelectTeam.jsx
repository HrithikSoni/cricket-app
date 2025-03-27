import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import SelectTeamCard from "../../components/cards/SelectTeamCard";
import SearchAddTeamModal from "../../components/modals/SearchAddTeamModal";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import api from "../../services/api";
import {
  useTeamDetailsSelector,
  useUpdateCurrentTeamDetails,
} from "../../services/teamServices/useManageTeam";
import UTILS from "../../utils";

const { TEAM_A, TEAM_B } = UTILS.TEAM_NAME;

export default function SelectTeam({ navigation }) {
  const { data: teamsList } = api.useGetTeamsQuery();

  const updateCurrentTeamDetails = useUpdateCurrentTeamDetails();

  const teamsData = useTeamDetailsSelector();

  const teamAId = teamsData[TEAM_A].teamDetails?.id;
  const teamBId = teamsData[TEAM_B].teamDetails?.id;

  function handleSelectTeam(details) {
    updateCurrentTeamDetails(details);
    navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.MANAGE_TEAM);
  }

  return (
    <ParentWrapper screenTitle="Select Team (A)">
      <SearchAddTeamModal />

      <ScrollView>
        {teamsList?.length > 0 &&
          teamsList.map((item, index) => (
            <ListContent item={item} key={index} />
          ))}
      </ScrollView>

      <Button onButtonPress={() => {}} bottom={true} />
    </ParentWrapper>
  );

  function ListContent({ item }) {
    // remove other team for selection of teams
    if (teamBId && teamsData.currentTeam === TEAM_A && item.id === teamBId)
      return null;
    if (teamAId && teamsData.currentTeam === TEAM_B && item.id === teamAId)
      return null;

    return (
      <View style={[styles.cardContainer]}>
        <SelectTeamCard
          {...teamInfo[0]}
          {...item}
          onPress={() => handleSelectTeam(item)}
        />
      </View>
    );
  }
}

const teamInfo = [
  {
    mainImage: require("../../../assets/cricket-team.png"),
    name: "Delhi Heroes",
    discp: "Rajouri Garden",
    rightText: "25 players",
    player1Image: require("../../../assets/player-1.png"),
    player2Image: require("../../../assets/player-2.png"),
    player3Image: require("../../../assets/player-3.png"),
  },
  {
    mainImage: require("../../../assets/cricket-team.png"),
    name: "Delhi Heroes",
    discp: "Rajouri Garden",
    rightText: "25 players",
    player1Image: require("../../../assets/player-1.png"),
    player2Image: require("../../../assets/player-2.png"),
    player3Image: require("../../../assets/player-3.png"),
  },
];

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  cardContainer: {
    marginVertical: 5,
  },
});
