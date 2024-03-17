import { useState } from "react"
import { useSignUpMutation } from "../app/services/authenticationServices"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Pressable,  ImageBackground,TouchableOpacity
  
  } from "react-native";

const SingUp=({navigation})=>{
    const [triggerSingUp,{data,isError,isSuccess,error,isLoading}]= useSignUpMutation()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const handleSignUp = () => {triggerSingUp({email,password}),  isSuccess && (setEmail(""),setPassword(""), navigation.navigate("Login"))  }
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(textItem) => {
                setEmail (textItem)
              }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(textItem) => {
                setPassword (textItem)
              }}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin} onPress={()=>{ navigation.navigate("Login")}}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#213547',
      },
      input: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
      },
      button: {
        width: '80%',
        height: 40,
        backgroundColor: '#747bff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      buttonLogin: {
        marginTop: 20,
        width: '80%',
        height: 40,
       borderColor: '#747bff',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    
    export default SingUp;