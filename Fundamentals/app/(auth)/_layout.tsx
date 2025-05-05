import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AuthLayout(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Auth Header</Text>
            <Slot/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        backgroundColor: 'yellow'
    }
})