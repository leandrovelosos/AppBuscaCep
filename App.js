import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Keyboard } from "react-native";
import api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState('')
  const [cepUser, setCepUser] = useState(null)
  const inputRef = useRef(null);

  function limpar() {
    setCep('')
    inputRef.current.focus();
    setCepUser(null);
  }

  async function busar() {
    if (cep == '') {
      alert('Digite um Cep valido');
      setCep('');
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log('ERRO' + error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Digite o cep desjado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 68400000"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#1d75cd' }]}
          onPress={busar}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#cd3e1d' }]}
          onPress={limpar}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser &&

        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro:{cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro:{cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade:{cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado:{cepUser.uf}</Text>
        </View>
      }

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
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22
  }
});