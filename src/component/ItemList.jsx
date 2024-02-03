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


function ItemList({ navigation, route,data }) {
  const listItemsRedux = useSelector((state)=>state.toDo.value)
  return (
    <View style={styles.itemList}>
      <Text style={styles.h2}>Lista de tareas</Text>
      {data && <FlatList
        data={data}
        keyExtractor={(item,index) => index}
        renderItem={({ item, index }) => <CardItem item={item} index={index}   />}
      />}
      {<FlatList
        data={listItemsRedux}
        keyExtractor={(item,index) => index}
        renderItem={({ item, index }) => <CardItem item={item} index={index}   />}
      />}
    </View>
  )
}
const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "fff",
    flex:1,
    
    //height:400 // esto le da el tamaño y corrige el erro de que un elemento no se ve por estar tapado por la barra de navegacion
  },
  h2: {
    fontSize: 25,
    marginBottom: 2,
  //  fontWeight: 600, me tira error preguntar porque
    color: "#213547",
    backgroundColor:"blue"
  },
});

export default ItemList;
