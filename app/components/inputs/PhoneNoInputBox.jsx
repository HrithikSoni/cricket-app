import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { commonStyle } from "../../utils/styles/globalStyles";
import UTILS from "../../utils";
import { AppContext } from "../../context/AppContext";
import OTPInputBox from "./OTPInputBox";
import useApi from "../../hooks/useApi";
import AUTH_ENDPOINT from "../../services/api/authEndpoints";
import AUTH_ENDPOINTS from "../../services/api/authEndpoints";

const PhoneNoInputBox = (props) => {
  const [data, setData] = useState({});
  const updateData = (e) => setData({ ...data, e });
  const [mobileNo, setMobileNo] = useState("");
  const [isVerifyPressed, setIsVerifyPressed] = useState(false);
  const [timer, setTimer] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);
  const { userData } = useContext(AppContext);

  const { handleSendOtp } = useSendOtp({ contact: mobileNo });

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
          commonStyle,
          styles.container,
          { justifyContent: props?.isVerify ? "space-between" : "flex-start" },
        ]}
      >
        <View style={[styles.codeContainer]}>
          <View>
            <Text style={styles.text}>{userData.countryCode || "+91"}</Text>
          </View>
          <View style={styles.line} />
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
                        ? UTILS.STYLES.colors.gray2
                        : UTILS.STYLES.colors.themeColor,
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
                  { color: UTILS.STYLES.colors.gray2 },
                ]}
              >
                Code is sent to
              </Text>
              <Text
                style={[
                  UTILS.STYLES.commonTextStyle,
                  { color: UTILS.STYLES.colors.black, marginLeft: 5 },
                ]}
              >
                {mobileNo}
              </Text>
            </View>
            <Text style={[styles.verifyText]}>0:{timer}</Text>
          </View>
          <View>
            <OTPInputBox {...props}/>
          </View>
        </View>
      )}
    </>
  );
};

export default PhoneNoInputBox;

function useSendOtp(body) {
  const { request } = useApi({
    onSuccess: (e) => console.log(e.message, 'tttttttttttttt'),
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
  line: {
    borderLeftColor: UTILS.STYLES.colors.gray2,
    borderLeftWidth: 1,
    height: "50%",
    marginHorizontal: 10,
  },
  verifyText: {
    fontSize: 17,
    fontWeight: "500",
    color: UTILS.STYLES.colors.themeColor,
  },
  otpBox: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
});
