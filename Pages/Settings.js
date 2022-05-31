import {
  StyleSheet,
  Button,
  View
  , Text
  , TouchableOpacity
  , ImageBackground
  , ScrollView
  , Image,

} from 'react-native';import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const imageicon1 = { uri: "https://o.remove.bg/downloads/03fbe751-ec1b-40cc-9b5e-878571ad15d2/bars-1440391-1216351-removebg-preview.png" }
const image63 = { uri: "https://i.pinimg.com/originals/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" }
const image64 = { uri: "https://images.wallpapersden.com/image/download/gradient-rainbow-5k_a2psZmiUmZqaraWkpJRsa21lrWloZ2U.jpg" }
const image65 = { uri: "https://o.remove.bg/downloads/3ea1693b-214c-411a-bc76-8e3f680f2916/Mastercard-Logo-removebg-preview.png" }

const Settings = ({ navigation }) => {
  return (
    <View style={{backgroundColor:"white"}}>
       <View style={styles.div_1_2} >
       <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <Image
          style={styles.imageicon1}
          source={imageicon1} />
          </TouchableOpacity>
      <Text  style={styles.Text_0021}>Wallet</Text>
      <Image
          style={styles.image63}
          source={image63} />
      
    </View>
    <ScrollView style={{height:hp("100%")}}>
    <View style={styles.maindome_2}>
   
    <ImageBackground style={styles.div_1_3} source={image64} resizeMode="cover"  imageStyle={{ borderRadius: 20 }} >
    <View style={styles.div_1_4}>
    <View style={styles.div_1_5}>
      <Text style={styles.Text_0022} >Balance</Text>
      <Image style={styles.image65}
              source={image65}/>
    </View>
    <Text style={styles.Text_0023}> $165,000</Text>
    <Text style={styles.Text_0024}>784 654 658 651</Text>
    </View>

    </ImageBackground>

    </View>
    </ScrollView>
    </View>

  )
}

export default Settings

const styles = StyleSheet.create({
maindome_2:{
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center"
  ,
  // marginTop:40,

  width:wp("100%"),
  // height:hp("100%"),
  backgroundColor:"white"
},
div_1_2:{
  backgroundColor:"white",
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
  width:wp("100%"),
  padding:20,
  height:60
},
imageicon1:{
  height:30,
  width:30
},
image63: {
  width: 50,
  height: 50
},
Text_0021:{
  fontWeight:"bold",
},
div_1_3:{
width:wp("90%"),
minHeight:100,
display:"flex",
justifyContent:"space-around",
marginVertical:40


},
div_1_4:{
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  // justifyContent:"space-between",
  padding:20
},
image65:{
  width:20,
  height:10
},
Text_0022:{
  color:"white",
  fontWeight:"bold"
},
div_1_5:{
  width:"90%",
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
},
Text_0023:{
  color:"white",
  fontWeight:"bold",
  fontSize:25,

  width:"96%"
},
Text_0024:{
  color:"white",
  fontWeight:"bold",
  fontSize:17,
  width:"90%"
}


})