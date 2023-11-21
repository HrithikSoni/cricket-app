import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import Button from "../../components/Button";
import UTILS from "../../utils";
// import { AUTH_SCREEN } from "../../routes/screenBundle/AuthBundle";
// import AppBottomSheet from "../../components/modals/AppBottomSheet";



export default function Login() {

  return (
    <ParentWrapper
      title={"Welcome Back!"}
      discp={"Enter your phone number and login your account"}
      navigation={navigation}
    >
      <View style={[styles.container]}>
        <View style={[styles.middleContainer]}>
          {/* <AppBottomSheet /> */}
          <Button onButtonPress={()=>{}}/>
        </View>
        <View style={[styles.lowerContainer]}>
          <Button
            label={"Don't have an account"}
            bgColor={UTILS.STYLES.colors.gray1}
            textColor={UTILS.STYLES.colors.black}
            onButtonPress= {() => navigation.navigate(AUTH_SCREEN.SIGNUP)}
          />
          <Text style={{lineHeight: 24, textAlign: 'center'}}>
            By creating passcode you agree with our{" "}
            <Text style={{ color: UTILS.STYLES.colors.themeColor }}>
              Terms & Conditions and Privacy Policy
            </Text>
          </Text>
        </View>
      </View>
    </ParentWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center'
  },
  middleContainer: {},
  lowerContainer: {
    gap: 10
  },
});
