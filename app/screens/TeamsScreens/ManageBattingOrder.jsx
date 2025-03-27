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
