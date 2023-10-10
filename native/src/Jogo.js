import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const startValues = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

export default function JogoVelha({ changeScreen, player1, player2 }) {
    const [states, setStates] = useState(startValues);
    const [player, setPlayer] = useState("X");

    const Voltar = () => {
        changeScreen("home");
    };

    const checkPlayerWin = (player) => {
        // check lines
        for (let i = 0; i < 3; i++) {
            if (
                states[i][0] === player &&
                states[i][1] === player &&
                states[i][2] === player
            ) {
                return true;
            }
        }
        // check columns
        for (let i = 0; i < 3; i++) {
            if (
                states[0][i] === player &&
                states[1][i] === player &&
                states[2][i] === player
            ) {
                return true;
            }
        }

        // check diagonals
        if (
            states[0][0] === player &&
            states[1][1] === player &&
            states[2][2] === player
        ) {
            return true;
        }
        if (
            states[0][2] === player &&
            states[1][1] === player &&
            states[2][0] === player
        ) {
            return true;
        }

        return false;
    };

    const endPlay = (message) => {
        alert(message);
        setStates(startValues);
        Voltar();
    };

    const checkDraw = () => {
        let countStates = 0;

        states.forEach((line) => {
            line.forEach((column) => {
                if (column === "X" || column === "O") countStates++;
            });
        });

        return countStates === 9;
    };

    const checkWin = () => {
        if (checkPlayerWin("X")) {
            endPlay(`O jogador  ${player} venceu!`);
        } else if (checkPlayerWin("O")) {
            endPlay(`O jogador  ${player} venceu!`);
        } else if (checkDraw()) {
            endPlay("Ninguém venceu!");
        }
    };

    const handleClickPosition = (line, column) => {
        if (states[line][column] !== "") {
            return;
        }

        const newState = [...states];
        newState[line][column] = player;
        setStates([...newState]);
        setPlayer(player === "X" ? "O" : "X");
        checkWin();
    };

    const getPlayerName = () => (player === "X" ? player1 : player2);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Vez de {getPlayerName()} {player}
            </Text>

            {states.map((line, indexLine) => {
                return (
                    <View style={styles.line} key={indexLine}>
                        {line.map((column, indexColumn) => (
                            <TouchableOpacity
                                key={indexColumn}
                                onPress={() => handleClickPosition(indexLine, indexColumn)}
                            >
                                <View style={styles.buttonGame}>
                                    <Text style={styles.buttonGameFont}>{column}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                );
            })}
             <Button style={styles.botaoV} title="Voltar" onPress={Voltar} color="green"/>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: "row",
    },
    buttonGame: {
        backgroundColor: "#9BDCBB",
        width: 90,
        height: 90,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonGameFont: {
        fontSize: 50,
        color: "white",
    },
    container: {
        flex: 1,
        padding: 20,
        marginTop: 200,
        marginBottom: 200,
        backgroundColor: "#66917C",
        alignItems: "center",
        justifyContent: "center",
    },
    texto:{
        color:'white',
        fontStyle: "normal"
    },
   
});
