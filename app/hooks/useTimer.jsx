import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function useTimer(){
  const [timer, setTimer] = useState(60);
  const [timerRunning, setTimerRunning] = useState(true);

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

  return { timer, setTimer, timerRunning, setTimerRunning };
};

const styles = StyleSheet.create({});
