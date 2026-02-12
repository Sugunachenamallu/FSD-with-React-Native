import React,{useState} from "react";
import {View,StyleSheet,StatusBar} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {ActivityIndicator,Badge,Button,Chip,TextInput,Icon} from "react-native-paper";
const Component2=()=>{
    const Results=useSafeAreaInsets();
    const Fun=(event)=>{
        console.log(event.nativeEvent);
    }
    const PressButton=()=>{
        console.log("pressed",new Date());
    }
    return(
        <>
        <StatusBar barStyle="dark-content" />
         <View style={[Mystyles.MystatusBar,{paddingTop:Results.top}]}></View>
        <ActivityIndicator
            size={80}
            color="red">

            </ActivityIndicator>
           <TextInput label="Enter Name" onChange={(event) => Fun(event)}/>
            <TextInput label="Enter Number" keyboardType="numeric"onChange={(event) => Fun(event)}/>


          <Button 
            mode="contained" 
            textColor="black"
            buttonColor="grey"
            loading={true}
            onPress={PressButton}>Press Me
         </Button>
         <Badge style={{backgroundColor:"green"}}>29</Badge>
         <Badge style={{backgroundColor:"red"}}>30</Badge>
         <Badge style={{backgroundColor:"black"}} size={10}></Badge>
         <Chip icon={'car'} style={{width:100}}>Car</Chip>
         <Chip icon={'home'} style={{width:90}}>Home</Chip>
         <Chip icon={'road'}>road</Chip>
         <Chip icon={'leaf'}>Leaf</Chip>
         <Chip icon={'flower'} style={{width:120}}>Flower</Chip>
         <Icon source={'pencil'} size={50} color="grey"></Icon>
         <Icon source={'flower'} size={60} color="brown"></Icon>
             <Icon source={'book'} size={70} color="black"></Icon>
             
    
        </>
    )
}
export default Component2;
const Mystyles=StyleSheet.create({
    MystatusBar:{
        backgroundColor:"green"
    }})