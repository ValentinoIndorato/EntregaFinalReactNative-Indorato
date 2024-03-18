import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
  Switch
} from "react-native";
import { useDispatch } from 'react-redux'

import { onHandlerEdit } from "../features/Slice";
import { useState } from "react";
import { useUpdateOneTodoMutation } from "../app/services/listToDoServices";
import { MaterialCommunityIcons  } from '@expo/vector-icons';


function ModalEdit({ modalVisible, setModalVisible, item, modalType, index }) {
  const dispatch = useDispatch()
  const [upDateOneToDo] = useUpdateOneTodoMutation()
  const {title, description, category,done, id}=item
  const [editText, setNewEditText] = useState("");
  const [newTitle, setNewTitle]= useState(title)
  const [newDescription,setNewDescription]= useState(description)
  const [newCategory, setNewCategory]= useState(category)
  const [newDone,setDone]= useState(done)
  const toggleSwitch = () => (setDone(previousState => !previousState));
  const resetState=()=>{
    setNewTitle(title)
    setNewDescription(description)
    setNewCategory(category)
    setDone(done)
}
  return (
    <>
      <Modal visible={modalVisible} transparent={true} style={styles.modal}>
        <View style={styles.conteinerItem}>
        <TouchableOpacity onPress={() => (setModalVisible(false), resetState())} style={styles.TouchableOpacity}><MaterialCommunityIcons name="close-thick" size={24} color="white" /></TouchableOpacity>
          <Text style={styles.tex}>{title} </Text>
          <TextInput style={styles.input}
            placeholder="Título"
            value={newTitle && newTitle }
            onChangeText={(e) => {
              setNewTitle(e);
            }} ></TextInput>
            <TextInput style={styles.input}
            value={newDescription && newDescription}
            placeholder="Descripción"
            onChangeText={(e) => {
              setNewDescription(e);
            }}></TextInput>
            <TextInput style={styles.input}
            value={category!==undefined &&newCategory==category? category[0]:newCategory}
            placeholder="Categoría"
            onChangeText={(e) => {
              setNewCategory(e);
            }}></TextInput>
            <View  style={styles.realizadaONo}>
           <Text>{newDone?'Realizada' : 'Por realizar'}</Text>

           <Switch
            trackColor={{false: '#6e71a8', true: '#EDE6F3'}}
            thumbColor={newDone ? '#747bff' : '#f4f3f4'}         
            value={newDone}
            onValueChange={toggleSwitch}
            />
            </View>

          <Button style={styles.button}
            title={modalType === true ? "Editar" : "Borrar"}
            color="#747bff"
            onPress={() => ( setModalVisible(false), 
              modalType === true &&
               dispatch(onHandlerEdit({ text: editText === "" ? title : editText, index: index })),
               upDateOneToDo({...item, id, title:newTitle, description:newDescription, category:[newCategory],done:newDone}) )
                }
          />

        </View>

      </Modal>
    </>
  );
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
    alignItems: "center",
    justifyContent: "center",
    gap:10
  },
  tex: {
    color: "#fff",
    fontSize: 25,
    // fontWeight: 600, me tira error preguntar porque
  },
  input: {
    color: "#6e71a8",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#747bff",
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
  TouchableOpacity: {
    backgroundColor: "#747bff",
    borderRadius: 5,
    padding: 1,
    alignSelf: 'flex-end',
    marginRight: 10
      },
  button: {


  }
});
export default ModalEdit;