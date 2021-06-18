import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ActivityIndicator } from 'react-native';
import firebase from './src/firebaseConnection';


export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [user, setUser] = useState('');
  

  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value)=>{
      alert('Bem-vindo(a):' + value.user.email); 
      setUser(value.user.email); 
      return; 
    })
    .catch((error)=>{      
        alert('Algo deu errado!')
        return;      
    })
    setEmail('');
    setPassword('');

  }
  async function logout(){
    await firebase.auth().signOut();
    setUser('');
    alert('Deslogado com sucesso!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email:</Text> 
      <TextInput
        style={styles.input}
        underlineColorAndroid= 'transparent'
        onChangeText={(texto)=> setEmail(texto)}
        value= {email}
      />
      <Text style={styles.texto}>Password:</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid= 'transparent'
        onChangeText={(texto)=> setPassword(texto)}
        value = {password}
      />
      <Button
        title= 'Acessar'
        onPress={logar}                
      />      
      <Text style={{marginTop: 20, marginBottom: 20, fontSize:23, textAlign: 'center'}}>
        {user}
      </Text>
      {user.length > 0 ?
        (
        <Button
          title= 'Sair'
          onPress={logout}                
        />  
        ) :
        (    
          <Text style={{marginTop: 20, marginBottom: 20, fontSize:23, textAlign: 'center'}}>
            Nenhum Usuario logado.
         </Text>
        )} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   margin: 10,
  },
  texto:{
    fontSize: 20,
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    borderRadius: 5,
    height: 45,
    fontSize: 17
  },
});
