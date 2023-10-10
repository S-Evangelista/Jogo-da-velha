
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Home({
    changeScreen,
}) {

    const handleClick = () => {
        changeScreen("inicio")

    }
    const handleClickF = () => {
        changeScreen("forca")

    }

    const handleClickM = () => {
        changeScreen("inicioM")

    }
    

    return (
        <View style={styles.container}>

            <Text style={styles.tituloHome}> Escolha um mini-jogo </Text>


            <Button title="Jogo da Velha # " onPress={handleClick} color="green"/>
            <Button title="Jogo da forca 🔤" onPress={handleClickF} color="green" />
            <Button title="Jogo da memória 🎴" onPress={handleClickM} color="green" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9BDCBB',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    tituloHome: {
        backgroundColor: 'white',
        padding: '12px',
        borderRadius: '5px',
        fontSize: '20px',
        fontFamily: "Arial",
        color:'darkgreen',
        margin:'60px'
    },

});