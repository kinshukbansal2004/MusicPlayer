import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from './BottomNav'

const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text classname="text-red-800">Account</Text>
      <View style={[styles.bottomnav,styles.shadowProp,styles.elevation]}>
      <BottomNav active={"account"} navigation={navigation}/>
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#190A25',
        alignItems: 'center',
        justifyContent: 'center',
      },
      bottomnav:{
        display: 'flex',
        width: "100%",
        position: 'absolute',
        alignItems:'center',
        bottom: 0,
      },
      shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: -7, height: 5},
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      elevation: {
        elevation: 100,
        shadowColor: 'black',
      },
})