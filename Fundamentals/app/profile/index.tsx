import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Profile(){

    const isLogin = true;

    if(!isLogin){
        return <Redirect href={'/login'} />
    }

    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 20
          }}>
            <Text>
                Profile Page
            </Text>
        </View>
    )
}