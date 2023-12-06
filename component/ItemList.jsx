
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import CardItem from "./CardItem"
function ItemList({data}){
    return(
        <View  style={styles.itemList}>
        <Text style={styles.h2}>Lista de tareas</Text>        
        <FlatList
        data={data}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(<CardItem item={item}/>)}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    itemList: {
      
      backgroundColor: 'fff',
      
    }, h2:{
        fontSize:"1.5rem",
        marginBottom:"0.5rem",
    fontWeight:600
      },
     
   
  });
  
export default ItemList