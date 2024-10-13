import { ReactNode } from 'react';
import { View, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

type AppLayoutProps = {
  children: ReactNode;
}
const AppLayout = (props: AppLayoutProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full px-4 mt-2 mb-16 pb-10">
          {props.children}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AppLayout;
