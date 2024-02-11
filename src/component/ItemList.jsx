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


function ItemList({ navigation, route, data }) {
  const listItemsRedux = useSelector((state) => state.toDo.value)
  const {data:oneToDo, isLoading, error} = useGetOneToDoQuery()
  const {name }=route

  
 return (
    <View style={styles.itemList}>
      {data && <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => <CardItem item={item} index={index} />}
      />}
      {!isLoading && name=== "Para hacer" &&<FlatList
        data={listItemsRedux}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) =>item !== null && (<CardItem item={item} index={index} />     )}
      />}
       
        {!isLoading && name=== "Hechas"  &&<FlatList
        data={oneToDo}
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
