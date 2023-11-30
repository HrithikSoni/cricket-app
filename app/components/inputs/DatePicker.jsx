import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";
import DatePicker from "react-native-date-picker";

import UTILS from "../../utils";
import Icons, { CalendarIcon } from "../icons";

const AppDatePicker = (props) => {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

  const textStyle = {
    color: date ? UTILS.COLORS.black : UTILS.COLORS.gray2,
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={[styles.container, UTILS.STYLES.commonStyle]}
      >
        <Text style={[UTILS.STYLES.commonTextStyleNormal, textStyle]}>
          {date ? date.toLocaleDateString() : props?.label}
        </Text>
        {props?.mode === "date" ? (
          <Icons.CalendarIcon isFilled={date} />
        ) : (
          <Icons.ClockIcon isFilled={date} />
        )}
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date || new Date()}
        mode={props.mode}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
          props?.onDateSelect(date.toISOString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 160,
  },
  input: {
    flex: 1,
    fontSize: 20,
    margin: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default AppDatePicker;
