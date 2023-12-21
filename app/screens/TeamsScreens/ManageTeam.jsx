import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
// import { FlashList } from "@shopify/flash-list";

import Button from "../../components/button/Button";
import PlayerDetailsCard from "../../components/cards/PlayerDetailsCard";
import SearchAddPlayerModal from "../../components/modals/SearchAddPlayersModal";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";

import api from "../../services/api";
import {
  useAddPlayerInCurrentTeam,
  useAllCurrentTeamPlayers,
  useCurrentTeamDetailsSelector,
} from "../../services/teamServices/useManageTeam";
import UTILS from "../../utils";

export default function ManageTeam({ navigation }) {
  const currentTeamDetails = useCurrentTeamDetailsSelector();

  const { data: teamPlayers } = api.useGetTeamPlayersQuery(
    currentTeamDetails?.id,
    { refetchOnMountOrArgChange: true }
  );

  return (
    <>
      <ParentWrapper screenTitle={currentTeamDetails.name}>
        <View style={styles.container}>
          <SearchAddPlayerModal />
        </View>

        <PlayersListHeader />
        <List list={teamPlayers || []} />

        <Button
          bottom={true}
          onButtonPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.MANAGE_BATTING_ORDER)
          }
        />
      </ParentWrapper>
    </>
  );
}

function List(props) {
  const dispatchPlayerInCurrentTeam = useAddPlayerInCurrentTeam();

  return (
    <FlatList
      data={props.list}
      renderItem={({ item, index }) => (
        <>
          <PlayerDetailsCard
            {...item}
            name={item?.player?.user?.firstName || null}
            specialization={item?.player?.specialization || null}
            key={index}
            onPress={() => dispatchPlayerInCurrentTeam(item)}
          />
        </>
      )}
      // estimatedItemSize={20}
      showsVerticalScrollIndicator={false}
    />
  );
}

function PlayersListHeader() {
  const totalPLayers = useAllCurrentTeamPlayers();

  return (
    <View style={styles.playersListHeader}>
      <AppText>Add Player</AppText>
      <AppText>{totalPLayers.length}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  playersListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 20,
  },
});
