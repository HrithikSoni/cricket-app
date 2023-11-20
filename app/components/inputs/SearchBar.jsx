import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";


import { SearchIcon } from "../constants/Icons";
import { commonStyle } from "../constants/styles";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    console.log("Search query:", text);
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, commonStyle]}>
        <TextInput
          style={styles.input}
          placeholder={props?.label || "Search..."}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <SearchIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
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
