import { StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import AppDatePicker from './DatePicker';

const DateTimePicker = (props) => {
const dateTimeData = useRef({date: "", time: ""})

  const form = [
    { label: 'Select Date', mode: 'date', key: 'date' },
    { label: 'Select Time', mode: 'time', key: 'time' },
  ];

  function handleOnSelect(key, value){
    props?.onDateTimeSelect({[key]: value})
  }

  return (
    <View style={styles.container}>
      {form.map((item) => (
        <AppDatePicker key={item.key} {...item} onDateSelect={e => handleOnSelect(item.key, e)}/>
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
