import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import ParentWrapper from "../components/wrappers/ParentWrapper";
import MatchCard from "../components/cards/MatchCard";
import UTILS from "../utils";
import SelectionModal from "../components/modals/SelectionModal";
import PlusButton from "../components/button/PlusButton";
import SearchBar from "../components/inputs/SearchBar";
import HomeTopCard from "../components/cards/HomeTopCard";

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

  return (
    <>
      <ParentWrapper>
        <View style={[styles.container]}>
          <HomeTopCard />
          <SearchBar />
          <View>
            <View style={[styles.cardContainer]}>
              <Text
                style={[UTILS.STYLES.commonTextStyle, { fontWeight: "600" }]}
              >
                Live Match
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={[
                    UTILS.STYLES.commonTextStyle,
                    {
                      color: UTILS.STYLES.colors.themeColor,
                      fontWeight: "500",
                    },
                  ]}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.matchCardContainer]}>
              <ScrollView horizontal={true}>
                <MatchCard />
              </ScrollView>
            </View>
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
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  cardContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  matchCardContainer: {
    marginTop: 20,
  },
});
