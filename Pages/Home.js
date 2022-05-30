import * as React from 'react';
import {StyleSheet,
   Button,
    View
    , Text 
    ,TouchableOpacity
    ,ImageBackground 
    ,ScrollView
    , Image,
  
  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image3 = { uri: "https://i.pinimg.com/originals/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" }
const image4 = { uri: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }
const image5 = { uri: "https://o.remove.bg/downloads/3ea1693b-214c-411a-bc76-8e3f680f2916/Mastercard-Logo-removebg-preview.png" }


const Home = ({ navigation }) => {
  return (
    <View style={styles.main_dome}>
          <View style={styles.div_1}>

      <Text style={styles.topictop}>Wallet</Text>

      <Image
        style={styles.image3}
        source={image3} />
      </View>

<View style={styles.div_2}>
<ImageBackground source={image4}  resizeMode="cover" style={styles.imageback2}>
<View style={styles.div_001_inn}><View style={styles.div_3_inn}>
  <Text style={styles.text_3_inn}>Balance</Text> 
      <Image
        style={styles.image5}
        source={image5} />
</View>
<View style={styles.div_4_inn}>
  <Text style={styles.text_5_inn}>$ 16,875</Text> 
    
</View>
<View style={styles.div_004_inn}>
<Text style={styles.text_004_inn}>$16,875</Text> 
<Text style={styles.text_004_inn}>$16,875</Text> 
<Text style={styles.text_004_inn}>$16,875</Text> 
<Text style={styles.text_004_inn}>$16,875</Text> 
</View>
<View style={styles.div_004_inn}>
<Text style={styles.text_004_inn}>$16,875</Text> 
<Text style={styles.text_004_inn}>$16,875</Text> 
<Text style={styles.text_004_inn}>$16,875</Text> 
<Text style={styles.text_004_inn}>$16,875</Text> 
</View>
<View style={styles.div_004_inn}>
<Text style={styles.text_004_inn}>$16,875</Text> 
<Text style={styles.text_004_inn}>$16,875</Text> 
<Text style={styles.text_004_inn}>$16,875</Text> 
<Text style={styles.text_004_inn}>$16,875</Text> 
</View>
</View>
</ImageBackground>

</View>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  main_dome:{
    backgroundColor:"white"
  },
  div_1:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
     textAlign:"center",
     marginTop:25,
     marginLeft:-20

  },
  topictop:{
    fontWeight:"bold",
    fontSize:18,
    marginLeft:"45%"
  },
  image3:{
    width:60,
    height:60
  },
  div_2:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    height:"55%",
    width:"100%",
    padding:30,
    // borderRadius:30
  },
  imageback2:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    height:"100%",
    width:"100%"
 
  },
  div_001_inn:{
     display:"flex",
    flexDirection:"column",
    alignItems:"center",
  
  }
  ,
  image5:{
    width:60,
    height:30
  },
  div_3_inn:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    width:"100%"

  },div_4_inn:{

  },
  text_5_inn:{
    marginLeft:-140,
    color:"white",
    fontWeight:"bold",
    fontSize:30
  },
  text_3_inn:{
    color:"white",
    fontWeight:"bold",
    fontSize:14
    ,
    marginLeft:-60
  },
  div_004_inn:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
  },
  text_004_inn:{
    color:"white",
    fontWeight:"bold",
    fontSize:14,
    marginLeft:12
  }



})