import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import CardItem from "./CardItem";
import { useSelector, useDispatch } from 'react-redux'
import { useGetListToDoQuery, useGetOneToDoQuery } from "../app/services/listToDoServices";
import { useEffect, useState } from "react";


function ItemList({ navigation, route, data }) {
  const listItemsRedux = useSelector((state) => state.toDo.value)
 const[onHandlerFilter,setOnHandlerFilter]=useState([])

  const {name }=route
  const {num,done }=route.params
  const {data:oneToDo, isLoading, error, reset} = useGetOneToDoQuery(done);
  
  const arrayOne= !isLoading && Object.values(oneToDo)
  console.log(arrayOne)
  //SI HAGO CAMBIOS EN LA BASE DE DATOS NO LOS LEE DE INMEDIATO

 /*useEffect(() => {


       const arrayOne=Object.values(oneToDo)
      setOnHandlerFilter(arrayOne)
        
  },[])*/
 

  

  
 return (
    <View style={styles.itemList}>
      {data && <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => <CardItem item={item} index={index} />}
      />}
      {!isLoading && name=== "Para hacer" &&<FlatList
        data={arrayOne}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) =>item !== null && (<CardItem item={item} index={index} />     )}
      />}
       
        {!isLoading && name=== "Hechas"  &&<FlatList
        data={arrayOne
        }
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => item !== null && <CardItem item={item} index={index}  isLoading={isLoading} />}
      />}
      
    </View>
  )
}
const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "fff",
    flex: 1,

    //height:400 // esto le da el tamaño y corrige el erro de que un elemento no se ve por estar tapado por la barra de navegacion
  },
  h2: {
    fontSize: 25,
    marginBottom: 2,
    //  fontWeight: 600, me tira error preguntar porque
    color: "#213547",
    backgroundColor: "blue"
  },
});

export default ItemList;
