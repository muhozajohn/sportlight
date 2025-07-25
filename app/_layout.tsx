import { COLORS } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar 
        style="light" 
        backgroundColor={COLORS.background}
        translucent={Platform.OS === "android"}
      />
      <SafeAreaView 
        style={{ 
          flex: 1,
          backgroundColor: COLORS.background,
        }} 
        // edges={['top', 'left', 'right']} 
      >
        <Stack 
          screenOptions={{ 
            headerShown: false,
            contentStyle: { backgroundColor: COLORS.background },
            animation: Platform.OS === "ios" ? "slide_from_right" : "fade",
          }} 
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}