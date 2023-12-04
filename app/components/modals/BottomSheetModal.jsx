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

import UTILS from "../../utils";
import SearchBar from "../inputs/SearchBar";
import AppText from "../text/AppText";

export default function BottomSheetModal(props) {
  
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
            <View style={UTILS.STYLES.center}>
              <AppText style={styles.header}>{props?.header}</AppText>
              {props?.searchBarLabel && (
                <SearchBar label={props?.searchBarLabel} />
              )}
            </View>
            {props?.data.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionItem}
                onPress={() => handleOptionSelection(option)}
              >
                <View style={styles.optionContent}>
                  {option?.imgUrl && (
                    <Image source={option.imgUrl} style={styles.header} />
                  )}
                  <Text style={[styles.text]}>{option.label}</Text>
                </View>
                {option?.rightText && <Text>{option.rightText}</Text>}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  function handleOptionSelection(option) {
    props.onBottomSheetSelect(option);
  }
}

const styles = StyleSheet.create({
  header: { fontSize: 20, marginVertical: 5 },
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
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
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
