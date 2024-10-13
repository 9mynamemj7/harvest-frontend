import React from "react";
import {View} from "react-native";

import CustomInput from "@/components/global/custom-input";
import CustomButton from "@/components/global/custom-button";
import ScreenbackButton from "@/components/global/custom-button/screenback-button";
import AuthLayout from "./_components/ui/auth-layout";
// import image from '@/assets/images/change-password-background-image.png';

type InputDataType = {
  prevPassword: string;
  currPassword: string;
}
const ChangePasswordScreen = () => {
  const [inputData, setInputData] = React.useState<InputDataType>({
    prevPassword: "",
    currPassword: ""
  })
  const inputPrevValueChange = (text: string) => {
    setInputData({...inputData, prevPassword: text});
  }
  const inputCurrValueChange = (text: string) => {
    setInputData({...inputData, currPassword: text});
  }
  const handleChangeButtonPress = () => {
    alert(`비밀번호 변경 프로세스 가동! 이전: ${inputData.prevPassword} 바꿀: ${inputData.currPassword}`);
  }
  
  return (
    <AuthLayout>
      {/* <ImageBackground source={image}> */}
      <View className="w-full">
        <ScreenbackButton />
      </View>
      <View className="mt-[50%] gap-4 items-center justify-center">
        <CustomInput
          label="기존 비밀번호"
          placeholder="기존 비밀번호를 입력해주세요"
          onChangeText={inputPrevValueChange}
        />
        <CustomInput
          isPassword
          label="바꿀 비밀번호"
          placeholder="바꿀 비밀번호를 입력해주세요"
          onChangeText={inputCurrValueChange}
        />
      </View>
      <View className="mt-20">
        <CustomButton
          title="비밀번호 변경하기"
          type="primary"
          className="py-4"
          onPress={handleChangeButtonPress}
        />
      </View>
      {/* </ImageBackground> */}
    </AuthLayout>
  );
};

export default ChangePasswordScreen;
