import { StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import AppDatePicker from './DatePicker';

const DateTimePicker = (props) => {
const dateTimeData = useRef({})

  const form = [
    { label: 'Select Date', mode: 'date', key: 'date' },
    { label: 'Select Time', mode: 'time', key: 'time' },
  ];

  function handleOnSelect(key, value){
    dateTimeData.current = {...dateTimeData.current, [key]: value}
    props?.onDateTimeSelect(dateTimeData.current)
  }

  return (
    <View style={styles.container}>
      {form.map((item, index) => (
       <View key={index} style={styles.boxStyle}>
         <AppDatePicker key={item.key} {...item} onDateTimeSelect={e => handleOnSelect(item.key, e)}/>
       </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  
  },
  boxStyle:{
    width: '47%'
  }
});

export default DateTimePicker;
