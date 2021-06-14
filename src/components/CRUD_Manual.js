import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/firebaseConnection';


export default function App() {

  const [nome, setNome] = useState('Carregando...');
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();


  useEffect(()=> {
    async function dados(){
      /*await firebase.database().ref('usuarios/2').on('value', (snapshot)=>{
        setNome(snapshot.val().nome);
        setIdade(snapshot.val().idade);
        setSexo(snapshot.val().sexo);
      });*/

      //inserindo
    //await firebase.database().ref('tipo').set('Cliente');
     //inserindo em campo filho especifico
     /*await firebase.database().ref('usuarios').child(3).set({
       nome: 'Breno',
       cargo: 'Embromador Master',
       idade: 34,
       sexo: 'Masc'
     });*/

     //atualizando
     await firebase.database().ref('usuarios').child(3).update({
      nome: 'Breno Borges',
      cargo: 'Embromador Master',
      idade: 34,
      sexo: 'Masc'
     })

      //removendo
      //await firebase.database().ref('tipo').remove();

    }

    dados();

  }, [])

  return (
    <View style={styles.container, {flexDirection: 'row'}}>
      <Text style={{fontSize: 25}}>Ola {nome},</Text>
      <Text style={{fontSize: 25}}> idade: {idade}</Text>
      <Text style={{fontSize: 25}}>, sexo: {sexo}</Text>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 15,
  },
});