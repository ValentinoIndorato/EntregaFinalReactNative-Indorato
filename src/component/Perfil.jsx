import { View, Text, StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/authenticationSlice';
import TabEj from '../screens/TabEj';
import { useGetUserListToDoQuery, useGetUserOneToDoQuery } from '../app/services/listToDoServices';

const Perfil = () => {
  const dispatch = useDispatch()
  const localId= useSelector(state=>state.authentication.value.localId)

const {data, isLoading, error, reset} =useGetUserOneToDoQuery({localId:localId, done:false})
const {data:user} =useGetUserListToDoQuery(localId)
const arraydata= !isLoading && Object.values(data)
// isLoading && console.log(error, data, isLoading)
// !isLoading && console.log(data, error, isLoading)
// !isLoading && console.log(localId)
// !isLoading && console.log(arraydata)
const Item = ({title}) => (
  <View >
    <Text >{title}</Text>
  </View>
);
  return (
    <View style={styles.container}>
      <TabEj/>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.text}>Juan Pérez</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Correo Electrónico:</Text>
        <Text style={styles.text}>juan.perez@example.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.text}>123-456-7890</Text>
      </View>
      { !isLoading && 
      <FlatList
        data={arraydata}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => <Item title={item.title} />}/>}
      <TouchableOpacity style={styles.button} onPress={()=>dispatch(clearUser({email:null, idToken:null, localId:null}))}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#213547',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
});

export default Perfil;