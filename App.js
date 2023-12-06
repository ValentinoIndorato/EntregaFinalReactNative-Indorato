import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ItemList from './component/ItemList';
export default function App() {
  const[item, setItem]=useState("")  
  const ListItems = ["Rendir seminario", "Tesis", "Viaje a Mendoza",]//ver cual de las dos opciones es mejor, si meter el ListItemes o meter el arra []
  const[listItems, setListItems]=useState(["Rendir seminario", "Tesis", "Viaje a Mendoza", ""])  
  function onAddItem(){
    setListItems(current=>[...current,item])    
    setItem("")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Hola, Coder!!</Text>
      <View style={styles.addContainer}>
      <TextInput placeholder='Tarea a realizar' value={item} onChangeText={(textItem)=>{ setItem(textItem)}} style={styles.input} focusable/>
      <Button title='Agregar' onPress={onAddItem} color="#213547"/>
      </View>
      <Text > {item}</Text>
      
      <ItemList data={listItems}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  h1:{
    fontSize:"2rem",
    marginBottom:"0.5rem",
    fontWeight: 600

  },
  addContainer:{
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"stretch",
    justifyContent:"center",
   // flex: 1, alignItems: 'center',
   // justifyContent: 'center',
    gap:10,
  },
  input:{
    borderWidth:1,
    color:"#747bff",
    borderColor:"#747bff",
    borderRadius:5,
    paddingLeft:5,
    
    
  },
 
  
});
