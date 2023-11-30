import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import Button from "../../components/Button";
import UTILS from "../../utils";
import SearchAndAdd from "../../components/search/SearchAndAdd";
import SelectTeamCard from '../../components/cards/SelectTeamCard'

export default function SelectTeam({ navigation }) {

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
  

  return (
    <ParentWrapper screenTitle="Select Team (A)">
      <View style={styles.container}></View>
      <SearchAndAdd
        onAdd={() => navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.CREATE_TEAM)}
        onSearch={() => {}}
        addBtnTitle="Add Team"
        searchPlaceholder="Search Team"
      />

      <ScrollView>
        {teamInfo.map((item, index) => (
          <View key={index} style={[styles.cardContainer]}>
            <SelectTeamCard {...item} onPress={()=>{}}/>
          </View>
        ))}
      </ScrollView>

      {/* <Button
        label="Team select card"
        onButtonPress={() =>
          navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.CREATE_TEAM)
        }
      /> */}

      <Button bottom={true} />
    </ParentWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  cardContainer:{
    marginVertical: 5
  }
});
