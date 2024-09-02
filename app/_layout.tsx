import TanstackProvider from "@/provider/TanstackProvider";
import "../global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Inter-Variable": require("../assets/fonts/Inter.ttf"),
    "NotoSansKR-Bold": require("../assets/fonts/NotoSansKR-Bold.ttf"),
    "NotoSansKR-Regular": require("../assets/fonts/NotoSansKR-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TanstackProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: "Oops!" }} />
      </Stack>
    </TanstackProvider>
  );
}
