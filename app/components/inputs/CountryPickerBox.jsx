import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import DropDownModal from "../modals/DropdownModal";

const CountryPickerBox = () => {
  return (
    <View>
      <DropDownModal
        arrayData={countryInfo}
        title={"Select Country Code"}
        searchBarLabel={"Find Country Code"}
        imgUrl= 'https://flagsapi.com/IN/flat/64.png'
        label = "India"
      />
    </View>
  );
}

const countryInfo = [
  {
    label: "France",
    imgUrl: "https://flagsapi.com/BE/flat/64.png",
    rightText: "+64",
  },
  {
    label: "India",
    imgUrl: "https://flagsapi.com/IN/flat/64.png",
    rightText: "+91",
  },
  {
    label: "United States of America",
    imgUrl: "https://flagsapi.com/US/flat/64.png",
    rightText: "+1",
  },
];

export default CountryPickerBox;

const styles = StyleSheet.create({});
