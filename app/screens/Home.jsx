import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";


import MatchCard from "../components/cards/MatchCard";
import UTILS from "../utils";
import HomeTopCard from "../components/cards/HomeTopCard";
import SearchBar from "../components/inputs/SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  return (
    <View style={[styles.container]}>
      <HomeTopCard />
      <SearchBar />
      <View>
        <View style={[styles.cardContainer]}>
          <Text style={[UTILS.STYLES.commonTextStyle, { fontWeight: "600" }]}>
            Live Match
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={[
                UTILS.STYLES.commonTextStyle,
                { color: UTILS.STYLES.colors.themeColor, fontWeight: '500' },
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
  );
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
  matchCardContainer:{
    marginTop: 20
  }
});
