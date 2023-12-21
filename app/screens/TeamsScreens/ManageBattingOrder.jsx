import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import PlayerManageCard from "../../components/cards/PlayerManageCard";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import {
  useAllCurrentTeamPlayers,
  useMoveUpDown,
} from "../../services/teamServices/useManageTeam";
import UTILS from "../../utils";

export default function ManageBattingOrder({ navigation }) {
  return (
    <>
      <ParentWrapper screenTitle="Batting Order">
        {/* <SearchAddPlayerModal /> */}

        <List />

        <Button
          bottom={true}
          onButtonPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.SELECT_CAPTAIN)
          }
        />
      </ParentWrapper>
    </>
  );
}
function List() {
  const teamMembers = useAllCurrentTeamPlayers();
  const { moveUp, moveDown } = useMoveUpDown();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {teamMembers.length > 0 &&
          teamMembers.map((e, i) => (
            <PlayerManageCard
              name={e.player?.user?.firstName}
              type={e.player?.specialization}
              key={i}
              serialNo={i + 1}
              last={i == teamMembers.length - 1}
              moveUp={moveUp}
              moveDown={moveDown}
            />
          ))}
        <View style={{ height: 100 }} />
      </View>
    </ScrollView>
  );
}
// $$$$$$$$$$
const playerData = [
  { id: 1, name: "Jason", type: "Bowler" },
  { id: 2, name: "Jerome", type: "Bowler" },
  { id: 3, name: "Fransis", type: "Bowler" },
  { id: 4, name: "Arlene", type: "Bowler" },
  { id: 5, name: "Darele", type: "Bowler" },
  { id: 6, name: "Kathrene", type: "Bowler" },
  { id: 7, name: "Jason", type: "Bowler" },
  { id: 8, name: "Fransis", type: "Bowler" },
  { id: 9, name: "Kathrene", type: "Bowler" },
  { id: 10, name: "Jerome", type: "Bowler" },
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
