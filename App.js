import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ActivityIndicator } from 'react-native';
import firebase from './src/firebaseConnection';


export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [user, setUser] = useState('');
  const [nome, setNome] = useState('');
 

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((value)=>{
      firebase.database().ref('usuarios').child(value.user.uid).set({
        nome: nome
      })
      alert('Usuario cadastrado com sucesso!'); 
      setNome('');
      setEmail('');
      setPassword('');
       
    })
    .catch((error)=>{      
        alert('Algo deu errado!')
        return;      
    })
    
  }

  async function logout(){
    await firebase.auth().signOut();
    setUser('');
    alert('Deslogado com sucesso!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text> 
      <TextInput
        style={styles.input}
        underlineColorAndroid= 'transparent'
        onChangeText={(texto)=> setNome(texto)}
        value= {nome}
      />
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
        secureTextEntry={true}
        underlineColorAndroid= 'transparent'
        onChangeText={(texto)=> setPassword(texto)}
        value = {password}
      />
      <Button
        title= 'Cadastrar'
        onPress={cadastrar}                
      />       
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
