import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import Button from "../../components/Button";
import UTILS from "../../utils";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import { useNavigation } from "@react-navigation/native";
import AUTH_ENDPOINTS from "../../services/api/authEndpoints";
import OTPInputBox from "../../components/inputs/OTPInputBox";
import { save, userDetail } from "../../services/permanentStorage";

const Otp = ({ navigation, route }) => {
  const [timer, setTimer] = useState(30);
  const [timerRunning, setTimerRunning] = useState(true);
  const otpInput = useRef({otp:""})

  const contact = route.params;

  const { handleOtp } = useOtp({ contact, otp: otpInput.current.otp });
  const {handleResendOtp} = useResendOtp({contact: contact, setTimer, setTimerRunning})

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
           <OTPInputBox onOtpInput={(e) => (otpInput.current.otp = e)}/>
          </View>
          <Button onButtonPress={handleOtp} />
        </View>
        <View style={[styles.lowerContainer]}>
          {timer === 0 ? (
            <Text
              style={{
                color: UTILS.STYLES.colors.themeColor,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              0:00
            </Text>
          ) : (
            <Text
              style={{
                color: UTILS.STYLES.colors.themeColor,
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
              <Text
                style={[
                  styles.bottomText,
                  {
                    color: timerRunning
                      ? UTILS.STYLES.colors.gray2
                      : UTILS.STYLES.colors.themeColor,
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
      save(userDetail, e.data)
      console.log(e, 'opppppppppppppppppp');
    },
  });
  async function handleOtp() {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.CONFIRM_OTP,
      body,
    };
    await request(requestConfig);
  }

  return { handleOtp };
}

function useResendOtp(body) {

  const {contact, setTimer, setTimerRunning} = body

  const { request } = useApi({
    onSuccess: (e) => {
      console.log("first");
    },
  });
  async function handleResendOtp() {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.SEND_OTP,
      body: {contact},
    };
    
    await request(requestConfig);
    setTimer(30);
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
