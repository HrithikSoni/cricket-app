import React from "react";
import {
  StyleSheet,
  View
} from "react-native";

import PlusButton from "../../components/button/PlusButton";
import HomeTopCard from "../../components/cards/HomeTopCard";
import TournamentMatchesCard from "../../components/cards/TournamentMatchesCard";
import AppText from "../../components/text/AppText";
import UTILS from "../../utils";

const { TOURNAMENT_SCREENS, MATCH_DETAILS_SCREENS, SCORING_SCREENS } = UTILS.SCREEN_NAMES;
export default function Home({ navigation }) {

  const tournamentDetails = [
    {
      date: "25 Jul 22",
      overs: "20",
      location: "Weekend WarZone Baliawas, Gurgaon",
      team1: "DTU CSK",
      team2: "Team Indigo"
    }
  ]

  return (
    <>
      <View style={[styles.container]}>
        <HomeTopCard />
        <View style={[styles.contentContainer]}>
          <AppText style={[UTILS.STYLES.commonTextStyle
          ]}>
            Upcoming Matches
          </AppText>
          <View style={[styles.cardContainer]}>
          <TournamentMatchesCard arrayData={tournamentDetails} onPressLeftButton={()=> navigation.navigate(SCORING_SCREENS.MATCH_TOSS)} onPressRightButton={()=>{
            
          }}/>
          </View>
        </View>
      </View>

      <PlusButton onPress={handleModal} />
    </>
  );

  function handleModal() {
    navigation.navigate(MATCH_DETAILS_SCREENS.FORM)
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cardContainer: {
    marginTop: 20,
    
  },
  contentContainer: {
    marginTop: 20,
    marginRight: 15,
    width:"100%"
  },
  themeColorStyle: {
    color: UTILS.COLORS.themeColor,
  },
});
