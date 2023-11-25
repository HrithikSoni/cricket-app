import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import OTPTextInput from "react-native-otp-textinput";


import Button from "../../components/Button";
import UTILS from "../../utils";
import OTPInputBox from "../../components/inputs/OTPInputBox";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";

const Otp = ({navigation, route}) => {
  const [timer, setTimer] = useState(30);
  const [timerRunning, setTimerRunning] = useState(true);
  const {phoneNo} = route.params

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
      discp={`Code is sent to ` + phoneNo}
      navigation={navigation}
      PTTextCon={100}
    >
      <View style={[styles.container]}>
        <View style={[styles.middleContainer]}>
          <View style={{ marginTop: 20 }}>
           <OTPInputBox />
          </View>
          <Button onButtonPress={() => {}} />
        </View>
        <View style={[styles.lowerContainer]}>
      {timer === 0 ? (
        <Text style={{ color: UTILS.STYLES.colors.themeColor, fontSize: 20, fontWeight: 'bold' }}>
        0:00
      </Text>
      ) : (
        <Text style={{ color: UTILS.STYLES.colors.themeColor, fontSize: 20, fontWeight: 'bold' }}>
          0:{timer}
        </Text>
      )}
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Text style={[styles.bottomText]}>Didn't receive code?</Text>
        <TouchableOpacity onPress={handleResend} disabled={timerRunning}>
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

const styles = StyleSheet.create({
  container: {},
  middleContainer: {
    marginVertical: 30,
    gap: 70
  },
  lowerContainer: {
    alignItems: "center",
    gap: 100,
    marginTop: 50
  },
  bottomText: {
    fontSize: 17,
  },
});
