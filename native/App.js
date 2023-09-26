import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/Home';
import Jogo from './src/Jogo';

export default function App() {
  const [ screen, setScreen ] = useState("home");
  const [ jogador1, setJogador1 ] = useState("");
  const [ jogador2, setJogador2 ] = useState("");

  const checkScreen = (checkScreenName) => checkScreenName === screen;

  const setJogadores = (nome1, nome2) => {
    setJogador1(nome1);
    setJogador2(nome2);

  }

  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {screen}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
