import React, { useRef } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import UTILS from "../../utils";
import Button from "../button/Button";
import InputBox from "../inputs/InputBox";
import LocationPicker from "../inputs/LocationPicker";
import Icons from "../others/Icons";
import AppText from "../text/AppText";
import BottomSheetHeader from "../others/BottomSheetHeader";

export default function AddNewTeamModal(props) {
  const teamData = useRef({});

  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent
      animationType="slide"
    >
      <View style={styles.container}>
        <TouchableOpacity style={{ flex: 1 }} onPress={props.onRequestClose} />
        <View style={styles.formContainer}>
          <BottomSheetHeader header={"Add Team"} {...props} />
          <ProfileInfoComp label={"Team Name"} />
          <LocationPicker
            onLocationSelect={(e) =>
              (teamData.current = { ...teamData.current, ...e })
            }
          />
          <View style={[styles.button]}>
            <Button
              bgColor={UTILS.COLORS.gray1}
              label={"Add Players"}
              textColor={UTILS.COLORS.themeColor}
              onButtonPress={() => {}}
            />
          </View>
          <Button label="Add Team" onButtonPress={props.onRequestClose} />
        </View>
      </View>
    </Modal>
  );

  function ProfileInfoComp(props) {
    return (
      <View style={styles.imgTextContainer}>
        <TouchableOpacity onPress={handleEditProfilePic}>
          <View style={styles.userDp}>
            <Icons.ImageIcon />
          </View>
        </TouchableOpacity>
        <View style={[styles.teamDetailContainer]}>
          <AppText style={[UTILS.STYLES.commonTextStyleNormal]}>
            {props.label}
          </AppText>
          <InputBox
            label={"Enter"}
            onChangeText={(e) => (teamData.current.teamName = e)}
          />
        </View>
      </View>
    );
  }

  function handleEditProfilePic() {}
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 17,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    backgroundColor: UTILS.COLORS.opacity50,
    // alignItems: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 30,
  },
  teamDetailContainer: {
    width: "67%",
  },
  imgTextContainer: {
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
  button: {
    marginVertical: 20,
  },
});
