import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const palavras = ['banana', 'maça', 'cereja', "chinelo", "turma", "almofada", "bola", 
"sapato", "orelha", "camiseta", "garrafa", "telefone", "microepreendedor", "zoologico", "escola", "amanha",
"rosa", "cachorro", "gato", "violao", "gangorra", "vida", "sopa" ];

const Forca = (props) => {
  const [palavraParaAdivinhar, setPalavraParaAdivinhar] = useState('');
  const [palavraAdivinhada, setPalavraAdivinhada] = useState('');
  const [tentativas, setTentativas] = useState(0);
  const [maxTentativas] = useState(6);

  useEffect(() => {
    iniciarNovoJogo();
  }, []);

  useEffect(()=>{
    palavraOculta()
  },[palavraParaAdivinhar])

  useEffect(()=>{
    if(palavraAdivinhada!="" && palavraAdivinhada == palavraParaAdivinhar){
        alert("Você ganhou")
        props.changeScreen("home")

    }
  },[palavraAdivinhada])
  
  const obterPalavraAleatoria = (palavras) => {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    return palavras[indiceAleatorio];
  };

  const iniciarNovoJogo = () => {
    console.log("foi")
    const novaPalavraParaAdivinhar = obterPalavraAleatoria(palavras);
    console.log(novaPalavraParaAdivinhar)
    setPalavraParaAdivinhar(novaPalavraParaAdivinhar);
  };
  const palavraOculta = ()=>{
    let tracinhos = palavraAdivinhada;
    let palavra = palavraParaAdivinhar;
    for(let i=0;i<palavra.length;i++){
        console.log('a')
        tracinhos = tracinhos.concat("_"); 
    }
    setPalavraAdivinhada(tracinhos);
  }

  const adivinharLetra = (letra) => {
    if (palavraParaAdivinhar.includes(letra)) {
      // Substitui quando a letra está correta

      const novaPalavraAdivinhada = palavraParaAdivinhar.split('');
      const tracinho = palavraAdivinhada.split('');
      console.log(novaPalavraAdivinhada)
      for(let i=0;i<novaPalavraAdivinhada.length;i++){
        if(novaPalavraAdivinhada[i] == letra){
            tracinho[i] = letra;
        }
      }
      setPalavraAdivinhada(tracinho.join(''));

    } else{
        setTentativas(tentativas + 1);
    }
  };

  return (
    <View>
      <Text> Tentativas perdidas: {tentativas} / {maxTentativas}</Text>
      <Text> {palavraAdivinhada}</Text>
      <TextInput
        placeholder="Digite aqui"
        value={''}
        onChangeText={adivinharLetra}
      />
      <TouchableOpacity
                style={styles.botao}
                onPress={() => props.changeScreen("home")}>
                <Text style={styles.textoBotao} >Voltar</Text>
            </TouchableOpacity>
    </View>
  );
}

export default Forca;

const styles = StyleSheet.create({
    botaoAdv: {
        color: "green",
        margin: "10px"
    },

});

