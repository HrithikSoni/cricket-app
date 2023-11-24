import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useRef, useState } from "react";


import { Ionicons } from "@expo/vector-icons";
import UTILS from "../../utils";
// import AppBottomSheet from "../modals/AppBottomSheet";

const CountryPickerBox = () => {
  const sheetRef = useRef(null);

  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [bottomSheetSelectedOption, setBottomSheetSelectedOption] =
    useState(null);

  // const handleSheetChange = useCallback((index) => {
  //   console.log("handleSheetChange", index);
  // }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
    setBottomSheetOpen(false);
  }, []);
  const handleOpenPress = useCallback(() => {
    sheetRef.current?.snapToIndex(2);
    setBottomSheetOpen(true);
  }, []);

  const onSelectedItem = (option) => {
    setBottomSheetSelectedOption(option);
  };

  return (
    <>
      <View style={[styles.container]}>
        <TouchableOpacity
          style={[styles.box, UTILS.STYLES.commonStyle]}
          onPress={bottomSheetOpen ? handleClosePress : handleOpenPress}
        >
          <View style={styles.boxContent}>
            <View style={styles.boxText}>
              {bottomSheetSelectedOption?.label && (
                <Image
                  style={styles.imgStyle}
                  source={{
                    uri:
                      bottomSheetSelectedOption &&
                      bottomSheetSelectedOption.url,
                  }}
                />
              )}
              <Text style={[styles.text]}>
                {bottomSheetSelectedOption
                  ? bottomSheetSelectedOption.label
                  : "Select Country Code"}
              </Text>
            </View>
            <Ionicons
              name={bottomSheetOpen ? "chevron-up" : "chevron-down"}
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* <View>
        <AppBottomSheet
          handleSheetChange={handleSheetChange}
          options={countryInfo}
          label={"Select Country Code"}
          searchBarLabel={"Find Country Code"}
          onSelectedItem={onSelectedItem(option)}
        />
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 360
  },
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

const countryInfo = [
  { label: "France", url: "https://flagsapi.com/BE/flat/64.png", code: "64" },
  { label: "Germany", url: "https://flagsapi.com/BE/flat/65.png", code: "65" },
  { label: "Finland", url: "https://flagsapi.com/BE/flat/66.png", code: "66" },
];

export default CountryPickerBox;
