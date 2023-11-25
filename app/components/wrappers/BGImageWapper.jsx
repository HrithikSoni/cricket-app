import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UTILS from '../../utils'

const BGImageWapper = ({children}) => {
  return (
    <View style={[styles.container]}>
        <ImageBackground source={require('../../../assets/Union.png')} style={[styles.imgStyle]}>
        {children}
    </ImageBackground>
    </View>
  )
}

export default BGImageWapper

const styles = StyleSheet.create({
    container:{
    },
    imgStyle:{
    }
})