import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductLayout(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Product Header</Text>
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