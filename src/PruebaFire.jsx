import { useState, useEffect } from "react";

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
  } from "react-native";
const url = "https://reactnative-296f7-default-rtdb.firebaseio.com/"

const PruebaFire =()=> {
    const [data1, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const Products =async()=>{ const respuesta = await fetch(url + "product.json")
    const data =await respuesta.json()
    setData(data)
    setLoading(false);

}
useEffect(() => {
    Products();
  }, []);
 

  if (loading) {
    return <Text>Cargando datos...</Text>;//aca puedo usar el condicional mas abajo en vez de un if
}

    return(
<>
      
        <View style={styles.itemList}>
      { !loading && <FlatList
        data={data1}
        keyExtractor={(item,id) => id}
        renderItem={({ item, index }) =>        <View style={styles.List}> <Text  style={styles.h2}>{item.brand} </Text></View> }/>}
        </View>
        </>
    )
}
/*const getProducts =()=> {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
<View>
      {//Utiliza map para recorrer cada elemento en data1 }
      {data1.map((item, index) => (
        // Crea un componente de texto para cada elemento en data1
        <Text key={index}>{item.brand} </Text>
      ))}
    </View>
*/
export default PruebaFire
const styles = StyleSheet.create({
    itemList: {
      backgroundColor: "red",
      height:300 // esto le da el tamaño y corrige el erro de que un elemento no se ve por estar tapado por la barra de navegacion
    },
    List: {
        backgroundColor: "blue",
        height:50, // esto le da el tamaño y corrige el erro de que un elemento no se ve por estar tapado por la barra de navegacion
 
      },
    h2: {
      fontSize: 25,
      marginBottom: 2,
    //  fontWeight: 600, me tira error preguntar porque
      color: "black",
      backgroundColor: "green",

    },
  });