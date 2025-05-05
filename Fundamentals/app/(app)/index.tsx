import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
      }}
    >
      <Text>Home Page</Text>
      <Link href='/about'>About</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/products'>Products</Link>
      <Link href={'/login'} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </Link>
      <Link href='/no-route'>Not Found</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 6
  },
  buttonText:{
    color: 'white',
    fontSize: 16
  }
})
