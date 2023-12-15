import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import SelectTeamCard from "../../components/cards/SelectTeamCard";
import SearchAddTeamModal from "../../components/modals/SearchAddTeamModal";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import UTILS from "../../utils";

export default function SelectTeam({ navigation }) {
  return (
    <ParentWrapper screenTitle="Select Team (A)">
      <SearchAddTeamModal />

      <ScrollView>
        {teamInfo.map((item, index) => (
          <View key={index} style={[styles.cardContainer]}>
            <SelectTeamCard
              {...item}
              onPress={() =>
                navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.MANAGE_TEAM)
              }
            />
          </View>
        ))}
      </ScrollView>

      {/* <Button
        label="Team select card"
        onButtonPress={() =>
          navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.MANAGE_TEAM)
        }
      /> */}

      <Button onButtonPress={() => {}} bottom={true} />
    </ParentWrapper>
  );
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
