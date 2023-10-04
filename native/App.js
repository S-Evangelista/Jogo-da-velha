import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/Home';
import Jogo from './src/Jogo';
import Forca from './src/Forca';
import Memoria from './src/Memoria';
import Inicio from './src/Inicio';
import InicioM from './src/InicioM';




export default function App() {
  const [screen, setScreen] = useState("home");


  const checkScreen = (checkScreen) => checkScreen === screen;

  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("home") && (
        <Home
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("inicio") && (
        <Inicio
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("inicioM") && (
        <InicioM
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("jogo") && (
        <Jogo
          changeScreen={changeScreen}
        />
      )}

      {checkScreen("forca") && (
        <Forca
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("memoria") && (
        <Memoria
          changeScreen={changeScreen}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
});