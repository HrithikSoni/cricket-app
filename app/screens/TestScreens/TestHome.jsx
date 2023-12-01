import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import PlusButton from "../../components/button/PlusButton";
import HomeTopCard from "../../components/cards/HomeTopCard";
import SelectionModal from "../../components/modals/SelectionModal";
import UTILS from "../../utils";
import AppText from "../../components/AppText";
import TournamentMatchesCard from "../../components/cards/TournamentMatchesCard";

const { TOURNAMENT_SCREENS, MATCH_DETAILS_SCREENS } = UTILS.SCREEN_NAMES;
export default function Home({ navigation }) {
  const [showModal, setShowModal] = useState(false);

  const btnDetails = [
    { name: "Start Match", screenName: MATCH_DETAILS_SCREENS.FORM },
  ];

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
          <TournamentMatchesCard arrayData={tournamentDetails}/>
          </View>
        </View>
      </View>

      <PlusButton onPress={handleModal} />
      <SelectionModal
        visible={showModal}
        onDone={handleOnSelect}
        selections={btnDetails}
      />
    </>
  );

  function handleOnSelect(e) {
    handleModal();
    if (e?.screenName) {
      navigation.navigate(e.screenName);
    }
  }

  function handleModal() {
    setShowModal(!showModal);
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
