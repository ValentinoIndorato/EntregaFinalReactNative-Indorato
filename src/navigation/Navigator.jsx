import Home from "../screens/Home";
import ListGoal from "../screens/ListGoal";
import ListToDo from "../screens/ListToDo"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from "../Global/color";
const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <>
        <NavigationContainer>
         <Stack.Navigator  screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerTitleStyle: {
            fontFamily:"RubikBubbles"   , // Establece el tipo de fuente que desees
            fontSize: 18, // Puedes ajustar el tamaño de la fuente según tus necesidades
            fontWeight: 'bold', // Puedes ajustar el peso de la fuente según tus necesidades
          },
      }}>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="ListToDo" component={ListToDo} />
         <Stack.Screen name="ListGoal" component={ListGoal} />
        
        </Stack.Navigator>
        </NavigationContainer>
         </>
    );
}
export default Navigator