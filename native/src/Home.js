
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Home({
    changeScreen,
}) {

    const handleClick = () => {
        changeScreen("jogo")

    }
    const handleClickF = () => {
        changeScreen("forca")

    }

    const handleClickM = () => {
        changeScreen("memoria")

    }

    return (
        <View style={styles.container}>

            <Text style={styles.tituloHome}> Escolha um mini-jogo </Text>


            <Button title="Jogo da Velha # " onPress={handleClick} color="darkblue" />
            <Button title="Jogo da forca 🔤" onPress={handleClickF} color="darkblue" />
            <Button title="Jogo da memória 🎴" onPress={handleClickM} color="darkblue" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#98c1d9',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    tituloHome: {
        backgroundColor: 'white',
        padding: '12px',
        borderRadius: '5px',
        fontSize: '20px',
        fontFamily: "Arial"
    },

});