import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import Home from "./src/screens/Home";
import ListGoal from "./src/screens/ListGoal";
import ListToDo from "./src/screens/ListToDo"
import { useState } from "react";
import { useFonts } from "expo-font";
 import { NavigationContainer } from "@react-navigation/native";
 import { createNativeStackNavigator } from '@react-navigation/native-stack';


 
 const Stack = createNativeStackNavigator();

export default function App() {
 const [fontLoaded] =useFonts({RubikBubbles:require("./src/assets/RubikBubbles-Regular.ttf")})
  const [changeScreen, setChangeScreen] = useState("home");
  const [backHome, setBackHome] = useState("home");
  if(!fontLoaded) return null


  return (
    <>
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ListToDo" component={ListToDo} />
    <Stack.Screen name="ListGoal" component={ListGoal} />
   
   </Stack.Navigator>
   </NavigationContainer>
    </>
  );
}



