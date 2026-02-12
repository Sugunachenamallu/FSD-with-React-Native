import React from "react";
import {View,Text,Button,TouchableOpacity,Image,StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import MyImage from "./assets/favicon.png";
import Component from "./Component";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Component2 from "./Component2";
const App=()=>{
     return(
      // <SafeAreaView style={{flex:1}}>
      //   <Text style={Mystyles.mytext}>Aditya University</Text>
      // </SafeAreaView>
      <>
      <SafeAreaProvider>
        <Component2/>
      </SafeAreaProvider>
      </>
     )
}
export default App;
// const Mystyles=StyleSheet.create({
//   mytext:{
//     color:"green",
//     fontSize:24
//   }
// })