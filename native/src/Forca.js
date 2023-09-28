import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Forca(props) {

    const handleClickV = () => {
        props.changeScreen("home")
    }


    return (
        <View style={styles.principal}>
            <Text style={styles.tituloForca}> Jogo da forca </Text>

            <View style={styles.fileira1}>
                
            </View>
            <Button title='Voltar' onPress={handleClickV} />
        </View>
    )
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "200px"
    },
    fileira1: {
        display: "flex",
        flexDirection: "row",
        padding: "2px",
        gap: "8px"

    },
    

    tituloForca: {

        padding:"4px"

    }
});

