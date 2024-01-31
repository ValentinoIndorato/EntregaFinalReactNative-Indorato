
import ItemList from '../component/ItemList';
import ListGoal from '../screens/ListGoal';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function ListTabNavigator({ navigation,item}){
    console.log(item)
return(
    <Tab.Navigator>
    <Tab.Screen name="ListToDo" component={ItemList} initialParams={{item}} />
    <Tab.Screen name="Settings" component={ListGoal} />
  </Tab.Navigator>
)
}
export default ListTabNavigator