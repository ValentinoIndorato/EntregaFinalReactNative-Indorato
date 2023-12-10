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

export default function App() {
 const [fontLoaded] =useFonts({RubikBubbles:require("./src/assets/RubikBubbles-Regular.ttf")})
  const [changeScreen, setChangeScreen] = useState("home");
  const [backHome, setBackHome] = useState("home");
  if(!fontLoaded) return null
  return (
    <>
   
    {changeScreen==="home" && <Home setChangeScreen={setChangeScreen} />}
   {changeScreen===true && <ListToDo setChangeScreen={setChangeScreen} />}
   {changeScreen===false &&<ListGoal setChangeScreen={setChangeScreen}/> }
    </>
  );
}



