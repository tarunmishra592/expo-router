import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login(){
    return(
        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20
        }}>
            <Text>Login Page</Text>
            <Link href={'./register'}>Create Account</Link>
            <Button title="Go to profile" onPress={() => router.replace('/profile')} />
        </View>
    )
}