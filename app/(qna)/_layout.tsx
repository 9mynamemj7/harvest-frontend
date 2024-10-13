import React from "react";
import { Stack } from "expo-router";

const QnALayout = () => {
  return (
    <Stack>
      <Stack.Screen name="faq" options={{ headerShown: false }} />
      <Stack.Screen name="question-list" options={{ headerShown: false }} />
      <Stack.Screen name="terms" options={{ headerShown: false }} />
    </Stack>
  );
};

export default QnALayout;
