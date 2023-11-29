import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { Text, View } from "react-native";

import Icons from "../icons";
import UTILS from "../../utils";
import { useNavigation } from "@react-navigation/native";

function ParentWrapperWithBG(props) {
const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
     <ImageBackground source={require('../../../assets/Union.png')} style={[styles.imgStyle]}>
        <View style={[styles.upperContainer]}>
          <Icons.LeftChevoronIcon onPress={() => navigation.goBack()} />
          <View
            style={[
              styles.textContainer,
              { paddingTop: props?.PTTextCon || 50 },
            ]}
          >
            {props?.title && <Text style={[styles.title]}>{props?.title}</Text>}
            {props?.discp && <Text style={[styles.discp]}>{props?.discp}</Text>}
          </View>
        </View>
        {props.children}
        </ImageBackground>
    </SafeAreaView>
  );
}

export default ParentWrapperWithBG;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: UTILS.HELPERS.handlePlatform(0, StatusBar.currentHeight),
    paddingHorizontal: 20,
  },
  upperContainer: {
    marginTop: 60,
  },
  textContainer: {},
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  discp: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 24,
    color: UTILS.COLORS.gray2,
    marginTop: 10,
  },
});
