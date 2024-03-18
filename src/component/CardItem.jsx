import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import ModalDelete from "./ModalDelet";
import ModalEdit from "./ModalEdit";
import { useUpdateOneTodoMutation } from "../app/services/listToDoServices";


function CardItem({ item, index, isLoading }) {
   const {title, description, category, done, id}=item
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [modalType, setModalType] = useState(true);
 

const [upDateOneToDo] = useUpdateOneTodoMutation()


  return (
    <>
      <View style={done === true ? styles.conteianerDone : styles.container}>
        {/*        <Text style={styles.h3}>Titulo </Text>  */}
        <View style={styles.title}><Text style={styles.h4}>{title ? title : "title"}</Text>
        <Text style={styles.h3} numberOfLines={1} ellipsizeMode="tail">{description && description } </Text></View>
        
        <View style={styles.buttons}>
          <Button
            title={done === true ? "Realizada" : "Por realizar"}
            onPress={() => { upDateOneToDo({...item, done:!done}) }}
            color={done === true ? "#213547" : "#677587"}
            disabled={item === "" && true}//REVISAR

          />
          <Button
            title="Editar"
            onPress={() => { setModalEditVisible(true), setModalType(true) }}//preguntar si el afecta que sea con llaves o corchetes
            color="#213547"
            disabled={item === "" && true}
            style={styles.button}
          />
          <Button
            title="Eliminar"
            onPress={() => (setModalVisible(true), setModalType(false))}//preguntar si el afecta que sea con llaves o corchetes
            color="#747bff"
            disabled={item === "" && true}
            style={styles.button}
          />
        </View>
      </View >
      <ModalDelete
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
        modalType={modalType}
        index={index}

      />
      {<ModalEdit modalVisible={modalEditVisible}
        setModalVisible={setModalEditVisible}
        item={item}
        modalType={modalType}
        index={index} />}

    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 15, 
       // width: 500, queda muy grande, como lograr que sea un tamaño adaptable. Con width: "100%" funciona.
    
  },
  conteianerDone: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 15, 
    //borderWidth: 3,
    //borderColor: "#747bff",
    borderRadius: 5,    
  },
  buttons:{
//paddingLeft:50  
},
  button: {
    gap: 15
  },
  title:{
//backgroundColor:"beige",
flex:1

  },
  h3: {
    fontSize: 15,
    color: "#213547",
    // exsite? textOverflow: 'ellipsis',
    paddingRight: 20,

  },
  h4: {
    fontSize: 20,
    fontWeight: "600",  //me tira error preguntar porque
    color: "#747bff",
  },
});
export default CardItem;
