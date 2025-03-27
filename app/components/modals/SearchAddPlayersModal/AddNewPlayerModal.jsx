import React, { useRef } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import useRTKQuery from "../../../hooks/useRTKQuery";
import api from "../../../services/api";
import UTILS from "../../../utils";
import Button from "../../button/Button";
import ToggleButton from "../../button/ToggleButton";
import BattingBowlingStyle from "../../inputs/BattingBowlingStyle";
import InputBox from "../../inputs/InputBox";
import BottomSheetHeader from "../../others/BottomSheetHeader";
import { useCurrentTeamDetailsSelector } from "../../../services/teamServices/useManageTeam";

export default function AddNewPlayerModal(props) {
  const { id } = useCurrentTeamDetailsSelector();
  const playerData = useRef({
    teamId: id,
    battingStyle: "RIGHT_HANDED",
    bowlingStyle: "RIGHT_HANDED",
    specialization: "BATTING",
  });

  const { request: addPlayerInTeam, data: player } = useRTKQuery(
    api.useAddTeamPlayersMutation,
    () => props.onRequestClose()
  );

  function handleAddPlayerInTeam() {
    addPlayerInTeam(playerData.current);
  }

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
          <ScrollView>
            <BottomSheetHeader {...props} />
            <InputBox
              label="Name"
              onChangeText={(e) => (playerData.current.firstName = e)}
            />
            <View style={styles.contactSpecializationContainer}>
              <View style={styles.phoneNoContainer}>
                <InputBox
                  label="Phone Number"
                  onChangeText={(e) => (playerData.current.contact = e)}
                />
              </View>
              <View style={styles.toggleButtonContainer}>
                <ToggleButton
                  label={"Specialization"}
                  option1={{ label: "Batsman", value: "BATTING" }}
                  option2={{ label: "Bowler", value: "BOWLING" }}
                  onToggleSelect={(e) =>
                    (playerData.current.specialization = e.value)
                  }
                />
              </View>
            </View>
            <BattingBowlingStyle
              onBattingBowlingSelect={(e) =>
                (playerData.current = { ...playerData.current, ...e })
              }
            />
          </ScrollView>
          <Button
            label="Add player in team"
            //   bottom={true}
            onButtonPress={handleAddPlayerInTeam}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: { textAlign: "center", marginBottom: 20 },
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
  contactSpecializationContainer: {
    marginBottom: 30,
    flexDirection: "row",
    gap: 5,
  },
  phoneNoContainer: {
    width: "50%",
  },
  toggleButtonContainer: {
    width: "50%",
  },
});
