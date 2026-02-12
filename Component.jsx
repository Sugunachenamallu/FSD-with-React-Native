import React from "react";
import {View,StyleSheet,StatusBar,Text,FlatList,Image} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import girl1 from "./assets/girl1.jpeg"
import girl2 from "./assets/girl2.jpeg"
import girl3 from "./assets/girl3.jpeg"
import girl4 from "./assets/girl4.jpeg"
const Component=()=>{
    const Results=useSafeAreaInsets();
    console.log(Results);
    const Mydata=[
        {   id:1,
            img:girl1,
            Name:"Suguna",
            Msg:"Hi"
        },
        {   id:2,
            img:girl2,
            Name:"Sruthi",
            Msg:"Hello"
        },
        {    id:3,
            img:girl3,
            Name:"Siri",
            Msg:"HRU"
        },
        {    id:4,
            img:girl4,
            Name:"Kavya",
            Msg:"Are u coming to clg??"
        }, 
        {   id:5,
            img:girl1,
            Name:"Suguna",
            Msg:"Hi"
        },
        {   id:6,
            img:girl2,
            Name:"Sruthi",
            Msg:"Hello"
        },
        {    id:7,
            img:girl3,
            Name:"Siri",
            Msg:"HRU"
        },
        {    id:8,
            img:girl4,
            Name:"Kavya",
            Msg:"Are u coming to clg??"
        }

    ]
    return(
        <>
        {/* <StatusBar barStyle="dark-content" hidden/>
        <View style={[Mystyles.MystatusBar,{paddingTop:Results.top}]}></View>
        <Text>Aditya University</Text> */}
        <FlatList
          data={Mydata}
          renderItem={({item})=>(
            <View style={Mystyles.parent}>
                <View style={Mystyles.Image_View}>
                    <Image style={Mystyles.Image_Tag}
                    source={item.img}/>
                </View>
                <View style={Mystyles.infoparent}>
                        <Text style={Mystyles.SendName}>{item.Name}</Text>
                        <Text style={Mystyles.LastMsg}>{item.Msg}</Text>
                </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id }
                />
        </>
    )
}
export default Component;
const Mystyles=StyleSheet.create({
    MystatusBar:{
        backgroundColor:"green"
    },
  parent:{
        width:"100%",
        flexDirection:'row',
        marginVertical:10,
        backgroundColor:"#D9D9D9"
    },
    Image_View:{
        width:100,
        height:100,
    },
    Image_Tag:{
        width:"100%",
        height:"100%",
        borderRadius:25
    },
    infoparent:{
        justifyContent:"space-evenly",
        marginLeft:10
    },
    SendName:{
        fontSize:24,
    },
    LastMsg:{
        fontSize:20
    }
})