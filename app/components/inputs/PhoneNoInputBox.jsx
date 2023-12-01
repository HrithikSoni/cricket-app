import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";


import UTILS from "../../utils";
import OTPInputBox from "./OTPInputBox";
import useApi from "../../hooks/useApi";
import AUTH_ENDPOINTS from "../../services/api/authEndpoints";
import useTimer from "../../hooks/useTimer";

const PhoneNoInputBox = (props) => {
  const [data, setData] = useState({});
  const updateData = (e) => setData({ ...data, e });
  const [mobileNo, setMobileNo] = useState("");
  const [isVerifyPressed, setIsVerifyPressed] = useState(false);

  const { handleSendOtp } = useSendOtp({ contact: mobileNo });

  const {timer, setTimer, timerRunning, setTimerRunning} = useTimer();

  function handleOnChange(e) {
    setMobileNo(e);
    props.onChangeText(e);
  }

  function handleOnVerify() {
    setIsVerifyPressed(true);
    setTimerRunning(true);
    handleSendOtp();
  }

  function handleOnResend() {
    setTimer(30);
    setTimerRunning(true);
    handleSendOtp();
  }

  return (
    <>
      <View
        style={[
          UTILS.STYLES.commonStyle,
          styles.container,
          { justifyContent: props?.isVerify ? "space-between" : "flex-start" },
        ]}
      >
        <View style={[styles.codeContainer]}>
          <View>
            <Text style={styles.text}>{props?.code || "+91"}</Text>
          </View>
        </View>
        <View
          style={[
            styles.inputContainer,
            { marginLeft: props?.isVerify ? -130 : 10 },
          ]}
        >
          <TextInput
            keyboardType="phone-pad"
            key="Mobile No"
            placeholder="Mobile No"
            defaultValue={props?.defaultValue}
            onChangeText={(e) => handleOnChange(e)}
            style={[styles.text]}
          />
        </View>
        {props?.isVerify && (
          <View>
            {isVerifyPressed ? (
              <TouchableOpacity
                onPress={handleOnResend}
                disabled={timerRunning}
              >
                <Text
                  style={[
                    styles.verifyText,
                    {
                      color: timerRunning
                        ? UTILS.COLORS.gray2
                        : UTILS.COLORS.themeColor,
                    },
                  ]}
                >
                  Resend
                </Text>
              </TouchableOpacity>
            ) : (
              mobileNo.length === 10 && (
                <TouchableOpacity onPress={handleOnVerify}>
                  <Text style={[styles.verifyText]}>Verify</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        )}
      </View>
      {isVerifyPressed && (
        <View style={[styles.otpBox]}>
          <View style={[UTILS.STYLES.rowSpaceBtw]}>
            <View style={[UTILS.STYLES.rowCenter]}>
              <Text
                style={[
                  UTILS.STYLES.commonTextStyle,
                  { color: UTILS.COLORS.gray2 },
                ]}
              >
                Code is sent to
              </Text>
              <Text
                style={[
                  UTILS.STYLES.commonTextStyle,
                  { color: UTILS.COLORS.black, marginLeft: 5 },
                ]}
              >
                {mobileNo}
              </Text>
            </View>
            <Text style={[styles.verifyText]}>0:{timer}</Text>
          </View>
          <View style={{marginTop: 10}}>
            <OTPInputBox {...props} />
          </View>
        </View>
      )}
    </>
  );
};

export default PhoneNoInputBox;

function useSendOtp(body) {
  const { request } = useApi({
    onSuccess: (e) => console.log(e.message, "tttttttttttttt"),
    onFail: (e) => console.log(e, "rrrrr"),
  });

  async function handleSendOtp() {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.SEND_OTP,
      body,
    };
    await request(requestConfig);
  }
  return { handleSendOtp };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {},
  text: {
    fontSize: 17,
  },
  verifyText: {
    fontSize: 17,
    fontWeight: "500",
    color: UTILS.COLORS.themeColor,
  },
  otpBox: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
});
