import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import UTILS from "../../utils";
import { SearchIcon } from "../others/Icons";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, UTILS.STYLES.commonStyle]}>
        <SearchIcon />
        <TextInput
          style={styles.input}
          placeholder={props?.label || "Search..."}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 360,
  },
  input: {
    flex: 1,
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
