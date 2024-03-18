import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
    Modal,
    TouchableOpacity,Switch
  } from "react-native";
import { useDispatch } from "react-redux";
import { onHandlerEdit } from "../features/Slice";
import { useState } from "react";
import { MaterialCommunityIcons  } from '@expo/vector-icons';


function ModalNewToDo({setNewToDo, onHandlerNew, setOnHandlerNew, upDateOneToDo}){
    const dispatch = useDispatch()
const [title, setTitle]= useState(null)
const [description,setDescription]= useState(null)
const [category, setCategory]= useState(null)
const [done,setDone]= useState(false)
const toggleSwitch = () => (setDone(previousState => !previousState));
const resetState=()=>{
    setTitle(null)
    setDescription(null)
    setCategory(null)
    setDone(false)
}
    return(
        <>
        <Modal   visible={onHandlerNew} transparent={true} style={styles.modal} >
           <View style={styles.conteinerItem}>
            <TouchableOpacity  style={styles.TouchableOpacity} onPress={() => setOnHandlerNew(false)}><MaterialCommunityIcons name="close-thick" size={24} color="white" /></TouchableOpacity>
            <View style={styles.conteiner}>
            <TextInput style={styles.input}
            placeholder="Título"
            value={title}
            onChangeText={(e) => {
                setTitle(e);
            }} ></TextInput>
            <TextInput style={styles.input}
            value={description}
            placeholder="Descripción"
            onChangeText={(e) => {
                setDescription(e);
            }}></TextInput>
            <TextInput style={styles.input}
            value={category}
            placeholder="Categoría"
            onChangeText={(e) => {
                setCategory(e);
            }}></TextInput>
         
            <View style={styles.realizadaONo}>
                <Text style={styles.realizadaONo_text}>{done?'Realizada' : 'Por realizar'}</Text>
            <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={done ? '#f5dd4b' : '#f4f3f4'}         
            value={done}
            onValueChange={toggleSwitch}
            />
            </View>           
            <Button  
            title={"Agregar"}
            color="#747bff"
            onPress={() =>  (setOnHandlerNew(false),upDateOneToDo({id: Date.now(),title,description,category,done}), resetState())}
          />
          </View>
          </View>
        </Modal>        
        </>
    )
}
const styles = StyleSheet.create({
    modal: {
      flex: 1,  
      alignItems: "center",
      justifyContent: "center",
    },
    conteinerItem: {
      flex: 1,
      backgroundColor: "#2135479f",
      justifyContent: "center",
    },
    conteiner: {
      alignItems: "center",
    },
    tex: {
      color: "#fff",
      fontSize: 25,
      // fontWeight: 600, me tira error preguntar porque
    },
    TouchableOpacity: {
      backgroundColor: "#747bff",
      borderRadius: 5,
      padding: 1,
      alignSelf: 'flex-end',
      marginRight: 10
        },
    input: {
    backgroundColor: "white",
    borderWidth: 1,
    color: "#747bff",
    borderColor: "#747bff",
    borderRadius: 5,
    paddingHorizontal: 10,
    margin:5
    },
    realizadaONo:{
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
      backgroundColor: "white",
      borderWidth: 1,
      color: "#747bff",
      borderColor: "#747bff",
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10 ,     
    },
    realizadaONo_text:{
      color: "#747bff",
      fontSize: 16,
    },
    button: {
  
  
    }
  });
export default ModalNewToDo

