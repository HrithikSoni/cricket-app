import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import PairBtn from '../../components/PairButton'

const OnBoarding = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.upperContainer]}>
        <Image source={require("../../../assets/on-boarding-image.png")} style={[styles.image]}/>
      </View>
      <View style={[styles.middleContainer]}>
        <Text style={[styles.text]}>Welcome to the most rewarding cricket scoring app</Text>
      </View>
      <View style={[styles.lowerContainer]}>
        <PairBtn onPressLeft={()=>{}} leftBtnText={"Login"} onPressRight={()=>{}} rightBtnText={"Create"}/>
      </View>
    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent:'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    upperContainer:{
        marginTop: 20
    },
    middleContainer:{
        marginTop: 20
    },
    lowerContainer:{
        marginTop: 20
    },
    text:{
        fontSize: 30,
        lineHeight: 40,
        fontWeight:'400',
        textAlign:'center'
    },
    image:{
        height: 342,
        width:342
    }
})