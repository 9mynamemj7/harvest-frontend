import React from "react";
import { Stack } from "expo-router";

const FarmBookingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  )
};

export default FarmBookingLayout;
