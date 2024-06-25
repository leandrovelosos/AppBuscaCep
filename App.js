import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from "react-native";

export default function App() {
  const [cep, setCep] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Digite o cep desjado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 68400000"
          value={cep}
          onChangeText={(texto) => SectionListComponent(texto)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#1d75cd' }]}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#cd3e1d' }]}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP:</Text>
        <Text style={styles.itemText}>Logradouro:</Text>
        <Text style={styles.itemText}>Bairro:</Text>
        <Text style={styles.itemText}>Cidade:</Text>
        <Text style={styles.itemText}>Estado:</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000'
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: "space-around"
  },
  botao: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 22,
    color: '#FFF'
  },
  resultado:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText:{
    fontSize: 22
  }
});