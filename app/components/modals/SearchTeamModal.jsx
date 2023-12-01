import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../button/Button";
import ParentWrapper from "../wrappers/ParentWrapper";
import SearchBar from "../inputs/SearchBar";
import PlayerDetailsCard from "../cards/PlayerDetailsCard";

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
            name={"Jerome"}
            type={"Bowler"}
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
