import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Settings, Alert } from 'react-native';

function BoasVindas(props) {
  
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');  
  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const _apresentarMensagem = () => {
      if (!nome == '' && !sobrenome == ''){
          setMostraMensagem(true);
      } else {
          Alert.alert(
              'Preenchimento obrigatório',
              'Informe o nome e o sobrenome!',
              [
                  { text: 'OK'}
              ]
          )
      }

      const _limpar = () => {
          setNome('');
          setSobrenome('');
          setMostraMensagem(false);
      }
  }

  return (
    <View style={styles.container}>

        <Text style={styles.titulo}>Identificação, por favor</Text>

        <TextInput
        Style={styles.campo}
        placeholder="Digita aqui seu nome, manito:"
        onChangeText={nome => SetNome(nome)}
        value={nome}
        />
^
        <TextInput
        Style={styles.campo}
        placeholder="Digita aqui seu sobrenome, manito:"
        onChangeText={sobrenome => SetSobrenome(sobrenome)}
        value={sobrenome}
        />

        <View style={styles.botaoContainer}>
            <Button
            onPress={_apresentarMensagem}
                
            title='Aperta pra tu vê...'
            />
        </View>
        {mostrarMensagem && (
            <View>
                <Text style={styles.textos}>Olá, {nome} {sobrenome}! {props.saudacao}</Text>
                <Text style={styles.textos}>{mensagem}</Text>
                </View>
        )}

        <View style={styles.botaoContainer}>
            <Button
             onPress={_limpar}
             title="limpar"
             />

        </View>

      <Text style={styles.texto}>Olá {props.saudacao}</Text>
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  titulo: {
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
  },
  texto: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
  },

  campo: {
      backgroundColor:'#483D8B',
      fontSize: 14,
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 5,
      height: 35,
  },
  botaoContainer: {
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
  },
});
export default BoasVindas;
