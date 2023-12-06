import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import ModalDelete from './ModalDelet';
function CardItem({item}){
    const[modalVisible, setModalVisible]=useState(false)  
   
    console.log(item) 
    return(
        <>
        <Text style={styles.h3}>Titulo </Text>
        <Text  style={styles.h4}>{item }</Text>
        <Button title='Eliminar' onPress={()=>(setModalVisible(true))} color="#747bff" disabled={item=== ""&& true} style={styles.button}/>     
        <ModalDelete modalVisible={modalVisible} setModalVisible={setModalVisible} item={item}/>   
        </>
    )
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 5,
        backgroundColor: '#000000',
      
    },
    h3:{
        fontSize:"1rem",
        marginBottom:"0.5rem",
       color:"#213547"
      
      },
      h4:{
        fontSize:"1rem",
        fontWeight:600,
       color:"#747bff"
       
      },
  });
export default CardItem