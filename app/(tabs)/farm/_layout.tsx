import React from "react";
import { Stack } from "expo-router";

const FarmLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="farm-base" options={{ headerShown: false }} />
      <Stack.Screen name="farm-detail" options={{ headerShown: false }} />
      <Stack.Screen name="farm-booking" options={{ headerShown: false }} />
    </Stack>
  )
};

export default FarmLayout;
