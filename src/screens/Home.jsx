import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,  ImageBackground

} from "react-native";
import { useState } from "react";
import { colors } from "../Global/color";
import fondo from "../assets/rect234.png"//como lograr que sea svg
function Home({navigation}) {
  return (
    <>
          <ImageBackground source={fondo} resizeMode="cover" style={styles.image} >
      <View style={styles.container}>
        <Text style={styles.h1}>Bienvenido</Text>
        <View >
        <Pressable style={styles.Pressable} onPress={()=> navigation.navigate("ListToDo")}>
          <Text>Sus tareas</Text>
        </Pressable>
        <Pressable style={styles.Pressable} onPress={()=>{ navigation.navigate("ListGoal")}}>
          <Text>Sus metas</Text>
        </Pressable>
        </View>
      </View>
      </ImageBackground>

    </>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: "center",
    justifyContent: "center",
  },
  Pressable:{
    borderWidth: 1,
    borderColor:colors.morado,
    padding:2,
    marginTop:15,
    borderRadius: 5,

  },
  h1: {
    fontSize: 50,
    marginBottom: 15, 
    fontFamily:"RubikBubbles"
  },
  image:{
    flex: 1,
   
    alignItems: "center",
    justifyContent: "center",
  
  }
});