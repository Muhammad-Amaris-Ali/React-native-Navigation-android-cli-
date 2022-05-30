import { StyleSheet, Text, View,TouchableOpacity,ImageBackground ,ScrollView} from 'react-native'
import React from 'react'
import { withStyleAnimation } from 'react-native-reanimated/lib/types/lib/reanimated2/animation'

const image2 = { uri: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142774.jpg" }
const DrawerContent = (props) => {
  return (
    <ScrollView>
    <View>
    <View style={styles.container}>
    <ImageBackground source={image2}  style={styles.image}>
      <View style={styles.react2}><Text style={styles.react3}>DrawerContent</Text></View>
      <View style={styles.react4}>
<View><TouchableOpacity onPress={()=>props.navigation.navigate("Notifications")} ><Text>Notifications</Text></TouchableOpacity></View>
<View><TouchableOpacity onPress={()=>props.navigation.navigate("Home")} ><Text>Home</Text></TouchableOpacity></View>
</View></ImageBackground>
</View>
    </View></ScrollView>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
    react2:{backgroundColor:"blue",
    color:"white"
    ,height:50,
    width:"100%",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    // textAlign:"center"

},
react3:{
    color:"white"
},
react4:{
    // height:"90%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
},
container: {
display:"flex",
flexDirection:"column",
height:1000,
width:"100%"
  },
  image: {
    height:"100%",

    width:"100%",
      },

})