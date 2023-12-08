import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Button from "../../components/button/Button";
import RegisterContactInput from "../../components/inputs/RegisterContactInput";
import AppText from "../../components/text/AppText";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import useApi from "../../hooks/useApi";
import AUTH_ENDPOINTS from "../../services/api/authEndpoints";
import UTILS from "../../utils";
import { AUTH_SCREENS } from "../../utils/constants/screenNames";

const colors = UTILS.COLORS;

export default function Login({ navigation }) {
  const loginData = useRef({ countryId: "", contact: "123" });

  const { login } = useLogin(loginData.current);

  return (
    <ParentWrapperWithBG
      title={"Welcome Back!"}
      description={"Enter your phone number and login your account"}
    >
      <View style={styles.container}>
        <View style={styles.middleContainer}>
          <RegisterContactInput
            onChangeText={(e) => (loginData.current.contact = e)}
          />
          <View style={styles.btnContainer}>
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
        <View style={styles.lowerContainer}>
          <Button
            label={"Don't have an account"}
            bgColor={colors.gray3}
            textColor={colors.black}
            onButtonPress={() => navigation.navigate(AUTH_SCREENS.SIGNUP)}
          />
          <AppText style={styles.bottomText}>
            By creating passcode you agree with our{" "}
            <AppText style={{ color: colors.themeColor }}>
              Terms & Conditions and Privacy Policy
            </AppText>
          </AppText>
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
    // const requestConfig = {
    //   endpoint: AUTH_ENDPOINTS.LOGIN,
    //   body,
    // };
    // const resp = await request(requestConfig);
    navigation.navigate(AUTH_SCREENS.OTP);
  }

  return { login };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  bottomText: { lineHeight: 25, textAlign: "center" },
  btnContainer: { marginTop: 50 },
});
