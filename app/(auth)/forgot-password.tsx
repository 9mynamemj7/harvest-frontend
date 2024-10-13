import React from 'react';
import AuthLayout from "./_components/ui/auth-layout";
import CustomButton from "@/components/global/custom-button";
import CustomInput from "@/components/global/custom-input";
import { View } from 'react-native';
import ScreenbackButton from '@/components/global/custom-button/screenback-button';

const ForgotPassword = () => {
  const [inputData, setInputData] = React.useState<string>('')
  const handleButtonPress = () => {
    alert(`비밀번호 초기화 이메일 전송 기능 작동! ${inputData}`)
  }
  const inputIdValueChange = (text: string) => {
    setInputData(text);
  }
  return (
    <AuthLayout>
      <View className="w-full">
        <ScreenbackButton />
      </View>
      <View className="h-[90%] justify-center gap-4">
        <CustomInput
          label="이메일"
          placeholder="이메일를 입력해주세요"
          onChangeText={inputIdValueChange}
        />
        <CustomButton
          title="비밀번호 초기화 이메일 전송"
          type="primary"
          className="py-4"
          onPress={handleButtonPress}
        />
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
