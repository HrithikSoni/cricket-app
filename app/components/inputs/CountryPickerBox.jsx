import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import UTILS from "../../utils";

const CountryPickerBox = ({
  bottomSheetOpen,
  handleClosePress,
  handleOpenPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.box, UTILS.STYLES.commonStyle]}
      onPress={bottomSheetOpen ? handleClosePress : handleOpenPress}
    >
      <View style={styles.boxContent}>
        <View style={styles.boxText}>
          {selectedOption?.label && (
            <Image
              style={styles.imgStyle}
              source={{ uri: selectedOption && selectedOption.url }}
            />
          )}
          <Text style={[styles.text]}>
            {selectedOption ? selectedOption.label : "Select Option"}
          </Text>
        </View>
        <Ionicons
          name={bottomSheetOpen ? "chevron-up" : "chevron-down"}
          size={24}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
};

export default CountryPickerBox;

const styles = StyleSheet.create({
  box: {
    paddingVertical: 15,
    marginVertical: 7,
  },
  boxContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  boxText: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  imgStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 5,
  },
  text: {
    fontSize: 17,
  },
});
