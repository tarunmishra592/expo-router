import { Text, View } from "react-native";

export default function About(){
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20
        }}>
            <Text>
                About Page
            </Text>
        </View>
    )
}