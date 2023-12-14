import React, { useRef } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import useRTKQuery from "../../hooks/useRTKQuery";
import api from "../../services/store/appApi";
import UTILS from "../../utils";
import Button from "../button/Button";
import ToggleButton from "../button/ToggleButton";
import BattingBowlingStyle from "../inputs/BattingBowlingStyle";
import InputBox from "../inputs/InputBox";
import BottomSheetHeader from "../others/BottomSheetHeader";

export default function AddNewPlayerModal(props) {
  const playerData = useRef({});

  const { request: addPlayer, data } = useRTKQuery(
    api.useAddPlayerMutation,
    handleUserCreatedSuccess,
    handleUserCreatedFail
  );

  console.log(data, "iiiiiiiiiii");

  function handleUserCreatedSuccess() {
    props.onRequestClose();
  }
  function handleUserCreatedFail(e) {
    console.log(e);
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
              onBattinBowlingSelect={(e) =>
                (playerData.current = { ...playerData.current, ...e })
              }
            />
          </ScrollView>
          <Button
            label="Add player in team"
            //   bottom={true}
            onButtonPress={() => addPlayer(playerData.current)}
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
