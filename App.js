import { useFonts } from "expo-font";
 import { NavigationContainer } from "@react-navigation/native";
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from "./src/navigation/Navigator";

 

export default function App() {
 const [fontLoaded] =useFonts({RubikBubbles:require("./src/assets/RubikBubbles-Regular.ttf")})
  
  if(!fontLoaded) return null


  return (
    <>
      <Navigator/>
    </>
  );
}



