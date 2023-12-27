import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
} from "react-native";
import {  useDispatch } from 'react-redux'

import {  onHandlerDelete } from "../features/Slice";


function ModalDelete({ modalVisible, setModalVisible, item,modalType,index }) {
  const dispatch=useDispatch()

  return (
    <>
      <Modal visible={modalVisible} transparent={true} style={styles.modal}>
        <View style={styles.conteinerItem}>
          <Text style={styles.tex}>{item} </Text>
          <Button
            title={modalType===true?"Editar" : "Borrar"}
            color="#747bff"
            onPress={() => {setModalVisible(false),modalType===false&& dispatch(onHandlerDelete(index))}}
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
  },
  tex: {
    color: "#fff",
    fontSize: 25,
    // fontWeight: 600, me tira error preguntar porque
  },
});
export default ModalDelete;
