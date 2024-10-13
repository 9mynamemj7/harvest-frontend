import React from "react";
import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="my-info" options={{ headerShown: false }} />
      <Stack.Screen name="history" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProfileLayout;