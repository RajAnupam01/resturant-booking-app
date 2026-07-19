import "../global.css";
import { Stack } from "expo-router";
import { View, Text, StyleSheet } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { UserProvider } from "@/context/userContext";

export default function RootLayout() {
  const netInfo = useNetInfo();

  return (
    <UserProvider>
      <View style={{ flex: 1}}>
        {/* Offline Banner */}
        {netInfo.isConnected === false && (
          <View style={styles.offlineBanner}>
            <Text style={styles.offlineText}>
              No internet connection. Please check your network.
            </Text>
          </View>
        )}

        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(drawer)"/>
          <Stack.Screen name="(auth)" />
          <Stack.Screen
            name="checkout"
            options={{
              presentation: 'modal',
              headerShown: true,
              headerTitle: 'Checkout',
              headerStyle: { backgroundColor: '#0a0a0a' },
              headerTintColor: '#ffffff',
            }}
          />
        </Stack>
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  offlineBanner: {
    backgroundColor: '#ff4444',
    paddingTop: 40, // Adjust based on your status bar height
    paddingBottom: 10,
    alignItems: 'center',
    zIndex: 1000,
  },
  offlineText: {
    color: 'white',
    fontWeight: 'bold',
  },
});