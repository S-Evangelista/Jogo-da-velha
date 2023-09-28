
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function Inicio({
    mudarNomeJogadores,
    changeScreen
}) {

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    const handleClick = () => {
        if (mudarNomeJogadores) {
            mudarNomeJogadores(player1, player2)
            changeScreen("jogo")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Jogador 1 : {player1}</Text>
            <TextInput placeholder="Jogador 1" style={styles.input} value={player1} onChangeText={setPlayer1} />

            <Text style={styles.text}>Jogador 2: {player2}</Text>
            <TextInput placeholder="Jogador 2" style={styles.input} value={player2} onChangeText={setPlayer2} />

            <Button title="Jogar" onPress={handleClick} color="darkblue"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 20
    },
    input: {
        width: "80%",
        height: 35,
        borderStyle: "solid",
        borderColor: "skyblue",
        borderRadius: 2,
        borderWidth: 3
    },
    text: {
        fontSize: 15,
    }
});