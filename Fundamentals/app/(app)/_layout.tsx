import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (<SafeAreaView  style={styles.container}>
      <View style={styles.header}>
        <Text>Main Header</Text>
      </View>
        <Slot />
      <View style={styles.footer}>
        <Text>Main Footer</Text>
      </View>
    </SafeAreaView>);
}


const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header:{
    backgroundColor: 'red',
    alignItems: 'center'
  },
  footer:{
    backgroundColor: 'green',
    alignItems: 'center'
  }
})