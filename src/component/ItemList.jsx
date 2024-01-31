import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import CardItem from "./CardItem";


function ItemList({ navigation, route,data }) {
  console.log(route.params)
  return (
    <View style={styles.itemList}>
      <Text style={styles.h2}>Lista de tareas</Text>
      {data && <FlatList
        data={data}
        keyExtractor={(item,index) => index}
        renderItem={({ item, index }) => <CardItem item={item} index={index}   />}
      />}
      {route.params&& <FlatList
        data={route.params.item}
        keyExtractor={(item,index) => index}
        renderItem={({ item, index }) => <CardItem item={item} index={index}   />}
      />}
    </View>
  );
}
const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "fff",
    height:300 // esto le da el tamaño y corrige el erro de que un elemento no se ve por estar tapado por la barra de navegacion
  },
  h2: {
    fontSize: 25,
    marginBottom: 2,
  //  fontWeight: 600, me tira error preguntar porque
    color: "#213547",
  },
});

export default ItemList;
