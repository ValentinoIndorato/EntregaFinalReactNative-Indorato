import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import CardItem from "./CardItem";
function ItemList({ data, onHandlerDelete,}) {
 
  return (
    <View style={styles.itemList}>
      <Text style={styles.h2}>Lista de tareas</Text>
      <FlatList
        data={data}
        keyExtractor={(item,index) => index}
        renderItem={({ item, index }) => <CardItem item={item} index={index}  onHandlerDelete={()=>{onHandlerDelete(index)}} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "fff",
  },
  h2: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
    fontWeight: 600,
    color: "#213547",
  },
});

export default ItemList;
