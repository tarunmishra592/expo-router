import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NotFound(){
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20
        }}>
            <Text>Not Found</Text>
            <Link href={'/'}>Go to Home</Link>
        </View>
    )
}