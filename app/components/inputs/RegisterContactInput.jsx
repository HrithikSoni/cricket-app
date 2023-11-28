import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PhoneNoInputBox from './PhoneNoInputBox'
import DropDownModal from '../modals/DropdownModal'

const RegisterContactInput = (props) => {
    const [value, setValue] = useState("")

    function handleDropdownSelect(e){
        setValue(e);
    }

  return (
    <View>
      <DropDownModal
        arrayData={countryInfo}
        title={"Select Country Code"}
        searchBarLabel={"Find Country Code"}
        imgUrl= 'https://flagsapi.com/IN/flat/64.png'
        label = "India"
        {...props}
        onDropdownSelect={(e) => handleDropdownSelect(e.value)}
      />
      <PhoneNoInputBox {...props} code={value}/>
    </View>
  )
}

const countryInfo = [
    {
      label: "France",
      imgUrl: "https://flagsapi.com/BE/flat/64.png",
      value: "+64",
    },
    {
      label: "India",
      imgUrl: "https://flagsapi.com/IN/flat/64.png",
      value: "+91",
    },
    {
      label: "United States of America",
      imgUrl: "https://flagsapi.com/US/flat/64.png",
      value: "+1",
    },
  ];

export default RegisterContactInput

const styles = StyleSheet.create({})