import { View, Text, Button, ProgressBarAndroidComponent} from "react-native/types";



export default function Jogo(props) {

    const [b1, setB1] = useState("")

    const handleClick = () => {
        props.changescreen("home")
    }

    const handleClickB1 = () => {
        setB1("x")
    }

    return (
        <View>
            <Text>
                Jogo
            </Text>

            <Button title="Voltar" onPress={handleClick } />
        </View>

    )

}