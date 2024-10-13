import { ReactNode } from 'react';
import { SafeAreaView, View } from "react-native";

type AuthLayoutProps = {
  children: ReactNode;
}
const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <SafeAreaView className="flex justify-center items-center">
      <View className="w-full px-4">
        {props.children}
      </View>
    </SafeAreaView>
  )
}

export default AuthLayout