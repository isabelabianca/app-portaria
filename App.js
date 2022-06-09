// Dupla: Isabela Bianca Correa de Macedo - 88493
// Jonatan Jacó Mascalhusk De Oliveira Souza - 88221

import React from 'react'
import { 
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput
  } from 'react-native'

export default class App extends React.Component{

  state = {
    visitante:"",
    autorizado: true,
    exibirResultado: false,
    botoesSolicitacao: true,
    botoesAutorizacao: false,
    input: true
  }

  autorizar = () => {
    this.setState({
      autorizado: true,
      botoesSolicitacao: true,
      botoesAutorizacao: false,
      exibirResultado: true
    })
  }

  naoAutorizar = () => {
    this.setState({
      autorizado: false,
      exibirResultado:true,
      botoesSolicitacao: true,
      botoesAutorizacao: false
    })
  }

  limpar = () => {
    this.setState({
      visitante:"",
      exibirResultado: false,
      input:true
    })
  }

  handleChangeText = visitante => {
    this.setState({ visitante })
  }
  
  solicitar = () =>{
    const { visitante, solicitar } = this.state

    if (!visitante) {
      return alert("Informe o nome")
    } else {
      return this.setState({
      botoesSolicitacao: false,
      botoesAutorizacao: true,
      input:false
      })
    }
  }


  render() {
    const {visitante, exibirResultado, autorizado, botoesAutorizacao, botoesSolicitacao, solicitar, input} = this.state

    return (
      <View style={styles.container}>
        <StatusBar/>
        <View>
          <Text style={styles.titleText}>Prova Semestral</Text>
        </View>
        
        
        <View style={styles.inputContainer}>
          {input && (
            <TextInput 
            style={styles.inputText} 
            placeholder='Nome'
            placeholderTextColor="#FFF"
            value={visitante}
            onChangeText={this.handleChangeText}
          />
        )}
        {!input && (
          <Text style={[styles.text, styles.textNome]}>{visitante}</Text>
        )}
          
          {botoesSolicitacao && (
          <View style={styles.buttonArea}>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.limpar}
              >
              <Text>Limpar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.solicitar}>
              <Text> Solicitar Autorização </Text>
            </TouchableOpacity>
          </View>
          )}

          {botoesAutorizacao && 
          (<View style={styles.buttonArea}>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.autorizar}>
              <Text>Autorizar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.naoAutorizar}>
              <Text>Não autorizar </Text>
            </TouchableOpacity>
          </View>
          )}

          {exibirResultado && (
            <View>
            {autorizado &&(
            <Text style={[styles.text,styles.textAut]}>
              {`${visitante} autorizado(a)`}
            </Text>
            )}
            {!autorizado &&(
            <Text style={[styles.text,styles.textNaoAut]}>
              {`${visitante} não autorizado(a)`}
            </Text>
            )}
          </View>
          )}

        </View>
      </View>
    )
  }
} 

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#353535',
    padding:8
  },
  titleText: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    color:'#e91c5d',
    textAlign: 'center'
  },
  inputContainer: {
    flex: 1,
    padding:10
  },
  buttonArea: {
    flexDirection: 'row',
    alignSelf:'center'
  },
  button: {
    margin:10,
    padding:5,
    backgroundColor: '#e91c5d',
    borderRadius: 5,
    marginTop: 30
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  textNome: {
    color:'white'
  },
  textAut:{
    color:'green'
  },
  textNaoAut:{
    color:'red'
  },
  inputText: {
    borderColor:'#9d9d9d',
    borderWidth:1,
    fontSize: 16,
    backgroundColor:'#9c9c9c',
    padding:3,
  }
});