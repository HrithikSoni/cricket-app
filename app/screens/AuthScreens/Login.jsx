import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

import UTILS from "../../utils";
import { AUTH_SCREENS } from "../../utils/constants/screenNames";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import useApi from "../../hooks/useApi";
import AUTH_ENDPOINTS from "../../services/store/api/authEndpoints";
import { useNavigation } from "@react-navigation/native";
import RegisterContactInput from "../../components/inputs/RegisterContactInput";
import Button from "../../components/button/Button";

export default function Login({ navigation }) {
  const loginData = useRef({ countryId: "", contact: "123" });

  const { login } = useLogin(loginData.current);

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
              onButtonPress={login}
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

function useLogin(body) {
  const navigation = useNavigation();

  const { request } = useApi({
    onSuccess: (e) => {
      navigation.navigate(AUTH_SCREENS.OTP, body.contact);
    },
  });

  async function login() {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.LOGIN,
      body,
    };
    const resp = await request(requestConfig);

    console.log(resp.data, "rrrrrr");
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
