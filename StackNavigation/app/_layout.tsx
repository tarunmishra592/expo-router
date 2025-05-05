import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";


export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle:{ backgroundColor: 'red' },
    headerTintColor: 'white',
    headerTitleStyle:{fontWeight: 'bold'},
    headerRight: () => (
      <Pressable onPress={() => alert('Hello')}>
        <Text style={{color:'#fff', fontSize: 16}}>Button</Text>
      </Pressable>
    ),
    // headerTitle: (props) => <MyLogo/>
  }}>
    <Stack.Screen name="index" options={{
      title: 'Home',
    }} />
    <Stack.Screen name="about" options={{
      title: 'About'
    }} />
  </Stack>;
}
