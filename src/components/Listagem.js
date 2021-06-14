import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function Listagem({data}){
    return(
        <View style={styles.card}>
            <Text style={styles.text}>Nome: {data.nome}</Text>
            <Text style={styles.text}>Cargo: {data.cargo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
card:{
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#122c44',
    borderRadius: 10,
},
text:{
    color: '#fff',
    fontSize: 14,
},

})