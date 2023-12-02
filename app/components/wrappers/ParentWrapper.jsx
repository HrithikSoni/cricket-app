import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import UTILS from "../../utils";
import Icons from "../others/Icons";
import AppText from "../text/AppText";

export default function ParentWrapper(props) {
  const navigation = useNavigation();

  console.log(StatusBar.currentHeight);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Icons.LeftChevron
            onPress={onBackBtnPress}
            style={{ position: "absolute", left: 10 }}
          />
          {props.screenTitle && (
            <AppText style={{ fontSize: 18 }}>{props.screenTitle}</AppText>
          )}
        </View>
        {props.description && (
          <AppText style={styles.description}>{props.description}</AppText>
        )}
        {props.children}
      </View>
    </SafeAreaView>
  );

  function onBackBtnPress() {
    if (props.onBackBtnPress) {
      props.onBackBtnPress();
    } else {
      navigation.goBack();
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: UTILS.HELPERS.handlePlatform(0, StatusBar.currentHeight + 20),
    paddingHorizontal: 20,
  },
  header: {
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  // upperContainer: {
  //   marginTop: 60,
  // },
  description: {
    width: UTILS.DIMENSIONS.width * 0.8,
    marginTop: 20,
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 38,
  },
});
