import React, { useCallback, useRef, useMemo, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import AppSearchBar from "./AppSearchBar";
import UTILS from "../../utils";

const BottomSheet = () => {
  const sheetRef = useRef(null);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
    setBottomSheetOpen(false);
  }, []);
  const handleOpenPress = useCallback(() => {
    sheetRef.current?.snapToIndex(2);
    setBottomSheetOpen(true);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    sheetRef.current?.close();
    setBottomSheetOpen(false);
  };

  console.log(selectedOption, 'selected option');

  return (
    <>
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

      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 20, marginVertical: 5 }}>
            Select Country Code
          </Text>
          <AppSearchBar label={"Find Country Code"}/>
        </View>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.label}
              style={styles.optionItem}
              onPress={() => handleOptionSelect(option)}
            >
              <View style={styles.optionContent}>
                <Image
                  style={styles.imgStyle}
                  source={{
                    uri: option.url,
                  }}
                />
                <Text style={[styles.text]}>{option.label}</Text>
              </View>
              <Text>{option.code}</Text>
            </TouchableOpacity>
          ))}
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingVertical: 15,
    marginVertical: 7,
  },
  boxContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5
  },
  boxText: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  imgStyle:{
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 5,
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
  text: {
    fontSize: 17,
  },
});

const options = [
  { label: "France", url: "https://flagsapi.com/BE/flat/64.png", code: "64" },
  { label: "Germany", url: "https://flagsapi.com/BE/flat/65.png", code: "65" },
  { label: "Finland", url: "https://flagsapi.com/BE/flat/66.png", code: "66" },
];

export default BottomSheet;
