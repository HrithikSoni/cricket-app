import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import OTPTextInput from "react-native-otp-textinput";

import ParentWrapper from "../../components/wrappers/ParentWrapper";
import Button from "../../components/Button";
import UTILS from "../../utils";

const Otp = () => {
  const [timer, setTimer] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning]);

  useEffect(() => {
    if (timer === 0) {
      setTimerRunning(false);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(30);
    setTimerRunning(true);
  };

  return (
    <ParentWrapper
      title={"OTP verification"}
      discp={"Code is sent to 9818660465"}
    >
      <View style={[styles.container]}>
        <View style={[styles.middleContainer]}>
          <Text style={[styles.text]}>Don't worry about your account</Text>
          <View style={{ marginTop: 20 }}>
            <OTPTextInput
              ref={(e) => (otpInput = e)}
              tintColor={colors.themeColor}
            />
          </View>
        </View>
        <View style={[styles.lowerContainer]}>
          <Button onButtonPress={() => {}} />
          <Text style={{color: UTILS.STYLES.colors.themeColor}}>{timer}</Text>
            <View>
              <Text style={[styles.bottomText]}>Didn't receive code?</Text>
              <TouchableOpacity onPress={handleResend} disabled={!timerRunning}>
                <Text
                  style={[
                    styles.bottomText,
                    {
                      color: timerRunning
                        ? UTILS.STYLES.colors.gray2
                        : UTILS.STYLES.colors.themeColor,
                      fontWeight: "400",
                    },
                  ]}
                >
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </ParentWrapper>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {},
  middleContainer: {
    marginVertical: 30,
  },
  lowerContainer: {
    alignItems: "center",
  },
  bottomText: {
    fontSize: 16,
  },
});
