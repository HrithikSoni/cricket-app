import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import Button from "../../components/Button";
import UTILS from "../../utils";
import Icons from "../../components/icons";
import AppText from "../../components/AppText";
import InputBox from "../../components/inputs/InputBox";
import LocationPicker from "../../components/inputs/LocationPicker";

export default function CreateTeam() {
  const teamData = useRef({});

  function handleEditProfilePic() {
    console.log(teamData.current, "iiiiiiiiiiiii");
  }

  return (
    <ParentWrapper screenTitle="Create New Team">
      <View style={styles.container}>
        <View style={styles.imgTextContianer}>
          <TouchableOpacity onPress={handleEditProfilePic}>
            <View style={styles.userDp}>
              <Icons.ImageIcon />
            </View>
          </TouchableOpacity>
          <View style={{ minWidth: 250 }}>
            <AppText style={[UTILS.STYLES.commonTextStyleNormal]}>
              Team Name
            </AppText>
            <InputBox
              label={"Enter"}
              onChangeText={(e) => (teamData.current.teamName = e)}
            />
          </View>
        </View>
        <LocationPicker onLocationSelect={(e) => (teamData.current = {...teamData.current, ...e})} />
        <View style={[styles.button]}>
        <Button
          bgColor={UTILS.COLORS.gray1}
          label={"Add Players"}
          textColor={UTILS.COLORS.themeColor}
          onButtonPress={() => {}}
        />
        </View>
      </View>
      <Button
        label={"Create"}
        bottom={true}
        onButttonPress={() => {}}
        disabled={true}
      />
    </ParentWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  imgTextContianer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userDp: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: UTILS.COLORS.gray1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  button:{
    marginTop: 10
  }
});
