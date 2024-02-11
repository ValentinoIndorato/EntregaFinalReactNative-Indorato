import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useState } from "react";
import PruebaFire from "../PruebaFire";
import ListGoals from "../component/ListGoals";

function ListGoal({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.h1}>Tus metas</Text>        
        {/*<Pressable onPress={()=> {setChangeScreen("home")}}>
          <Text>volver</Text>
          </Pressable>*/}         
        </View>
        <View style={styles.header}><TextInput
          placeholder="Tarea a realizar"
          value="item"
          onChangeText={(textItem) => {
           
          }}          
          focusable
        />
        <Pressable onPress={()=> {setChangeScreen("home")}}>
          <Text>agregar</Text>
          </Pressable></View>
        
        <ListGoals/>
      </View>
    </>
  );
}
export default ListGoal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
    
  },
   header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",    
    gap: 10,
  },
  h1: {
    fontSize: 50,
    marginBottom: 15, 
    fontFamily:"RubikBubbles"
  },
 
});