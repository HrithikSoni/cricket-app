import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import Button from "../../components/button/Button";
import UTILS from "../../utils";
import SearchAndAdd from "../../components/search/SearchAndAdd";

export default function SelectTeam({ navigation }) {
  return (
    <ParentWrapper screenTitle="Select Team (A)">
      {/* <View style={styles.container}></View> */}
      <SearchAndAdd
        onAdd={() => navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.CREATE_TEAM)}
        onSearch={() => {}}
        addBtnTitle="Add Team"
        searchPlaceholder="Search Team"
      />

      <Button
        label="Team select card"
        onButtonPress={() =>
          navigation.navigate(UTILS.SCREEN_NAMES.TEAMS.MANAGE_TEAM)
        }
      />

      <Button bottom={true} />
    </ParentWrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
});
