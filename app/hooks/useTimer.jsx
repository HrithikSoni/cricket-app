import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function useTimer(time = 60) {
  const [timer, setTimer] = useState(time);
  const [timerRunning, setTimerRunning] = useState(false);

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

  // const timerRunning = timer !== 0
  return { timer, setTimer, timerRunning, setTimerRunning };
}

const styles = StyleSheet.create({});
