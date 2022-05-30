import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Details from './Details';
import Notifications from './Notifications';
import Settings from './Settings';
import DrawerContent from './DrawerContent';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  const MyTabs =() => {
    return (
      
        <Tab.Navigator screenOptions={{headerShown:false}}
          initialRouteName="Home"
          activeColor="#e91e63"
          barStyle={{ backgroundColor: "white" }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
         <Tab.Screen
            name="settings"
            component={Settings}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="Settings" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    )}
  const DrawerHome = () => {
      return (
   <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>} screenOptions={{headerShown:false}} initialRouteName="Home">
   
          <Drawer.Screen  name="Home" component={MyTabs} />
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

const styles = StyleSheet.create({})