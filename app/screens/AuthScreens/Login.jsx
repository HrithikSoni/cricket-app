import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import Button from "../../components/Button";
import UTILS from "../../utils";
import { AUTH_SCREENS } from "../../utils/constants/screenNames";
import CountryPickerBox from "../../components/inputs/CountryPickerBox";
import PhoneNoInputBox from "../../components/inputs/PhoneNoInputBox";

export default function Login({ navigation }) {
  const loginData = useRef({ countryCode: "", phoneNo: "123" });

  // console.log(loginData.current.phoneNo, "bbbbbbbbbbbbbbbbbbbbb");

  return (
    <ParentWrapper
      title={"Welcome Back!"}
      discp={"Enter your phone number and login your account"}
      navigation={navigation}
    >
      <View style={[styles.container]}>
        <View style={[styles.middleContainer]}>
          <CountryPickerBox />
          <PhoneNoInputBox
            code={loginData.current.countryCode}
            onChangeText={(e) => (loginData.current.phoneNo = e)}
          />
          <View style={{ marginTop: 50 }}>
            <Button
              onButtonPress={() =>
                navigation.navigate(AUTH_SCREENS.OTP, {
                  phoneNo: loginData.current.phoneNo,
                })
              }
            />
          </View>
        </View>
        <View style={[styles.lowerContainer]}>
          <Button
            label={"Don't have an account"}
            bgColor={UTILS.STYLES.colors.gray3}
            textColor={UTILS.STYLES.colors.black}
            onButtonPress={() => navigation.navigate(AUTH_SCREENS.SIGNUP)}
          />
          <Text style={{ lineHeight: 25, textAlign: "center" }}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  middleContainer: {
    paddingTop: 50,
    marginBottom: 30,
  },
  lowerContainer: {
    marginTop: 60,
    gap: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
