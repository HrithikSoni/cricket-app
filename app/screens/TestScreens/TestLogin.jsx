import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import InputBox from "../../components/inputs/InputBox";
import PhoneNoInputBox from "../../components/inputs/PhoneNoInputBox";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
// import { updateAuth } from "../../services/store/reducers/authReducer";
import UTILS from "../../utils";
import Icons from "../../components/others/Icons";

export default function TestLogin({ navigation }) {
  const loginData = useRef({ mobileNo: "", password: "" });
  const dispatch = useDispatch();

  const registeredNo = "9999999999";
  const registeredPassword = "password";
  const { TEST_SCREENS } = UTILS.SCREEN_NAMES;
  const responseAdmin = { data: { role: "Admin", firstName: "Admin" } };
  const responseUser = { data: { role: "User", firstName: "User" } };

  function handleLogin() {
    // dispatch(updateAuth(responseAdmin));

    return;
    if (loginData.current.mobileNo === registeredNo) {
      if (loginData.current.password === registeredPassword) {
        // dispatch(updateAuth(responseAdmin));
        // permanentStorage(permanentStorage.userDetail, response)
      } else {
        return alert("Your Password is Incorrect");
      }
    } else {
      return alert("Your Mobile no is Incorrect");
    }
  }

  return (
    <ParentWrapperWithBG
      title={"Welcome Back!"}
      discp={"Enter your phone number and login your account"}
    >
      <View style={[styles.container]}>
        <View style={[styles.middleContainer]}>
          <PhoneNoInputBox
            onChangeText={(e) => (loginData.current["mobileNo"] = e)}
          />
          <InputBox
            label={"Password"}
            onChangeText={(e) => (loginData.current["password"] = e)}
            isSecureText={true}
            icon={<Icons.LockIcon />}
          />
          <View style={{ marginTop: 50 }}>
            <Button onButtonPress={handleLogin} />
          </View>
        </View>
        <View style={[styles.lowerContainer]}>
          <Button
            label={"Continue as Guest"}
            bgColor={UTILS.COLORS.gray3}
            textColor={UTILS.COLORS.black}
            // onButtonPress={() => dispatch(updateAuth(responseUser))}
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
    width: "100%",
  },
  lowerContainer: {
    marginTop: 60,
    gap: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
