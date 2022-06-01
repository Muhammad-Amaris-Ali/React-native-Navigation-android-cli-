import {
  StyleSheet,
  Button,
  View
  , Text
  , TouchableOpacity
  , ImageBackground
  , ScrollView
  , Image,

} from 'react-native'; import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Notifications from './Notifications';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const imageicon1 = { uri: "https://o.remove.bg/downloads/03fbe751-ec1b-40cc-9b5e-878571ad15d2/bars-1440391-1216351-removebg-preview.png" }
const image63 = { uri: "https://i.pinimg.com/originals/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" }
const image64 = { uri: "https://images.wallpapersden.com/image/download/gradient-rainbow-5k_a2psZmiUmZqaraWkpJRsa21lrWloZ2U.jpg" }
const image65 = { uri: "https://o.remove.bg/downloads/3ea1693b-214c-411a-bc76-8e3f680f2916/Mastercard-Logo-removebg-preview.png" }
const image66 = { uri: "https://www.iconsdb.com/icons/preview/yellow/buy-xxl.png" }
const image67 = { uri: "https://freesvg.org/img/Arrow-002.png" }
const Tab2 = createMaterialTopTabNavigator();

function Settings({navigation}) {

//   return (
//     <Tab2.Navigator>
//       <Tab2.Screen name="Home" component={MyTabs2} />
//       <Tab2.Screen name="Notifications" component={Notifications} />
//     </Tab2.Navigator>
//   );
// }
// const  MyTabs2= ({ navigation }) => {

  return (
    <View style={{ backgroundColor: "white" }}>
    
      
      <ScrollView >
        <View style={styles.maindome_2}>

          <ImageBackground style={styles.div_1_3} source={image64} resizeMode="cover" imageStyle={{ borderRadius: 20 }} >
            <View style={styles.div_1_4}>
              <View style={styles.div_1_5}>
                <Text style={styles.Text_0022} >Balance</Text>
                <Image style={styles.image65}
                  source={image65} />
              </View>
              <Text style={styles.Text_0023}> $165,000</Text>
              <Text style={styles.Text_0024}>784 654 658 651</Text>
            </View>

          </ImageBackground>

          <View style={styles.Draw_top}>
            <View style={styles.Draw_Inn}>
              <Image style={styles.image66}
                source={image66} /> 
                <Text style={styles.Txt04_Inn}>Shopping</Text>
                 <Text style={styles.Txt05_Inn}>$165,000</Text>

            </View>
            <Text style={styles.Txt06_Inn}>May 20, 14:30pm</Text>
          </View>
          <View style={styles.Draw_top}>
            <View style={styles.Draw_Inn}>
              <Image style={styles.image66}
                source={image66} /> 
                <Text style={styles.Txt04_Inn}>Shopping</Text>
                 <Text style={styles.Txt05_Inn}>$165,000</Text>

            </View>
            <Text style={styles.Txt06_Inn}>May 20, 14:30pm</Text>
          </View>
          <View style={styles.Draw_top}>
            <View style={styles.Draw_Inn}>
              <Image style={styles.image66}
                source={image66} /> 
                <Text style={styles.Txt04_Inn}>Shopping</Text>
                 <Text style={styles.Txt05_Inn}>$165,000</Text>

            </View>
            <Text style={styles.Txt06_Inn}>May 20, 14:30pm</Text>
          </View>
          
          <View style={styles.Draw_top}>
            <View style={styles.Draw_Inn}>
              <Image style={styles.image66}
                source={image66} /> 
                <Text style={styles.Txt04_Inn}>Shopping</Text>
                 <Text style={styles.Txt05_Inn}>$165,000</Text>

            </View>
            <Text style={styles.Txt06_Inn}>May 20, 14:30pm</Text>
          </View>

          <View style={styles.Draw_top}>
            <View style={styles.Draw_Inn}>
              <Image style={styles.image66}
                source={image66} /> 
                <Text style={styles.Txt04_Inn}>Shopping</Text>
                 <Text style={styles.Txt05_Inn}>$165,000</Text>

            </View>
            <Text style={styles.Txt06_Inn}>May 20, 14:30pm</Text>
          </View>
          
          <View style={styles.Draw_top}>
            <View style={styles.Draw_Inn}>
              <Image style={styles.image66}
                source={image66} /> 
                <Text style={styles.Txt04_Inn}>Shopping</Text>
                 <Text style={styles.Txt05_Inn}>$165,000</Text>

            </View>
            <Text style={styles.Txt06_Inn}>May 20, 14:30pm</Text>
          </View>
          <View style={styles.Draw_top}>
            <View style={styles.Draw_Inn}>
              <Image style={styles.image66}
                source={image66} /> 
                <Text style={styles.Txt04_Inn}>Shopping</Text>
                 <Text style={styles.Txt05_Inn}>$165,000</Text>

            </View>
            <Text style={styles.Txt06_Inn}>May 20, 14:30pm</Text>
          </View>
          <View style={styles.Draw_top}>
            <View style={styles.Draw_Inn}>
              <Image style={styles.image66}
                source={image66} /> 
                <Text style={styles.Txt04_Inn}>Shopping</Text>
                 <Text style={styles.Txt05_Inn}>$165,000</Text>

            </View>
            <Text style={styles.Txt06_Inn}>May 20, 14:30pm</Text>
          </View>
          <View style={styles.Draw_top}>
            <View style={styles.Draw_Inn}>
              <Image style={styles.image66}
                source={image66} /> 
                <Text style={styles.Txt04_Inn}>Shopping</Text>
                 <Text style={styles.Txt05_Inn}>$165,000</Text>

            </View>
            <Text style={styles.Txt06_Inn}>May 20, 14:30pm</Text>
          </View>
          <View style={styles.Draw_top}>
            <View style={styles.Draw_Inn}>
              <Image style={styles.image66}
                source={image66} /> 
                <Text style={styles.Txt04_Inn}>Shopping</Text>
                 <Text style={styles.Txt05_Inn}>$165,000</Text>

            </View>
            <Text style={styles.Txt06_Inn}>May 20, 14:30pm</Text>
          </View>

          <TouchableOpacity style={styles.containing_67}
          onPress={() => navigation.navigate("Notifications")}
          >
          <Image style={styles.image67}
                source={image67} /> 
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom:100}} ></View>
      </ScrollView>
    </View>

  )
}

