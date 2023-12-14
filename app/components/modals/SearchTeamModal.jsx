import React from "react";
import { Modal, StyleSheet, View } from "react-native";

import Button from "../button/Button";
import PlayerDetailsCard from "../cards/PlayerDetailsCard";
import SearchBar from "../inputs/SearchBar";
import ParentWrapper from "../wrappers/ParentWrapper";

export default function SearchTeamModal({ visible, onRequestClose }) {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <ParentWrapper
        screenTitle="Search player by contact"
        onBackBtnPress={onRequestClose}
      >
        <View>
          <SearchBar />
          <View style={{ height: 10 }} />
          <PlayerDetailsCard
            id={1}
            firstName={"Jerome"}
            playerDetail={{ specialization: "Bowler" }}
            onPress={() => {}} // add player in team
          />
        </View>

        <Button
          bottom={true}
          onButtonPress={onRequestClose}
          label="Add player to team"
        />
      </ParentWrapper>
    </Modal>
  );
}

const styles = StyleSheet.create({});
