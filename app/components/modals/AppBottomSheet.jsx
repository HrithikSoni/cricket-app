import React, { useCallback, useRef, useMemo, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import UTILS from "../../utils";
import SearchBar from "../inputs/SearchBar";

const AppBottomSheet = (props) => {
  const sheetRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState(null);

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    sheetRef.current?.close();
    setBottomSheetOpen(false);
    props?.onSelectedItem(option);
  };

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={props?.handleSheetChange}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, marginVertical: 5 }}>{props?.label}</Text>
        {props?.searchBarLabel && <SearchBar label={props?.searchBarLabel} />}
      </View>
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        {props?.options.map((option) => (
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

export default AppBottomSheet;
