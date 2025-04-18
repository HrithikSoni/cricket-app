import React from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

import UTILS from "../../../utils";
import SearchBar from "../../inputs/SearchBar";
import AppText from "../../text/AppText";
import BottomSheetHeader from "../../others/BottomSheetHeader";

const colors = UTILS.COLORS;

export default function PersonSelectionModal(props) {
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
            {props.searchBarLabel && <SearchBar label={props.searchBarLabel} />}
            {props.data?.length > 0 &&
              props?.data.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionItem}
                  onPress={() => handleOptionSelection(option)}
                >
                  <View style={styles.optionContent}>
                    <AppText style={styles.text}>{option.firstName}</AppText>
                    {option.lastName && (
                      <AppText style={styles.text}>{option.lastName}</AppText>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  function handleOptionSelection(option) {
    props.onPersonSelect(option);
  }
}

const styles = StyleSheet.create({
  header: { fontSize: 20, marginVertical: 5, fontWeight: "700" },
  container: {
    flex: 1,
    backgroundColor: colors.opacity50,
    // alignItems: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 30,
  },
  optionItem: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgStyle: {
    marginLeft: 20,
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  text: {
    fontSize: 17,
    marginLeft: 15,
  },
});
