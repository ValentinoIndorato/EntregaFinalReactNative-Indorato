import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableOpacity
} from "react-native";
import {  useDispatch } from 'react-redux'

import {  onHandlerDelete } from "../features/Slice";
import { useDeleteOneTodoMutation } from "../app/services/listToDoServices";
import { MaterialCommunityIcons  } from '@expo/vector-icons';


function ModalDelete({ modalVisible, setModalVisible, item,modalType,index }) {
  const dispatch=useDispatch()
  const {title, description, category,  id}=item
  const [deleteOneToDo] = useDeleteOneTodoMutation()

  return (
    <>
      <Modal visible={modalVisible} transparent={true} style={styles.modal}>
        <View style={styles.conteinerItem}>
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.TouchableOpacity}><MaterialCommunityIcons name="close-thick" size={24} color="white" /></TouchableOpacity>

          <Text style={styles.tex}>{title}</Text>
          <Button
            title={modalType===true?"Editar" : "Borrar"}
            color="#747bff"
            onPress={() => {setModalVisible(false),modalType===false&& deleteOneToDo(id)}}
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
    backgroundColor:"#2135479f",
    alignItems: "center",
    justifyContent: "center",
    gap:15
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
});
export default ModalDelete;
