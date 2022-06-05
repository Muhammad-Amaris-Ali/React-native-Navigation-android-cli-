import { StyleSheet, Text, View,
  TouchableOpacity,
  Image
} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Video from 'react-native-video';
import Blender from "./assets/Blender.mp4"
const Notifications = ({ navigation }) => {
  const imageicon1 = { uri: "https://o.remove.bg/downloads/03fbe751-ec1b-40cc-9b5e-878571ad15d2/bars-1440391-1216351-removebg-preview.png" }
  const image63 = { uri: "https://i.pinimg.com/originals/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" }

  return (
    <View style={{ backgroundColor: "white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
  
    
    <Video  
            resizeMode="cover"
            source={Blender}                  // the video file
            paused={false}                  // make it start    
            style={styles.backgroundVideo}  // any style you want
            repeat={true}                   // make it a loop
        />
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({

 
backgroundVideo:{
  width:"100%",
  height:"100%",
  
}

})