import { Text, View } from "react-native";

export default function Profile(){
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20
        }}>
            <Text>
                Profile Page
            </Text>
        </View>
    )
}