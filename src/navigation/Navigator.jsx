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
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator 
              initialRouteName="Home"
        screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
          <Tab.Screen options={{
            tabBarIcon:({color})=> <MaterialCommunityIcons name="format-list-text" size={24} color={color} />
          }} name="ListToDo" component={ListToDo} />
            <Tab.Screen
          options={{
            tabBarIcon:({color})=> <AntDesign name="aliwangwang-o1" size={24} color={color} />
          }} name="Home" component={Home} />
          <Tab.Screen
          options={{
            tabBarIcon:({color})=>
            <Foundation name="target" size={24} color={color} />
          }} name="ListGoal" component={ListGoal} />         
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
export default Navigator;
