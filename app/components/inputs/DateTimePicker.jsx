import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppDatePicker from './DatePicker';

const DateTimePicker = (props) => {
  const form = [
    { label: 'Select Date', mode: 'date', key: 'date' },
    { label: 'Select Time', mode: 'time', key: 'time' },
  ];

  return (
    <View style={styles.container}>
      {form.map((item) => (
        <AppDatePicker key={item.key} {...item} {...props} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginLeft: 0,
  },
});

export default DateTimePicker;
