import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CatchAllProductDetails(){

    const { rest } = useLocalSearchParams<{rest: string[]}>()

    return(
        <View>
            <Text>Catch all Segments</Text>
            <Text>Details about product at {rest.join('/')}</Text>
        </View>
    )
}