export default Settings

const styles = StyleSheet.create({
  maindome_2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
    ,
    // marginTop:40,

    width: wp("100%"),
    minHeight:hp("100%"),
    backgroundColor: "white"
  },
  div_1_2: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("100%"),
    padding: 20,
    height: 60,
    
  },
  imageicon1: {
    height: 30,
    width: 30
  },
  image63: {
    width: 50,
    height: 50
  },
  Text_0021: {
    fontWeight: "bold",
  },
  div_1_3: {
    width: wp("90%"),
    minHeight: 100,
    display: "flex",
    justifyContent: "space-around",
    marginVertical:20
    
  },
  div_1_4: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent:"space-between",
    padding: 20
  },
  image65: {
    width: 20,
    height: 10
  },
  Text_0022: {
    color: "white",
    fontWeight: "bold"
  },
  div_1_5: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Text_0023: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,

    width: "96%"
  },
  Text_0024: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    width: "90%"
  }, Draw_top: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:"gray",
    height:100,
    width:wp("90%"),
    borderRadius:20,
    // marginVertical:10
   marginVertical:10

  }
  , Draw_Inn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around",
    width:"98%",
    borderRadius:20,
    backgroundColor:"lightgray",
    height:"55%"
  }
  , image66: {
    height: 30,
    width: 30
  }
  , Txt04_Inn: {
    color: "black",
    fontWeight: "bold",
  }, Txt05_Inn: {
    color: "black",
    // fontWeight: "bold",
  }, Txt06_Inn: {
    color: "lightgray",
    fontWeight: "bold",
    marginVertical:5,
    width:"80%"
  },
  Driven06_Inn:{
    width:wp("60%"),
    height:40,
    backgroundColor:"red"
  },
  image67:{
    height:50,
    width:50
  },
  containing_67:{
    backgroundColor:"darkblue",
    width:wp("30"),
    height:hp("10"),
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20
  }


})