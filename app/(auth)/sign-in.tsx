import React from "react";
import {
  View,
  Image,
  Pressable,
} from "react-native";
import { router } from "expo-router";

import {
  Kakao,
  Google,
  Apple,
  Logo,
} from "@/constants/icons";
import CustomText from "@/components/global/custom-text";
import CustomInput from "@/components/global/custom-input";
import CustomButton from "@/components/global/custom-button";
import ScreenbackButton from "@/components/global/custom-button/screenback-button";
import AuthLayout from "./_components/ui/auth-layout";

type InputDataType = {
  id: string;
  pw: string;
}
const SignInScreen = () => {
  const [inputData, setInputData] = React.useState<InputDataType>({
    id: "",
    pw: ""
  })
  const inputIdValueChange = (text: string) => {
    setInputData({...inputData, id: text});
  }
  const inputPwValueChange = (text: string) => {
    setInputData({...inputData, pw: text});
  }
  const handleSignupPress = () => {
    router.push('/(auth)/sign-up');
  }
  const handleSigninPress = () => {
    alert(`로그인 프로세스 가동! id: ${inputData.id} pw: ${inputData.pw}`);
  }
  const handleFindPasswordPress = () => {
    router.push('/(auth)/forgot-password');
  }
  
  return (
    <AuthLayout>
      <View className="w-full">
        <ScreenbackButton />
      </View>
      <View className="self-center items-center py-10">
        <Image className="w-8 h-10" source={Logo} />
        <CustomText content="Harvest" language="ko" color="accent" size="heading-5"/>
      </View>
      <View className="gap-4">
        <CustomInput
          label="아이디"
          placeholder="아이디를 입력해주세요"
          onChangeText={inputIdValueChange}
        />
        <CustomInput
          isPassword
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          onChangeText={inputPwValueChange}
        />
      </View>
      <View className="flex flex-row gap-4 my-4 items-center">
        <CustomText content="아직, 회원이 아니신가요?" language="en"/>
        <Pressable onPress={handleSignupPress}><CustomText content="회원가입" language="ko" color="accent" /></Pressable>
      </View>
      <View className="py-4">
        <CustomButton
          title="로그인"
          type="primary"
          className="py-4"
          onPress={handleSigninPress}
        />
        <CustomButton
          title="비밀번호 찾기"
          type="text"
          className="py-4"
          onPress={handleFindPasswordPress}
        />
      </View>
      {/* <View>
        <View className="w-full py-2"><LoginBox text="구글로 로그인" image={Google} /></View>
        <View className="w-full py-2"><LoginBox text="애플로 로그인" image={Apple} /></View>
        <View className="w-full py-2"><LoginBox text="카카오로 로그인" image={Kakao} /></View>
      </View> */}
    </AuthLayout>
  );
};

export default SignInScreen;

type LoginBoxProps = {
  text: string;
  image: any;
}
const LoginBox = (props: LoginBoxProps) => {
  return (
    <View className="w-[100%] h-10 flex flex-row justify-center items-center gap-x-4 border-solid border-2 border-[#E6F1EE]">
      <Image className="w-8 h-6" source={props.image} />
      <CustomText language="ko" content={props.text} />
    </View>
  )
}