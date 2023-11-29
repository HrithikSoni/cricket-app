import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";
import DatePicker from "react-native-date-picker";

import UTILS from "../../utils";
import { CalendarIcon } from "../icons";

const AppDatePicker = (props) => {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={[styles.container, UTILS.STYLES.commonStyle]}
      >
        <Text
          style={[
            UTILS.STYLES.commonTextStyle,
            {
              color: date ? UTILS.COLORS.black : UTILS.COLORS.gray2,
            },
          ]}
        >
          {date ? date.toLocaleDateString() : props?.label}
        </Text>
        <CalendarIcon />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date || new Date()}
        mode={props.type}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
          props.onDateSelect(date.toISOString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
        androidVariant="iosClone"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppDatePicker;
