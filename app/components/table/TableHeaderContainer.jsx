import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TableHeaderContainer({ children }) {
  return (
    <View
      style={{
        backgroundColor: "blue",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingVertical: 7,
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});
