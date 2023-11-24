import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Text, View } from "react-native";

import { LeftChevoronIcon } from "../icons";
import UTILS from "../../utils";

export default function ParentWrapper(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.upperContainer]}>
      <LeftChevoronIcon onPress={()=> props?.navigation.goBack()}/>
      <View style={[styles.textContainer, {paddingTop: props?.PTTextCon || 50}]}>
      {props?.title && <Text style={[styles.title]}>{props?.title}</Text>}
      {props?.discp && <Text style={[styles.discp]}>{props?.discp}</Text>}
      </View>
      </View>
      {props.children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: UTILS.HELPERS.handlePlatform(0, StatusBar.currentHeight),
    paddingHorizontal: 20
  },
  upperContainer:{
    marginTop: 60
  },
  textContainer:{
   
  },
  title:{
    fontSize: 30,
    fontWeight: '700'
  },
  discp:{
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    color: UTILS.STYLES.colors.gray2,
    marginTop: 10
  }
});
