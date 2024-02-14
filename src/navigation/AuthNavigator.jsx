import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingUp from '../screens/SingUp';
import Login from '../screens/Login';
import { useSelector } from 'react-redux';
import Perfil from '../component/Perfil';
const Stack = createNativeStackNavigator();

function AutheNavigator() {
  const idToken= useSelector(state=>state.authentication.value.idToken)
    return (
      <>
      {idToken!==null ?
        <Perfil/>
        :
        <Stack.Navigator
      initialRouteName="SignUp"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SingUp} />      
      </Stack.Navigator>}</>
    );
  }
  export default AutheNavigator