import { useState } from "react";
import {Text,View,Button, TextInput} from "react-native"
export const  Login=(props)=>{
    const [show, setshow]=useState("")
    const name="Radhey";
    const age=50000;
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:30}}>
        Login Screen

      </Text>
      <TextInput onChangeText={(text)=>setshow(text)} placeholder="Enter name"/>
      <Button title='next' onPress={()=>props.navigation.navigate("Home",{name:name,age:age,show})}></Button>
    </View>)
  }