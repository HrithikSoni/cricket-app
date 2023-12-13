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
import MatchCard from "../../components/cards/MatchCard";
import SearchBar from "../../components/inputs/SearchBar";
import SelectionModal from "../../components/modals/SelectionModal";
import UTILS from "../../utils";
import AppText from "../../components/text/AppText";
import useAuth from "../../hooks/useAuth";
import ROLE from "../../utils/enum/role";
import usersApi from "../../services/usersServices/usersApi";
import Button from "../../components/button/Button";
import api from "../../services/store/appApi";

const { TOURNAMENT_SCREENS, MATCH_DETAILS_SCREENS } = UTILS.SCREEN_NAMES;

export default function Home({ navigation }) {
  const [showModal, setShowModal] = useState(false);

  const { role } = useAuth();

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

  const viewAllTextStyle = [
    UTILS.STYLES.commonTextStyle,
    styles.themeColorStyle,
  ];

  // usersApi

  // const { data } = api.useGetUmpireQuery();
  // const [request] = api.useAddUmpireMutation();

  // console.log(data, "9");

  // for (let x in usersApi) {
  //   console.log(x, "oooo");
  // }

  return (
    <>
      <View style={styles.container}>
        <HomeTopCard />
        {/* <Button
          onButtonPress={() =>
            request({
              firstName: "kush",
              contact: "9129997799",
              role: "UMPIRE",
            })
          }
        /> */}
        <SearchBar />
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
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
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
