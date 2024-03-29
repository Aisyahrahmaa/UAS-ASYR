import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapperPay:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    ovoFeatureImage:{
      height:45,
      width:45,
      marginTop:15,
      marginHorizontal:32,
    },
})
const OvoComponent = () => {
    return (
        <View style={styles.wrapperPay}>
            <View>
              <Image style={styles.ovoFeatureImage} source={require('../assets/icon/pay.jpg')}/>
              <Text style={{alignSelf:'center',marginTop:5 }}>Pay</Text>
            </View>
            <View>
              <Image style={styles.ovoFeatureImage} source={require('../assets/icon/topup.jpg')}/>
              <Text style={{alignSelf:'center',marginTop:5 }}>Top up</Text>
            </View>
            <View>
              <Image style={styles.ovoFeatureImage} source={require('../assets/icon/reward.jpg')}/>
              <Text style={{alignSelf:'center' ,marginTop:5 }}>Reward</Text>
            </View>
        </View>
    )
}

export default OvoComponent