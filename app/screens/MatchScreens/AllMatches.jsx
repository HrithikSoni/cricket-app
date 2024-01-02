import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

import PlusButton from "../../components/button/PlusButton";
import HomeTopCard from "../../components/cards/HomeTopCard";
import MatchCard from "../../components/cards/MatchCard";
import SearchBar from "../../components/inputs/SearchBar";
import SelectionModal from "../../components/modals/SelectionModal";
import AppText from "../../components/text/AppText";
import UTILS from "../../utils";
import api from "../../services/api";
import AddTeamsInMatchCard from "../../components/cards/AddTeamsInMatchCard";
import TournamentMatchesCard from "../../components/cards/TournamentMatchesCard";

const { TOURNAMENT_SCREENS, MATCH_DETAILS_SCREENS, SCORING_SCREENS } =
  UTILS.SCREEN_NAMES;

export default function AllMatches({ navigation }) {
  const [showModal, setShowModal] = useState(false);

  const { data } = api.useGetAllMatchesQuery();

  const viewAllTextStyle = [
    UTILS.STYLES.commonTextStyle,
    styles.themeColorStyle,
  ];

  return (
    <>
      <View style={styles.container}>
        <HomeTopCard />

        {/* <SearchBar /> */}

        <LiveMatchesList />
        <TournamentMatchesCard
          arrayData={[
            {
              date: "20 oct",
              location: "garden",
              team1: "team1",
              team2: "team2",
              overs: 20,
            },
          ]}
          onPress={() => navigation.navigate(SCORING_SCREENS.MATCH_TOSS)}
        />
        {data?.data?.length > 0 &&
          data?.data.map((item) => (
            <AddTeamsInMatchCard item={item} key={item.id} />
          ))}
      </View>

      <PlusButton onPress={handleModal} />
      {/* <SelectionModal
        visible={showModal}
        onDone={handleOnSelect}
        selections={btnDetails}
      /> */}
    </>
  );

  function LiveMatchesList() {
    return (
      <View>
        <View style={styles.cardContainer}>
          <AppText style={UTILS.STYLES.commonTextStyle}>Live Match</AppText>
          <TouchableOpacity onPress={() => {}}>
            <AppText style={viewAllTextStyle}>View All</AppText>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={matchData}
          renderItem={({ item }) => (
            <View style={[styles.matchCardContainer]}>
              <MatchCard {...item} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }

  function handleOnSelect(e) {
    handleModal();
    if (e?.screenName) {
      navigation.navigate(e.screenName);
    }
  }

  function handleModal() {
    setShowModal(!showModal);
    navigation.navigate(MATCH_DETAILS_SCREENS.FORM);
  }
}
const btnDetails = [
  {
    name: "Start Tournament",
    screenName: TOURNAMENT_SCREENS.CREATE_TOURNAMENT,
  },
  { name: "Start Match", screenName: MATCH_DETAILS_SCREENS.FORM },
];

const matchData = [
  { id: 1, title: "Match 1" },
  { id: 2, title: "Match 2" },
];

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  matchCardContainer: {
    marginTop: 20,
    marginRight: 15,
  },
  themeColorStyle: {
    color: UTILS.COLORS.themeColor,
  },
});
