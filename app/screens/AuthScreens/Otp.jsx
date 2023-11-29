import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import OTPTextInput from "react-native-otp-textinput";

import Button from "../../components/Button";
import UTILS from "../../utils";
import OTPInputBox from "../../components/inputs/OTPInputBox";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import { useNavigation } from "@react-navigation/native";
import AUTH_ENDPOINTS from "../../services/api/authEndpoints";

const Otp = ({ navigation, route }) => {
  const [timer, setTimer] = useState(30);
  const [timerRunning, setTimerRunning] = useState(true);
  const otpInput = useRef();

  const contact = route.params;

  const { handleOtp } = useOtp({ contact, otp: otpInput.current });

  useEffect(() => {
    let interval;
    if (timerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimerRunning(false);
    }

    return () => clearInterval(interval);
  }, [timer, timerRunning]);

  const handleResend = () => {
    setTimer(30);
    setTimerRunning(true);
  };

  return (
    <ParentWrapperWithBG
      title={"OTP verification"}
      discp={`Code is sent to ` + contact}
      navigation={navigation}
      PTTextCon={100}
    >
      <View style={[styles.container]}>
        <View style={[styles.middleContainer]}>
          <View style={{ marginTop: 20 }}>
            <OTPTextInput ref={otpInput} tintColor={UTILS.COLORS.themeColor} />
            {/* <OTPInputBox onOtpInput={(e) => console.log(e)} /> */}
          </View>
          <Button onButtonPress={() => {}} />
        </View>
        <View style={[styles.lowerContainer]}>
          {timer === 0 ? (
            <Text
              style={{
                color: UTILS.COLORS.themeColor,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              0:00
            </Text>
          ) : (
            <Text
              style={{
                color: UTILS.COLORS.themeColor,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              0:{timer}
            </Text>
          )}
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={[styles.bottomText]}>Didn't receive code?</Text>
            <TouchableOpacity onPress={handleResend} disabled={timerRunning}>
              <Text
                style={[
                  styles.bottomText,
                  {
                    color: timerRunning
                      ? UTILS.COLORS.gray2
                      : UTILS.COLORS.themeColor,
                    fontWeight: "bold",
                  },
                ]}
              >
                Resend
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ParentWrapperWithBG>
  );
};

export default Otp;

function useOtp(body) {
  const navigation = useNavigation();

  const { request } = useApi({
    onSuccess: (e) => {
      console.log("first");
    },
  });
  console.log(body);
  async function handleOtp() {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.CONFIRM_OTP,
      body,
    };
    await request(requestConfig);
  }

  return { handleOtp };
}

const styles = StyleSheet.create({
  container: {},
  middleContainer: {
    marginVertical: 30,
    gap: 70,
  },
  lowerContainer: {
    alignItems: "center",
    gap: 100,
    marginTop: 50,
  },
  bottomText: {
    fontSize: 17,
  },
});
