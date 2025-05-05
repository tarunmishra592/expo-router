import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProductDetails(){

    const { id } = useLocalSearchParams()

    return(
        <View>
            <Text>Product Details of {id}</Text>
        </View>
    )
}