import { StyleSheet, Text, View,
  TouchableOpacity,
  Image
} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Notifications = ({ navigation }) => {
  const imageicon1 = { uri: "https://o.remove.bg/downloads/03fbe751-ec1b-40cc-9b5e-878571ad15d2/bars-1440391-1216351-removebg-preview.png" }
  const image63 = { uri: "https://i.pinimg.com/originals/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" }

  return (
    <View style={{ backgroundColor: "white" }}>
    <View style={styles.div_1_2} >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.imageicon1}
          source={imageicon1} />
      </TouchableOpacity>
      <Text style={styles.Text_0021}>Notifications</Text>
      <Image
        style={styles.image63}
        source={image63} />

    </View>
    </View>
  )
}

export default Notifications

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
  }


})