import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import ModalDelete from "./ModalDelet";


function CardItem({ item, index, onHandlerDelete, }) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(true);
  const [done, setDone] = useState(false);


  return (
    < >
      <View style={done===true ?styles.conteianerDone:styles.container}>
        <Text style={styles.h3}>Titulo </Text>      
        <Text style={styles.h4}>{item}</Text>        
        <View>
        <Button
            title={done===true ?"Realizada": "Por realizar"}
            onPress={() => {setDone(!done)}}
            color={done===true?"#213547":"#2135479f"}
            disabled={item === "" && true}
            
          />
          <Button
            title="Editar"
            onPress={() => {setModalVisible(true),setModalType(true)}}//preguntar si el afecta que sea con llaves o corchetes
            color="#213547"
            disabled={item === "" && true}
            style={styles.button}
          />
          <Button
            title="Eliminar"
            onPress={() =>( setModalVisible(true), setModalType(false))}//preguntar si el afecta que sea con llaves o corchetes
            color="#747bff"
            disabled={item === "" && true}
            style={styles.button}
          />
        </View>
      </View>
      <ModalDelete
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
        modalType={modalType}
        onHandlerDelete={onHandlerDelete}
       
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: 500, queda muy grande, como lograr que sea un tamaño adaptable. Con width: "100%" funciona.
    alignItems:"center",
    marginTop:15,
  },
  conteianerDone:{flexDirection: "row",
  justifyContent: "space-between",
  width: 500,
  alignItems:"center",
  marginTop:15,
borderWidth:3,
  borderColor:"#747bff",
  borderRadius: 5,
  padding: 5,},
  button: {   

    gap:15
  },
  h3: {
    fontSize: 15,
    color: "#213547",
  },
  h4: {
    fontSize: 20,
   // fontWeight: 600, me tira error preguntar porque
    color: "#747bff",
  },
});
export default CardItem;
