import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

import PairBtn from "../../components/button/PairButton";
import Button from "../../components/button/Button";
import UTILS from "../../utils";

const { AUTH_SCREENS, TEST_SCREENS } = UTILS.SCREEN_NAMES;

const OnBoarding = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../assets/Ellipse1.png")}
      style={[styles.bgImage]}
    >
      <View style={[styles.contentContainer]}>
        <View style={[styles.upperContainer]}>
          <Image
            source={require("../../../assets/on-boarding-image.png")}
            style={[styles.image]}
          />
        </View>
        <View style={[styles.middleContainer]}>
          <Text style={[styles.text]}>
            Welcome to the most rewarding cricket scoring app
          </Text>
        </View>
        <View style={[styles.lowerContainer]}>
          {/* <PairBtn
            onPressLeft={() => navigation.navigate(AUTH_SCREENS.LOGIN)}
            leftBtnText={"Login"}
            onPressRight={() => navigation.navigate(AUTH_SCREENS.SIGNUP)}
            rightBtnText={"Create"}
  /> */}
        </View>
        {/* <Button label={"Login"} onButtonPress={()=>navigation.navigate(TEST_SCREENS.TEST_LOGIN)} /> */}
        <Button
          label={"Login"}
          onButtonPress={() =>
            navigation.navigate(UTILS.SCREEN_NAMES.AUTH_SCREENS.LOGIN)
          }
        />
      </View>
    </ImageBackground>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  bgImage: {},
  upperContainer: {
    marginTop: 20,
  },
  middleContainer: {
    marginTop: 75,
  },
  lowerContainer: {
    marginTop: 50,
  },
  text: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "600",
    textAlign: "center",
  },
  image: {
    height: 342,
    width: 342,
  },
});
