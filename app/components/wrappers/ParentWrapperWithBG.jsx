import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import UTILS from "../../utils";
import Icons from "../others/Icons";
import AppText from "../text/AppText";

function ParentWrapperWithBG(props) {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../../assets/Union.png")}
      style={styles.imgStyle}
    >
      <SafeAreaView style={styles.container}>
        <Icons.LeftChevron onPress={() => navigation.goBack()} />
        <View style={{ paddingTop: props?.PTTextCon || 50 }}>
          {props.title && <AppText style={styles.title}>{props.title}</AppText>}
          {props.description && (
            <AppText style={styles.description}>{props.description}</AppText>
          )}
        </View>
        {props.children}
      </SafeAreaView>
    </ImageBackground>
  );
}

export default ParentWrapperWithBG;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: UTILS.HELPERS.handlePlatform(0, StatusBar.currentHeight + 20),
    paddingHorizontal: 20,
  },
  title: {
    width: UTILS.DIMENSIONS.width * 0.8,
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 38,
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 30,
    color: UTILS.COLORS.gray2,
    marginTop: 10,
  },
  imgStyle: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "40%",
  },
});
