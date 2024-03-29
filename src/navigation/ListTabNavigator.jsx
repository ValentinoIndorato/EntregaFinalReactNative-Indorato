
import ItemList from '../component/ItemList';
import ListGoal from '../screens/ListGoal';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function ListTabNavigator({ navigation,item}){
return(
  
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#213547",
      tabBarInactiveTintColor: "#2135479f",
      tabBarPressColor: "#747bff",
      tabBarPressOpacity:"#747bff",
     
    }}>
    <Tab.Screen name="Para hacer" component={ItemList} initialParams={{num:5,done:false}} />
    <Tab.Screen name="Hechas" component={ItemList} initialParams={{num:3,done:true}} />
  </Tab.Navigator>
)
}
export default ListTabNavigator