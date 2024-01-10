import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import Button from "../../components/button/Button";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import api from "../../services/api";
import UTILS from "../../utils";
import useUpdateScoringDetails, {
  useAddScoringMatchDetails,
  useAddTeamDetails,
  useAssignBowler,
  useAssignStrikerNonStriker,
  useUpdateTeams,
} from "./scoringServices/hooks/scoringDispatches";
import { useScoreDetailsSelector } from "./scoringServices/hooks/scoringSelectors";

export default function ChooseInitialPlayers({ navigation, route }) {
  const [selected, setSelected] = useState("striker");
  const [playersId, setPlayersId] = useState({
    striker: { id: null },
    nonStriker: { id: null },
    bowler: { id: null },
  });

  const { playingBatsman, playingFielders } = useMatchPlayers(route.params?.id);

  const dispatchBowler = useAssignBowler();
  const dispatchBatsman = useAssignStrikerNonStriker();

  function handleConfirm() {
    dispatchBowler(playersId.bowler.id);
    dispatchBatsman({
      strikerId: playersId.striker.id,
      nonStrikerId: playersId.nonStriker.id,
    });

    navigation.navigate(UTILS.SCREEN_NAMES.SCORING_SCREENS.SCORING);
  }
  return (
    <ParentWrapper screenTitle="Choose Players">
      <ScrollView>
        <BatsmanGrid />
        <View style={{ height: 10 }} />
        <BowlerGrid />
      </ScrollView>
      <Button bottom={true} onButtonPress={handleConfirm} />
    </ParentWrapper>
  );

  function BatsmanGrid() {
    return (
      <>
        <TopTab />
        <View style={styles.batsmanGridContainer}>
          {playingBatsman.map((e, i) => {
            const s =
              playersId.striker.id === e.id || playersId.nonStriker.id == e.id;
            const borderColor = s
              ? UTILS.COLORS.themeColor
              : UTILS.COLORS.gray1;
            const backgroundColor = s ? "white" : UTILS.COLORS.gray1;
            const color = s ? UTILS.COLORS.themeColor : "black";
            return (
              <TouchableOpacity
                key={i}
                style={[styles.batsmanButton, { borderColor, backgroundColor }]}
                onPress={() => setPlayersId({ ...playersId, [selected]: e })}
              >
                <AppText style={{ color }}>{e.name}</AppText>
                {playersId.striker.id == e.id && (
                  <AppText style={{ color: UTILS.COLORS.themeColor }}>
                    (S)
                  </AppText>
                )}
                {playersId.nonStriker.id == e.id && (
                  <AppText style={{ color: UTILS.COLORS.themeColor }}>
                    (NS)
                  </AppText>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </>
    );
  }

  function BowlerGrid() {
    return (
      <View>
        <View
          style={[styles.button, { backgroundColor: UTILS.COLORS.themeColor }]}
        >
          <AppText style={{ color: "white" }}>Bowler</AppText>
        </View>
        <View style={styles.batsmanGridContainer}>
          {playingFielders.map((e, i) => {
            const s = playersId.bowler.id === e.id;
            const borderColor = s
              ? UTILS.COLORS.themeColor
              : UTILS.COLORS.gray1;
            const color = s ? UTILS.COLORS.themeColor : "black";
            const backgroundColor = s ? "white" : UTILS.COLORS.gray1;

            return (
              <TouchableOpacity
                key={i}
                style={[styles.batsmanButton, { borderColor, backgroundColor }]}
                onPress={() => setPlayersId({ ...playersId, bowler: e })}
              >
                <AppText style={{ color }}>{e.name}</AppText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
  function TopTab() {
    return (
      <View style={styles.buttonContainer}>
        {[
          { label: "Striker", value: "striker" },
          { label: "Non Striker", value: "nonStriker" },
        ].map((e, i) => {
          if (i === 0) marginRight = 10;
          const backgroundColor =
            e.value === selected ? UTILS.COLORS.themeColor : UTILS.COLORS.gray1;
          const color = e.value === selected ? "white" : "black";
          return (
            <TouchableOpacity
              key={i}
              style={[styles.button, { marginRight, backgroundColor }]}
              onPress={() => setSelected(e.value)}
            >
              <AppText style={{ color }}>{e.label}</AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
function useMatchPlayers(id) {
  const { data } = api.useGetMatchByIdQuery(id);
  const dispatchTeamPlayers = useUpdateTeams();
  const dispatchTeamDetails = useAddTeamDetails();
  const dispatchScoringMatchDetails = useAddScoringMatchDetails();
  useUpdateScoringDetails();
  const { isFirstInning } = useScoreDetailsSelector();

  const [players, setPlayers] = useState({
    playingBatsman: [],
    playingFielders: [],
  });

  useEffect(() => {
    if (data?.data) {
      handleSetPlayers();
    }
  }, [data]);

  function handleSetPlayers() {
    const { matchTeamPlayer, teamA, teamB, tossWinner, tossDecision } =
      data.data;

    // store current match details in store
    dispatchScoringMatchDetails(data.data);

    let battingTeam = [];
    let fieldingTeam = [];

    const players = matchTeamPlayer.reduce((acc, player) => {
      const { teamId } = player;
      if (!acc[teamId]) {
        acc[teamId] = [];
      }
      acc[teamId].push({
        ...player,
        id: player.playerId,
        name: player.player.firstName,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        6: 0,
        ballsPlayed: 0,
        economy: 0,
        extras: 0,
        maiden: 0,
        overs: [],
        status: UTILS.FIELDING_STATUS.PLAYING,
        strikeRate: 0,
        totalOvers: 0,
        totalRun: 0,
        wickets: 0,
      });
      return acc;
    }, {});

    let tossWinnerTeam = tossWinner[0];
    let tossLoserTeam = tossWinner[0].id === teamA[0].id ? teamB[0] : teamA[0];

    // for second inning swap values
    if (!isFirstInning) {
      const temp = tossWinnerTeam;
      tossWinnerTeam = tossLoserTeam;
      tossLoserTeam = temp;
    }

    if (tossDecision === "BATTING") {
      battingTeam = players[tossWinnerTeam.id];
      fieldingTeam = players[tossLoserTeam.id];
      dispatchTeamDetails(tossWinnerTeam, tossLoserTeam);
    } else {
      battingTeam = players[tossLoserTeam.id];
      fieldingTeam = players[tossWinnerTeam.id];
      dispatchTeamDetails(tossLoserTeam, tossWinnerTeam);
    }

    // add teams in store
    dispatchTeamPlayers({ battingTeam, fieldingTeam });

    setPlayers({ playingBatsman: battingTeam, playingFielders: fieldingTeam });
  }
  return players;
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  button: {
    backgroundColor: UTILS.COLORS.gray1,
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 16,
    width: 110,
  },
  batsmanGridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: UTILS.COLORS.gray1,
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  batsmanButton: {
    backgroundColor: UTILS.COLORS.gray1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: UTILS.COLORS.gray1,

    // minWidth: 80,
  },
});
