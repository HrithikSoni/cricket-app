import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";


import PlusButton from "../components/button/PlusButton";
import HomeTopCard from "../components/cards/HomeTopCard";
import MatchCard from "../components/cards/MatchCard";
import SearchBar from "../components/inputs/SearchBar";
import SelectionModal from "../components/modals/SelectionModal";
import ParentWrapper from "../components/wrappers/ParentWrapper";
import UTILS from "../utils";

const { TOURNAMENT_SCREENS, MATCH_DETAILS_SCREENS } = UTILS.SCREEN_NAMES;
export default function Home({ navigation }) {
  const [showModal, setShowModal] = useState(false);

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

  const renderItem = ({ item }) => (
    <View style={[styles.matchCardContainer]}>
      <MatchCard />
    </View>
  );

  return (
    <>
      <ParentWrapper>
        <View style={[styles.container]}>
          <HomeTopCard />
          <SearchBar />
          <View>
            <View style={[styles.cardContainer]}>
              <Text style={[UTILS.STYLES.commonTextStyle]}>Live Match</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={[UTILS.STYLES.commonTextStyle, styles.themeColorStyle]}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal
              data={matchData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <PlusButton onPress={handleModal} />
      </ParentWrapper>
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
  container: {},
  cardContainer: {
    marginTop: 10,
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
