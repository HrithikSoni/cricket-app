import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import UTILS from "../../utils";
import Icons from "../../components/icons";
import AppText from "../AppText";

export default function ParentWrapper(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={styles.container}>
        {(props?.showBack || props?.screenTitle) && (
          <View style={styles.header}>
            {props?.showBack && (
              <Icons.LeftChevoronIcon
                onPress={() => navigation.goBack()}
                style={[styles.topIcon]}
              />
            )}
            {props.screenTitle && (
              <AppText style={styles.screenTitle}>{props.screenTitle}</AppText>
            )}
          </View>
        )}
        {props.description && (
          <AppText style={styles.description}>{props.description}</AppText>
        )}
        {props.children}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: UTILS.HELPERS.handlePlatform(0, StatusBar.currentHeight),
    paddingHorizontal: 20,
    marginTop: 20
  },
  header: {
    height: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
    marginBottom: 10
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
  topIcon: {
    marginLeft: -10,
  },
  screenTitle:{
    marginLeft: 75,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24
  }
});
