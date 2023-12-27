import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import CardItem from "./CardItem";


function ItemList({ data, }) {
 
  return (
    <View style={styles.itemList}>
      <Text style={styles.h2}>Lista de tareas</Text>
      <FlatList
        data={data}
        keyExtractor={(item,index) => index}
        renderItem={({ item, index }) => <CardItem item={item} index={index}   />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "fff",
  },
  h2: {
    fontSize: 25,
    marginBottom: 2,
  //  fontWeight: 600, me tira error preguntar porque
    color: "#213547",
  },
});

export default ItemList;
