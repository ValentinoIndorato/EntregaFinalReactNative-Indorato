import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button,Pressable } from "react-native";
import ItemList from "../component/ItemList";
import{AntDesign }from "@expo/vector-icons"
import { useSelector, useDispatch } from 'react-redux'
import { onAddItem, onHandlerDelete } from "../features/Slice";

function ListToDo({navigation}){
    const listItemsRedux = useSelector((state)=>state.toDo.value)
    const dispatch=useDispatch()



  const [item, setItem] = useState("");
  const ListItems = ["Rendir seminario", "Tesis", "Viaje a Mendoza"]; //ver cual de las dos opciones es mejor, si meter el ListItemes o meter el arra []
  const [listItems, setListItems] = useState([
    "Rendir seminario",
    "Tesis",
    "Viaje a Mendoza",
    "",
  ]);
  



  function onAddItem1() {
    setListItems((current) => [...current, item]);
    setItem("");
  }
  function onHandlerDelete1(index){
    listItems.splice(index,1)
    setListItems((current) => [...current]);
  } 
return(
    <View style={styles.container}>
      <View style={styles.addContainer}>
       {/* <Pressable onPress={()=> {setChangeScreen("home")}}>
        <AntDesign name="back" size={24} color="black" />      
        </Pressable>*/}
        <Text style={styles.h1}>Tus tareas</Text>   
     </View>
      <View style={styles.addContainer}>
        <TextInput
          placeholder="Tarea a realizar"
          value={item}
          onChangeText={(textItem) => {
            setItem(textItem);
          }}
          style={styles.input}
          focusable
        />
        <Button title="Agregar" onPress={()=>{dispatch(onAddItem(item)), console.log(listItemsRedux)}} color="#213547"  />
        
      </View>
      <Text> {item}</Text>

      <ItemList data={listItemsRedux}   />
    
    </View>
)
}
export default ListToDo
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "top",
    },
    h1: {
      fontSize: 50,
      marginBottom: 15,
      fontFamily:"RubikBubbles"
      // fontWeight: 600,  me tira error preguntar porque
    },
    addContainer: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "stretch",
      justifyContent: "center",
      // flex: 1, alignItems: 'center',
      // justifyContent: 'center',
      gap: 10,
    },
    input: {
      borderWidth: 1,
      color: "#747bff",
      borderColor: "#747bff",
      borderRadius: 5,
      paddingLeft: 5,
    },
  });