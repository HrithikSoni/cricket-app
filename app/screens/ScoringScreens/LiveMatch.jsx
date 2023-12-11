import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

import UTILS from "../../utils";
import Icons from "../../components/others/Icons";
import AppText from "../../components/text/AppText";
import TopTabNavigator from "../../routes/TopTabNavigator";
import { useNavigation } from "@react-navigation/native";

const LiveMatch = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icons.LeftChevron
            onPress={onBackBtnPress}
            style={{ position: "absolute", left: 10 }}
          />
          <AppText style={{ fontSize: 18 }}>Live Match</AppText>
        </View>
      </View>
      <View style={styles.tabBarContainer}>
        <TopTabNavigator />
      </View>
    </>
  );

  function onBackBtnPress() {
    if (props.onBackBtnPress) {
      props.onBackBtnPress();
    } else {
      navigation.goBack();
    }
  }
};

export default LiveMatch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: UTILS.COLORS.gray1,
    paddingTop: UTILS.HELPERS.handlePlatform(0, StatusBar.currentHeight + 20),
  },
  header: {
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  tabBarContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topContainer: {},
});
