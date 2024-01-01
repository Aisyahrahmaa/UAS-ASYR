import React , { Component } from 'react'
import { View,Text,StyleSheet, Dimensions, Image } from 'react-native'

const {width}= Dimensions.get('window')
const styles= StyleSheet.create({
    wrapper:{
        backgroundColor:'white',
        elevation:4,
        borderRadius:8,
        width:width / 2 -27 ,
        marginRight:18,
        marginBottom:18,
    },
    promoImage:{
        height:width /2 -27,
        width:width /2 -27,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    }
})
const PromoItemsSub = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image source={props.image} style={styles.promoImage} />
        </View>
    )
}

export default PromoItemsSub
