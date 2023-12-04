import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-date-picker";

import UTILS from "../../utils";
import Icons from "../others/Icons";

const AppDatePicker = (props) => {
  const [dateTime, setDateTime] = useState(null);
  const [open, setOpen] = useState(false);

  const textStyle = {
    color: dateTime ? UTILS.COLORS.black : UTILS.COLORS.gray2,
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  const handleDateTimeSelect = (selectedValue) => {
    setOpen(false);
    setDateTime(selectedValue);
    if (props.mode === "time") {
      props?.onDateTimeSelect(formatTime(selectedValue));
    } else {
      props?.onDateTimeSelect(formatDate(selectedValue));
    }
  };

  return (
    <>
      <View style={[UTILS.STYLES.commonStyle, styles.container]}>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={[styles.contentContainer]}
        >
          <Text style={[UTILS.STYLES.commonTextStyleNormal, textStyle]}>
            {dateTime
              ? 
              (props.mode === "date"
                ? formatDate(dateTime)
                : formatTime(dateTime))
              : props?.label}
          </Text>
          {props?.mode === "time" ? (
            <Icons.ClockIcon isFilled={dateTime} />
          ) : (
            <Icons.CalendarIcon isFilled={dateTime} />
          )}
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={open}
        date={dateTime || new Date()}
        mode={props.mode || "datetime"}
        onConfirm={handleDateTimeSelect}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  input: {
    fontSize: 20,
    margin: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default AppDatePicker;
