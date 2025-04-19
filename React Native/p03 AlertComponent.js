import React from "react";
import {Text,View,Alert,Button} from 'react-native';

export default function App()
{
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Button title=" Show Alert" onPress={() =>
      Alert.alert(
        "Hello,Prensu",
        "This  is an alert message.",
        [
          {
            text:"ok",onPress: () => console.log("Ok Pressed!")
          }
        ]
      )
    } />
    </View>
);
}