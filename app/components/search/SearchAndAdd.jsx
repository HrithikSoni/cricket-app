import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import UTILS from "../../utils";
import AppText from "../text/AppText";
import Icons from "../others/Icons";

export default function SearchAndAdd(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onSearch} style={styles.searchField}>
        <Icons.SearchIcon />

        <AppText style={styles.placeholder}>{props.searchPlaceholder}</AppText>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onAdd} style={styles.btn}>
        <AppText style={styles.text}>{props.addBtnTitle}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 10,
    backgroundColor: UTILS.COLORS.background1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  btn: {
    backgroundColor: UTILS.COLORS.themeColor,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text: { color: "white" },
  placeholder: {
    color: UTILS.COLORS.gray2,
    marginLeft: 10,
  },
  searchField: {
    flex: 1,
    height: 30,
    alignItems: "center",
    flexDirection: "row",
  },
});
