import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return <>
  <StatusBar barStyle={'dark-content'} /> 
  <Stack>
    <Stack.Screen name="(tab)" options={{ headerShown: false }} />
  </Stack>
  </>;
}
