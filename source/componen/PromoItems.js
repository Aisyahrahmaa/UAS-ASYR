import React , { Component } from 'react'
import { View,Text,StyleSheet, } from 'react-native'
import PromoItemsSub from './PromoItemsSub'

const PromoItems = () => {
    return (
        <View style={{marginHorizontal:18, width:'100%', flexWrap:'wrap', flexDirection:'row'}}>
            <PromoItemsSub
            image={{uri : "https://blog.bankmega.com/wp-content/uploads/2022/10/Makanan-tradisional-indonesia.jpg"}}
            text="Makanan Tradisional"
            />
        </View>
    )
}

export default PromoItems
