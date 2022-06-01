import { StyleSheet, Text, View ,Button,TouchableOpacity,
  ImageBackground
  , ScrollView
  , Image} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Details from './Details';
import Notifications from './Notifications';
import Settings from './Settings';
import DrawerContent from './DrawerContent';

const imageicon1 = { uri: "https://o.remove.bg/downloads/03fbe751-ec1b-40cc-9b5e-878571ad15d2/bars-1440391-1216351-removebg-preview.png" }
const image63 = { uri: "https://i.pinimg.com/originals/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" }
const image64 = { uri: "https://images.wallpapersden.com/image/download/gradient-rainbow-5k_a2psZmiUmZqaraWkpJRsa21lrWloZ2U.jpg" }
const image65 = { uri: "https://o.remove.bg/downloads/3ea1693b-214c-411a-bc76-8e3f680f2916/Mastercard-Logo-removebg-preview.png" }
const image66 = { uri: "https://www.iconsdb.com/icons/preview/yellow/buy-xxl.png" }
const image67 = { uri: "https://freesvg.org/img/Arrow-002.png" }
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Tab2 = createMaterialTopTabNavigator();


const Navigation = () => {
  function MyTabs2() {

    return (
      <Tab2.Navigator 
      // screenOptions={{headerShown:true}}
      >
        <Tab2.Screen name="Home" component={Home}
         />
        <Tab2.Screen name="Settings" component={Settings} />
        <Tab2.Screen name="Notification" component={Notifications} />
      

      </Tab2.Navigator>
    );
  }
  
  const MyTabs =() => {
    return (
        <>
        
        
        <Tab.Navigator 
       
        screenOptions={{headerShown:true,headerStyle:styles.Homing, headerRight: () => (
          <View style={styles.div_1_2} >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.imageicon1}
            source={imageicon1} />
        </TouchableOpacity>
        <Text style={styles.Text_0021}>Wallet</Text>
        <Image
          style={styles.image63}
          source={image63} />

      </View>
          )}}

          initialRouteName="Home"
          activeColor="#e91e63"
        >
          <Tab.Screen
            name="Home"
            component={MyTabs2}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
         <Tab.Screen
            name="settings"
            component={MyTabs2}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="Settings" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator></>
    )}
  const DrawerHome = () => {
      return (
   <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>} screenOptions={{headerShown:false}} initialRouteName="Home">
          <Drawer.Screen  name="Settings" component={MyTabs} />
          <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
      )}
  

  return (  
  <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="Home" component={DrawerHome} 
 />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  
 
  
  
    
 
}

export default Navigation

const styles = StyleSheet.create({
  
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
  Homing:{
    backgroundColor:"green"
  }
})