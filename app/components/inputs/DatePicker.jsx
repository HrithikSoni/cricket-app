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
    <View style={[UTILS.STYLES.commonStyle]}>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={[styles.container]}
      >
        <Text style={[UTILS.STYLES.commonTextStyleNormal, textStyle]}>
          {date ? date.toLocaleDateString() : props?.label}
        </Text>
        {props?.mode === "time" ? (
          <Icons.ClockIcon isFilled={date} />
        ) : (
          <Icons.CalendarIcon isFilled={date} />
        )}
      </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={open}
        date={date || new Date()}
        mode={props.mode || "datetime"}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15
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
