import Home from "../screens/Home";
import ListGoal from "../screens/ListGoal";
import ListToDo from "../screens/ListToDo"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <>
        <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="ListToDo" component={ListToDo} />
         <Stack.Screen name="ListGoal" component={ListGoal} />
        
        </Stack.Navigator>
        </NavigationContainer>
         </>
    );
}
export default Navigator