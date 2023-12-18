import {Text,View} from "react-native"
export const Home=(props)=>{
    console.warn(props.route.params)
    const {name, age,show}=props.route.params
    return(
      
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:30}}>
        Home screen 
      </Text>
      <Text style={{fontSize:30}}>
        Home screen:{name}
      </Text>
      <Text style={{fontSize:30}}>
        Home screen :{age}
      </Text>
      <Text style={{fontSize:30}}>
        Home screen :{show}
      </Text>
    </View>)}