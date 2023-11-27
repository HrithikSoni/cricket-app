import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

import Button from "../../components/Button";
import UTILS from "../../utils";
import { AUTH_SCREENS } from "../../utils/constants/screenNames";
import CountryPickerBox from "../../components/inputs/CountryPickerBox";
import PhoneNoInputBox from "../../components/inputs/PhoneNoInputBox";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import useApi from "../../hooks/useApi";
import AUTH_ENDPOINTS from "../../services/api/authEndpoints";
import { useNavigation } from "@react-navigation/native";
// '0112999776'
export default function Login({ navigation }) {
  const loginData = useRef({ countryId: "", contact: "123" });

  const { login } = useLogin(loginData.current);

  return (
    <ParentWrapperWithBG
      title={"Welcome Back!"}
      discp={"Enter your phone number and login your account"}
      navigation={navigation}
    >
      <View style={[styles.container]}>
        <View style={[styles.middleContainer]}>
          <CountryPickerBox />
          <PhoneNoInputBox
            code={loginData.current.countryId}
            onChangeText={(e) => (loginData.current.contact = e)}
          />
          <View style={{ marginTop: 50 }}>
            <Button
              // onButtonPress={() =>
              //   navigation.navigate(AUTH_SCREENS.OTP, {
              //     phoneNo: loginData.current.phoneNo,
              //   })
              // }
              onButtonPress={login}
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
    </ParentWrapperWithBG>
  );
}

function useLogin(body) {
  const navigation = useNavigation();

  const { request } = useApi({
    onSuccess: () => navigation.navigate(AUTH_SCREENS.OTP, body.contact),
  });

  async function login() {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.LOGIN,
      body,
    };
    const resp = await request(requestConfig);
  }

  return { login };
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
