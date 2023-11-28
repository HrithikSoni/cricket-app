import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../services/store/reducers/authReducer'
import { del, userDetail } from '../services/permanentStorage'

const Profile = () => {
  const dispatch = useDispatch()

  const handleButtonPress = () => {
    dispatch(logoutUser());
    del(userDetail);
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 100}}>
      <Button label={"Logout"} onButtonPress={handleButtonPress}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})