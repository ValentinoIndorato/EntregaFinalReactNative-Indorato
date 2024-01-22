import { StyleSheet, Text, View, TextInput, Button,Pressable,Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { onAddImage,  } from "../features/ImageSlice";

   
function TabEj(){
 
 const ImageRedux = useSelector((state)=>state.image.value)
 const dispatch=useDispatch()
 const [img, setImg]=useState("")
 //Puedo simplificar y no pedir dos veces el permiso?
    async function addImgCamera(){
const {granted}= await ImagePicker.requestCameraPermissionsAsync()
if (granted){
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.3,
        
      }
      
      )
      
    if (!result.canceled) {
        setImg(result.assets[0].uri) ;
        dispatch(onAddImage(result.assets[0].uri))
       
      }
}
}
async function addImgLibrary(){
    const {granted}= await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (granted){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.3,
          }
          )
          
        if (!result.canceled) {
            setImg(result.assets[0].uri);
           
          }
    }
    }

return(
<View>
    
    <Image source={img&& {uri:img}} style={{ width: 200, height: 200, }} />
    <Button title="Tomar imagen" onPress={()=>{addImgCamera()}} color="#213547"  />
    <Button title="Agregar imagen" onPress={()=>{addImgLibrary()}} color="#747bff"  />
    <Image source={img&& {uri:ImageRedux}} style={{ width: 200, height: 200, }} />

</View>
)
}
export default TabEj

const styles = StyleSheet.create({
    image: {
        width: 500,
    },
   
  });