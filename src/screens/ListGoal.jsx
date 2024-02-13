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
import { useUpdateOneGoalMutation } from "../app/services/listGoalsServices";

function ListGoal({ navigation }) {
  const [updateOneGoal] =useUpdateOneGoalMutation()
  const [newGoal, setNewGoal] = useState({})
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Tus metas</Text>
          {/*<Pressable onPress={()=> {setChangeScreen("home")}}>
          <Text>volver</Text>
          </Pressable>*/}
        </View>
        <View style={styles.add}>
          <View  style={styles.addFazt}>
          <TextInput
           style={styles.input}
            placeholder="Meta a realizar"
            value={newGoal.title ? newGoal.title: ""}
            onChangeText={(textItem) => {
              setNewGoal ({ id: Date.now(), title: textItem, done: false })
            }}
            focusable
          /> 
           <Pressable onPress={() =>  (updateOneGoal(newGoal)) }>
            <Text>agregar rapido</Text>
          </Pressable>
          </View>
        
          <Pressable onPress={() => { setChangeScreen("home") }}>
            <Text>agregar detallado</Text>
          </Pressable>
        </View>
        <ListGoals />
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
    fontFamily: "RubikBubbles"
  },
  addFazt:{
    flexDirection: "row",
    backgroundColor:"beige"
  },
  input: {
    borderWidth: 1,
    color: "#747bff",
    borderColor: "#747bff",
    borderRadius: 5,
    paddingLeft: 5,
  },

});