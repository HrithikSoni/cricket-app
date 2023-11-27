import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import DropDownModal from "../modals/DropdownModal";
import PhoneNoInputBox from "./PhoneNoInputBox";
import { AppContext } from "../../context/AppContext";

const CountryPickerBox = (props) => {
  const {setUserData} = useContext(AppContext);

  const handleDropdownSelect = (e) => {
    setUserData({ countryCode: e });
  };
  return (
    <View>
      <DropDownModal
        arrayData={countryInfo}
        title={"Select Country Code"}
        searchBarLabel={"Find Country Code"}
        imgUrl= 'https://flagsapi.com/IN/flat/64.png'
        label = "India"
        {...props}
        onDropdownSelect={(e) => handleDropdownSelect(e.value)}
      />
    </View>
  );
  
}

const countryInfo = [
  {
    label: "France",
    imgUrl: "https://flagsapi.com/BE/flat/64.png",
    value: "+64",
  },
  {
    label: "India",
    imgUrl: "https://flagsapi.com/IN/flat/64.png",
    value: "+91",
  },
  {
    label: "United States of America",
    imgUrl: "https://flagsapi.com/US/flat/64.png",
    value: "+1",
  },
];

export default CountryPickerBox;

const styles = StyleSheet.create({});
