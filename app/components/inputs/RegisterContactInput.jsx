import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PhoneNoInputBox from "./PhoneNoInputBox";
import DropDownModal from "../modals/DropdownModal";

const RegisterContactInput = (props) => {
  const [code, setCode] = useState("");

  function handleDropdownSelect(e) {
    setCode(e);
  }

  return (
    <View>
      <DropDownModal
        arrayData={countryInfo}
        title={"Select Country Code"}
        searchBarLabel={"Find Country Code"}
        flag="🇮🇳"
        label="India"
        {...props}
        onDropdownSelect={(e) => handleDropdownSelect(e.rightText)}
      />
      <PhoneNoInputBox {...props} code={code} />
    </View>
  );
};

const countryInfo = [
{ label: "Afghanistan", flag: "🇦🇫", code: "AF", rightText: "+93" },
 { label: "Australia", flag: "🇦🇺", code: "AU", rightText: "+61" },
 { label: "Bangladesh", flag: "🇧🇩", code: "BD", rightText: "+880" },
{ label: "Canada", flag: "🇨🇦", code: "CA", rightText: "+1" },
{ label: "India", flag: "🇮🇳", code: "IN", rightText: "+91" },
{ label: "Nepal", flag: "🇳🇵", code: "NP", rightText: "+977" },
{ label: "Pakistan", flag: "🇵🇰", code: "PK", rightText: "+92" },
{ label: "South Africa", flag: "🇿🇦", code: "ZA", rightText: "+27" },
{ label: "Sri Lanka", flag: "🇱🇰", code: "LK", rightText: "+94" },
{ label: "Zimbabwe", flag: "🇿🇼", code: "ZW", rightText: "+263" },
]

export default RegisterContactInput;

const styles = StyleSheet.create({});
