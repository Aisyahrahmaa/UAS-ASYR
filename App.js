import React,{Component} from 'react'
import { View, Text, Image, Dimensions, StyleSheet, StatusBar} from 'react-native'
import imgBanner from './source/assets/images/pemandangan.jpg'
import OvoComponent from './source/componen/OvoComponent'
import FiturUtama from './source/componen/FiturUtama'
import PromoItems from './source/componen/PromoItems'

const {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
  imageBanner:{
    height:170,
    width:width,
  },
  greetingText:{
    fontSize:18,
    fontWeight:'bold',
    position:'absolute',
    alignSelf:'center',
    top:50,
    color:'#243119'
  },
  wrapperOvo:{
    marginHorizontal:18,
    height:130,
    marginTop:-78,
    backgroundColor:'white',
    elevation:4,
    borderRadius:10,
  },
  texOvo:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:12,
    marginTop:10,
  },
  garisDiOvo:{
    height:.8,
    backgroundColor:'#adadad',
    marginTop:10,
  },
  divider:{
    width:width,
    height:15,
    backgroundColor:'#e6f0e8',
    marginVertical:15,
  }
})
class Home extends Component{
  render(){
    return(
      <View>
        <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
        <Image style={styles.imageBanner} source={imgBanner}/>
        <Text style={styles.greetingText}>OJEKIN AJA</Text>
        <View style={styles.wrapperOvo}>
          <View style={styles.texOvo}>
            <Text style={{fontSize:17,fontWeight:'bold', color:'#243119'}}>Ovo Balance</Text>
            <Text style={{fontSize:17,fontWeight:'bold', color:'#243119'}}>Rp.1.000.000</Text>
          </View>
          <View style={styles.garisDiOvo}></View>
          <OvoComponent/>
        </View>
        <View style={{marginHorizontal:18,}}>
            <FiturUtama/>
        </View>
        <View style={styles.divider}></View>
        <PromoItems/>
      </View>
    )
  }
}

export default Home