import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";


import colors from "../constants/colors";
import { commonStyle } from "../constants/styles";

const DropDown = (props) => {
  const [dropDownValue, SetDropDownValue] = useState("");

  const dummyList = [
    { label: "0", value: "1" },
    { label: "0.5", value: "2" },
    { label: "1", value: "3" },
    { label: "1.5", value: "4" },
    { label: "2", value: "5" },
    { label: "2.5", value: "6" },
    { label: "5", value: "7" },
  ];

  function handleOnSelect() {
    if (props.onSelect) {
      props.onSelect(dropDownValue);
    }
  }

  return (
    <View>
      <Dropdown
        style={[
          commonStyle,
          props.style,
        ]}
        placeholder={props?.label || "Select Item"}
        placeholderStyle={{ color: colors.gray2, fontSize: 20}}
        data={props.list || dummyList}
        search
        searchPlaceholder="Search..."
        onChange={(selectedItem) => {
          SetDropDownValue(selectedItem);
          props.onSelect(selectedItem.value);
        }}
        labelField="label"
        valueField="value"
        itemTextStyle={styles.itemText}
        selectedTextStyle={styles.itemText}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
