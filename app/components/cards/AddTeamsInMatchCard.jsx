import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../text/AppText";
import UTILS from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { useAddMatchDetails } from "../../services/teamServices/useManageTeam";

export default function AddTeamsInMatchCard({ item }) {
  const navigation = useNavigation();
  const dispatchMatchDetails = useAddMatchDetails();

  const handleCardClick = () => {
    // console.log(item.id);
    dispatchMatchDetails({ id: item.id || null });
    navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.TEAMS_VERSUS);
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: UTILS.COLORS.themeColor,
        borderRadius: 20,
        overflow: "hidden",
      }}
      onPress={handleCardClick}
    >
      <AppText>{item.matchName}</AppText>
      <View
        style={{
          padding: 10,
          backgroundColor: UTILS.COLORS.themeColor,
        }}
      >
        <AppText style={{ color: "white" }}>Add Teams</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
