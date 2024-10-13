import React from "react";
import { Slot, Stack } from "expo-router";

const HistoryLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="history-screen" options={{ headerShown: false }} />
      <Stack.Screen name="detail" options={{ headerShown: false }} />
    </Stack>
  )
};

export default HistoryLayout;
