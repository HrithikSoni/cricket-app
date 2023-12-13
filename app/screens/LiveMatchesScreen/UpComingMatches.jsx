import React from "react";
import { StyleSheet, View } from "react-native";

import HomeTopCard from "../../components/cards/HomeTopCard";
import TournamentMatchesCard from "../../components/cards/TournamentMatchesCard";
import AppText from "../../components/text/AppText";
import UTILS from "../../utils";
import Button from "../../components/button/Button";
import useAuth from "../../hooks/useAuth";

const { LIVE_MATCHES } = UTILS.SCREEN_NAMES;

export default function UpComingMatches({ navigation }) {
  const { deleteUserData } = useAuth();
  const tournamentDetails = [
    {
      date: "25 Jul 22",
      overs: "20",
      location: "Weekend WarZone Baliawas, Gurgaon",
      team1: "DTU CSK",
      team2: "Team Indigo",
    },
  ];

  return (
    <>
      <View style={[styles.container]}>
        <HomeTopCard />
        <View style={[styles.contentContainer]}>
          <AppText style={[UTILS.STYLES.commonTextStyle]}>
            Upcoming Matches
          </AppText>
          <View style={[styles.cardContainer]}>
            <TournamentMatchesCard
              arrayData={tournamentDetails}
              onPressLeftButton={
                () => {}
                // navigation.navigate(LIVE_MATCHES.MATCH_TOSS)
              }
              onPressRightButton={() => {}}
            />
            <Button
              label={"Go To Live Match Screen"}
              onButtonPress={() => navigation.navigate(LIVE_MATCHES.LIVE_MATCH)}
            />

            <Button label={"Logout"} onButtonPress={deleteUserData} />
          </View>
        </View>
      </View>
    </>
  );
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
    width: "100%",
  },
  themeColorStyle: {
    color: UTILS.COLORS.themeColor,
  },
});
