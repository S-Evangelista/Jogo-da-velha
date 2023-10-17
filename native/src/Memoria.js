import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const cartas = [
    { id: 1, value: "🐴" },{ id: 2, value: "🐴" },{ id: 3, value: "🐵" }, { id: 4, value: "🐵" },
    { id: 5, value: "🦁" }, { id: 6, value: "🦁" }, { id: 7, value: "🐯" }, { id: 8, value: "🐯" },
    { id: 9, value: "🐶" }, { id: 10, value: "🐶" }, { id: 11, value: "🐱" }, { id: 12, value: "🐱" },
    { id: 13, value: "🐺" },  { id: 14, value: "🐺" },  { id: 15, value: "🐻" },  { id: 16, value: "🐻" },
    { id: 17, value: "🐼" },{ id: 18, value: "🐼" }, { id: 19, value: "🐰" }, { id: 20, value: "🐰" },
    { id: 21, value: "🦊" },{ id: 22, value: "🦊" },{ id: 23, value: "🦝" },{ id: 24, value: "🦝" },
    { id: 25, value: "🐮" },{ id: 26, value: "🐮" },{ id: 27, value: "🐷" },{ id: 28, value: "🐷" },
    { id: 29, value: "🦓" },  { id: 30, value: "🦓" }, { id: 31, value: "🐝" },  { id: 32, value: "🐝" },
    { id: 33, value: "🐢" },   { id: 34, value: "🐢" },   { id: 35, value: "🐊" },   { id: 36, value: "🐊" },
    { id: 37, value: "🐸" },  { id: 38, value: "🐸" },  { id: 39, value: "🐏" },  { id: 40, value: "🐏" },
    { id: 41, value: "🐿️" },{ id: 42, value: "🐿️" }, { id: 43, value: "🦜" },  { id: 44, value: "🦜" },
    { id: 45, value: "🦚" },  { id: 46, value: "🦚" },  { id: 47, value: "🐓" },  { id: 48, value: "🐓" },
    { id: 49, value: "🐬" },  { id: 50, value: "🐬" }
];

const embaralharCartas = (array) => {
    const arrayEmbaralhado = [...array];
    for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
    }
    return arrayEmbaralhado;
};

const Memoria = (props) => {
    const [tabuleiro, setTabuleiro] = useState([]);
    const [indicesVirados, setIndicesVirados] = useState([]);
    const [paresEncontrados, setParesEncontrados] = useState([]);
    const [jogadorVez, setJogadorVez] = useState(player1);
    const {player1, player2} = props

    useEffect(() => {
        setJogadorVez(player1)
        iniciarTabuleiro();
    }, [player1,player2]);

    const iniciarTabuleiro = () => {
        const cartasEmbaralhadas = embaralharCartas(cartas);
        setTabuleiro(cartasEmbaralhadas);
        setIndicesVirados([]);
        setParesEncontrados([]);
    };
    const apertaCarta = (indice) => {
        if (indicesVirados.length === 2 || indicesVirados.includes(indice)) {
            return;
        }

        const novosIndicesVirados = [...indicesVirados, indice];
        setIndicesVirados(novosIndicesVirados);

        if (novosIndicesVirados.length === 2) {
            const [primeiroIndice, segundoIndice] = novosIndicesVirados;
            if (tabuleiro[primeiroIndice].value === tabuleiro[segundoIndice].value) {
                setTimeout(() => {
                    setParesEncontrados([...paresEncontrados, tabuleiro[primeiroIndice].id, tabuleiro[segundoIndice].id]);
                    setIndicesVirados([]);
                    setJogadorVez(jogadorVez === player1 ? player2 : player1);
                }, 1000);
            } else {
                setTimeout(() => {
                    setIndicesVirados([]);
                    setJogadorVez(jogadorVez === player1 ? player2 : player1);
                }, 1000);
            }
        }
    };

    const renderizarCarta = (carta, indice) => {
        const estaVirada =
            indicesVirados.includes(indice) || paresEncontrados.includes(carta.id);
        const estiloCarta = estaVirada ? styles.cartaVirada : styles.carta;

        return (
            <TouchableOpacity
                key={indice}
                style={estiloCarta}
                onPress={() => apertaCarta(indice)}
                disabled={estaVirada || indicesVirados.length === 2}
            >
                {estaVirada && <Text style={styles.textoCarta}>{carta.value}</Text>}
            </TouchableOpacity>
        );
    };

    const renderizarTabuleiro = () => {
        return (
            <View style={styles.tabuleiro}>
                {tabuleiro.map((carta, indice) => renderizarCarta(carta, indice))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Jogo da Memória</Text>
            {renderizarTabuleiro()}
            <TouchableOpacity
                style={styles.botao}
                onPress={() => props.changeScreen("home")}>
                <Text style={styles.textoBotao} >Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.vez}> Jogador da vez: {jogadorVez}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9BDCBB",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        marginBottom: 20,
    },
    tabuleiro: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor:"#9BDCBB"
    },
    carta: {
        width: 80,
        height: 80,
        backgroundColor: "#66917C",
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    cartaVirada: {
        width: 80,
        height: 80,
        backgroundColor: "green",
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    textoCarta: {
        fontSize: 30,
        color: "green"
    },
    botao: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "green",
        borderRadius: 5,
        margin: 10,
    },
    textoBotao: {
        fontSize: 18,
        color: "white",
    },
    titulo: {
        fontSize: 24,
    },
});

export default Memoria;
