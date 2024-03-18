import Home from "../screens/Home";
import ListGoal from "../screens/ListGoal";
import ListToDo from "../screens/ListToDo";
import StackApp from "./StackApp";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "../Global/color";
import TabEj from "../screens/TabEj";

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import AutheNavigator from "./AuthNavigator";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigator() {
  //"#6750a4"
  const variableColor = (focused)=> focused?"#747bff":"#8E8E8F"
  return (
    <>
      <NavigationContainer>
       
       <Tab.Navigator 
       
              initialRouteName="Home"
        screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown:false
      }
      }>
          <Tab.Screen options={{
            tabBarIcon:({focused})=> <MaterialCommunityIcons name="format-list-text" size={24} color={variableColor (focused)} />
          }} name="Tus tareas" component={ListToDo} />
            <Tab.Screen
          options={{
            tabBarIcon:({focused})=> <AntDesign name="aliwangwang-o1" size={24} color={variableColor (focused)} />
          }} name="Home" component={Home} />
          <Tab.Screen
          options={{
            tabBarIcon:({focused})=>
            <Foundation name="target" size={24} color={variableColor (focused)} 
            //utilice props vi que tira {"color": "black", "focused": true, "size": 25} |||  {"color": "#8E8E8F", "focused": false, "size": 25}
            />
          }} name="Tus metas" component={ListGoal} /> 
           <Tab.Screen
           options={{
            tabBarIcon:({focused})=> <AntDesign name="user" size={24} color={variableColor (focused)} />
          }} 
          name="Inicio" component={AutheNavigator} />         
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
export default Navigator;
