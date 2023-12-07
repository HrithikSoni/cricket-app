import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import Button from "../../components/button/Button";
import OTPInputBox from "../../components/inputs/OTPInputBox";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import useTimer from "../../hooks/useTimer";
import AUTH_ENDPOINTS from "../../services/store/api/authEndpoints";
import permanentStorage from "../../services/permanentStorage";
import { updateAuth } from "../../services/store/reducers/authReducer";
import UTILS from "../../utils";
import useAuth from "../../hooks/useAuth";

const Otp = ({ navigation, route }) => {
  const otpInput = useRef({ otp: "" });

  const contact = route.params;

  const { handleOtp } = useOtp();
  const { timer, setTimer, timerRunning, setTimerRunning } = useTimer();
  const { handleResendOtp } = useResendOtp({
    contact: contact,
    setTimer,
    setTimerRunning,
  });

  const resendTextStyle = {
    color: timerRunning ? UTILS.COLORS.gray2 : UTILS.COLORS.themeColor,
    fontWeight: "bold",
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
          <View style={{ marginTop: 30 }}>
            <OTPInputBox onOtpInput={(e) => (otpInput.current.otp = e)} />
          </View>
          <Button
            onButtonPress={() =>
              handleOtp({ contact, otp: otpInput.current.otp })
            }
          />
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
            <TouchableOpacity onPress={handleResendOtp} disabled={timerRunning}>
              <Text style={[styles.bottomText, resendTextStyle]}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ParentWrapperWithBG>
  );
};

export default Otp;

function useOtp() {
  const dispatch = useDispatch();
  const { setAuth } = useAuth();

  const { request } = useApi({
    onSuccess: (e) => {
      permanentStorage.saveDetails(permanentStorage.userDetail, e);
      setAuth(e);
    },
  });
  async function handleOtp(body) {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.CONFIRM_OTP,
      body,
    };
    await request(requestConfig);
  }

  return { handleOtp };
}

function useResendOtp(body) {
  const { contact, setTimer, setTimerRunning } = body;

  const { request } = useApi({
    onSuccess: (e) => {},
  });
  async function handleResendOtp() {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.SEND_OTP,
      body: { contact },
    };

    await request(requestConfig);
    setTimer(60);
    setTimerRunning(true);
  }

  return { handleResendOtp };
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
