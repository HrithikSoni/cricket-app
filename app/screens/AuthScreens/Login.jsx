import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../../components/button/Button";
import RegisterContactInput from "../../components/inputs/RegisterContactInput";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import useRTKQuery from "../../hooks/useRtKQuery";
import authApi from "../../services/store/api/authApi";
import UTILS from "../../utils";
import { AUTH_SCREENS } from "../../utils/constants/screenNames";

export default function Login({ navigation }) {
  const loginData = useRef({ countryId: "", contact: "123" });

  const { post: login } = useRTKQuery(authApi.useLoginMutation, (e) => {
    console.log(e, "resp");
    navigation.navigate(
      UTILS.SCREEN_NAMES.AUTH_SCREENS.OTP,
      loginData.current.contact
    );
  });

  return (
    <ParentWrapperWithBG
      title={"Welcome Back!"}
      discp={"Enter your phone number and login your account"}
    >
      <View style={[styles.container]}>
        <View style={[styles.middleContainer]}>
          <RegisterContactInput
            onChangeText={(e) => (loginData.current.contact = e)}
          />
          <View style={{ marginTop: 50 }}>
            <Button
              // onButtonPress={() =>
              //   navigation.navigate(AUTH_SCREENS.OTP, {
              //     phoneNo: loginData.current.phoneNo,
              //   })
              // }
              onButtonPress={() => login(loginData.current)}
            />
          </View>
        </View>
        <View style={[styles.lowerContainer]}>
          <Button
            label={"Don't have an account"}
            bgColor={UTILS.COLORS.gray3}
            textColor={UTILS.COLORS.black}
            onButtonPress={() => navigation.navigate(AUTH_SCREENS.SIGNUP)}
          />
          <Text style={{ lineHeight: 25, textAlign: "center" }}>
            By creating passcode you agree with our{" "}
            <Text style={{ color: UTILS.COLORS.themeColor }}>
              Terms & Conditions and Privacy Policy
            </Text>
          </Text>
        </View>
      </View>
    </ParentWrapperWithBG>
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
