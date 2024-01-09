import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

import PlusButton from "../../components/button/PlusButton";
import AddTeamsInMatchCard from "../../components/cards/AddTeamsInMatchCard";
import HomeTopCard from "../../components/cards/HomeTopCard";
import MatchCard from "../../components/cards/MatchCard";
import AppText from "../../components/text/AppText";
import api from "../../services/api";
import UTILS from "../../utils";
import ManageMatches from "./components/ManageMatches";

const { TOURNAMENT_SCREENS, MATCH_DETAILS_SCREENS, SCORING_SCREENS } =
  UTILS.SCREEN_NAMES;

export default function AllMatches({ navigation }) {
  const [showModal, setShowModal] = useState(false);

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
        <MatchesList />
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

  function handleModal() {
    setShowModal(!showModal);
    navigation.navigate(MATCH_DETAILS_SCREENS.FORM);
  }

  function MatchesList() {
    const { data } = api.useGetAllMatchesQuery();

    if (data?.data && data?.data?.length > 0) {
      return (
        <FlatList
          data={data.data}
          keyExtractor={(_e, i) => i}
          renderItem={({ item }) => <ManageMatches {...item} />}
        />
      );
    } else return null;
  }
}

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
