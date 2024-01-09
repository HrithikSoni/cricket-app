import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../../../components/button/Button";
import AppText from "../../../components/text/AppText";
import BoldText from "../../../components/text/BoldText";
import SmallGreyText from "../../../components/text/SmallGreyText";
import useAuth from "../../../hooks/useAuth";
import { useAddMatchDetails } from "../../../services/teamServices/useManageTeam";
import UTILS from "../../../utils";
import { useUpdateBallsPerInningDispatch } from "../../ScoringScreens/scoringServices/hooks/scoringDispatches";

export default function ManageMatches(props) {
  const { date, matchType, groundName, matchName, teamA, teamB, tossDecision } =
    props;

  const overs =
    props.noOfOvers || UTILS.HELPERS.oversByMatchType(matchType).overs;

  const dispatchMatchDetails = useAddMatchDetails();
  const dispatchBallPerInning = useUpdateBallsPerInningDispatch();
  const countDown = 10;
  const { isAdmin } = useAuth();
  const navigation = useNavigation();

  function updateMatchesOver() {
    dispatchBallPerInning(overs * 6);
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.dateTime}>
          <Text>
            {date} - {countDown} days left
          </Text>
          <View style={styles.overContainer}>
            <Text>{overs} OV</Text>
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
          updateMatchesOver();
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
          updateMatchesOver();
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
          updateMatchesOver();
        },
      };
    return {
      label: "Start Scoring",
      onButtonPress: () => {
        navigation.navigate(UTILS.SCREEN_NAMES.SCORING_SCREENS.CHOOSE_PLAYERS, {
          id: props.id,
          teamA,
          teamB,
        });
        dispatchMatchDetails({ id: props.id || null });
        updateMatchesOver();
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
