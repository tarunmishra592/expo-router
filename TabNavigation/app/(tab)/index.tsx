import { Text, View } from "react-native";

export default function Tab(){
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20
        }}>
            <Text>
                Tab Home
            </Text>
        </View>
    )
}