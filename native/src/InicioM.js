import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function InicioM({
    InicioM,
    changeScreen
}) {

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    const handleClick = () => {
        changeScreen("memoria")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Jogador 1 : {player1}</Text>
            <TextInput placeholder=" Nome" style={styles.input} value={player1} onChangeText={setPlayer1} />

            <Text style={styles.text}>Jogador 2 : {player2}</Text>
            <TextInput placeholder=" Nome" style={styles.input} value={player2} onChangeText={setPlayer2} />

            <Button title="Jogar" onPress={handleClick} color="green"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9BDCBB',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 20
    },
    input: {
        width: "80%",
        height: 35,
        borderStyle: "solid",
        borderColor: "green",
        borderRadius: 2,
        borderWidth: 3
    },
    text: {
        fontSize: 15,
        backgroundColor:"white",
        padding: '7px',
        borderRadius: 4,
        borderWidth: 3,
        borderColor:'white'
    }});