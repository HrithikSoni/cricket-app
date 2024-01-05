import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import UTILS from "../../../utils";
import AppText from "../../../components/text/AppText";
import useAuth from "../../../hooks/useAuth";
import Button from "../../../components/button/Button";
import BoldText from "../../../components/text/BoldText";
import SmallGreyText from "../../../components/text/SmallGreyText";
import { useAddMatchDetails } from "../../../services/teamServices/useManageTeam";

export default function ManageMatches(props) {
  const { date, matchType, groundName, matchName, teamA, teamB, tossDecision } =
    props;
  console.log(tossDecision, "ooooooooo");
  const dispatchMatchDetails = useAddMatchDetails();
  // console.log(props.id, "props");
  const countDown = 10;
  const { isAdmin } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.dateTime}>
          <Text>
            {date} - {countDown} days left
          </Text>
          <View style={styles.overContainer}>
            <Text>{UTILS.HELPERS.oversByMatchType(matchType).overs} Ov</Text>
          </View>
        </View>

        <BoldText style={styles.location}>{matchName}</BoldText>
        <SmallGreyText>({groundName})</SmallGreyText>

        <View style={styles.teams}>
          <AppText style={styles.teamText}>
            {teamA[0]?.name || "Team A"}
          </AppText>
          <AppText>V/S</AppText>
          <AppText style={styles.teamText}>
            {teamB[0]?.name || "Team B"}
          </AppText>
        </View>
        {isAdmin && (
          <Button
            {...getBtnLabel()}
            style={{
              height: 40,
              marginTop: 20,
            }}
          />
        )}
      </View>
    </View>
  );

  function getBtnLabel() {
    if (teamA.length == 0 && teamB.length == 0)
      return {
        label: "Add Teams",
        onButtonPress: () => {
          navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.TEAMS_VERSUS, {
            id: props.id,
          });
          dispatchMatchDetails({ id: props.id || null });
        },
      };
    if (teamA.length == 0 || teamB.length == 0)
      return {
        label: "Add Team",
        onButtonPress: () => {
          navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.TEAMS_VERSUS, {
            id: props.id,
          });
          dispatchMatchDetails({ id: props.id || null });
        },
      };
    if (!tossDecision)
      return {
        label: "Match Toss",
        onButtonPress: () => {
          navigation.navigate(UTILS.SCREEN_NAMES.SCORING_SCREENS.MATCH_TOSS, {
            id: props.id,
            teamA,
            teamB,
          });
          dispatchMatchDetails({ id: props.id || null });
        },
      };
    if ("scoring")
      return {
        label: "Start Scoring",
        onButtonPress: () => {
          dispatchMatchDetails({ id: props.id || null });
        },
      };
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
    ...UTILS.STYLES.elevation,
    width: "100%",
  },
  teams: {
    marginTop: 20,
    paddingTop: 10,
    borderTopColor: UTILS.COLORS.background1,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  dateTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  overContainer: {
    // height: 18,
    // width: 34,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: UTILS.COLORS.background1,
  },
  location: {
    fontSize: 20,
    color: UTILS.COLORS.themeColor,
  },
  teamText: {
    fontWeight: "500",
  },
  teamInnerCon: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
