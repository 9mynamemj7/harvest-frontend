import { View } from "react-native";

import CustomText from "@/components/global/custom-text";
import ScreenbackButton from "@/components/global/custom-button/screenback-button";
import AuthLayout from "./_components/ui/auth-layout";


const SignUpScreen = () => {
  return (
    <AuthLayout>
      <View className="w-full">
        <ScreenbackButton />
      </View>
      <View className="h-full justify-center">
        <CustomText content="테스트 계정만을 받고있습니다. Harvest에 문의주세요. ka5560@naver.com" language="en" size="body" />
      </View>
    </AuthLayout>
  );
};

export default SignUpScreen;
