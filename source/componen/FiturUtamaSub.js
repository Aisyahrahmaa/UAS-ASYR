import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imageFeatureUtama:{
    height:53,
    width:53,
    marginTop:15,
  },
  textFeatureUtama:{
    textAlign:'center',
    marginTop:4,
  },
})
const FiturUtamaSub = (props) => {
    return (
        <View style={{width:'25%' , alignItems:'center'}}>
            <Image style={styles.imageFeatureUtama} source={props.image}/>
            <Text style={styles.textFeatureUtama}>{props.title}</Text>
        </View>  
    )
}

export default FiturUtamaSub