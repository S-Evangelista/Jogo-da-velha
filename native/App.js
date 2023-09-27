import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/home';
import Jogo from './src/jogo';

export default function App() {
  const [screen, setScreen] = useState("home");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const checkScreen = (checkScreen) => checkScreen === screen;

  const setJogadores = (nome1, nome2) => {
    setPlayer1(nome1);
    setPlayer2(nome2);
  }

  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("home") && (
        <Home
          mudarNomeJogadores={setJogadores}
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("jogo") && <Jogo changeScreen={changeScreen} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98c1d9',
    alignItems: 'center',
    justifyContent: 'center',

  },
});