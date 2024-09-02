import { ScrollView, Text, View } from "react-native";
import React from "react";
import CustomText from "@/components/global/custom-text";
import CustomButton from "@/components/global/custom-button";
import { ExpandRight } from "@/constants/icons";
import IconButton from "@/components/global/custom-button/icon-button";
import CustomInput from "@/components/global/custom-input";
import { SearchIcon } from "@/constants/icons";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View className="flex justify-center items-center w-screen h-screen">
      <CustomText
        size="heading-2"
        language="en"
        content="Home Screen"
        className="text-brand-700"
      />
      <CustomButton
        title="Test Button"
        type="primary"
        leftIcon={ExpandRight}
        rightIcon={ExpandRight}
      />
      <CustomButton
        title="Test Button"
        type="text"
        leftIcon={ExpandRight}
        rightIcon={ExpandRight}
      />
      <IconButton icon={ExpandRight} />
      <CustomInput icon={SearchIcon} label="사용자 텍스트 인풋" />
      <ScrollView className="flex-grow-0 mt-10">
        <Text className="text-neutral-1000 mb-6">
          Demo에 존재하는 라우트 링크
        </Text>
        <View className="flex justify-center items-center gap-4">
          <Link href="/(auth)/sign-in">로그인 페이지 라우트(스택)</Link>
          <Link href="/(auth)/sign-up">회원가입 페이지 라우트(스택)</Link>
          <Link href="/(auth)/forgot-password">비밀번호 찾기 라우트(스택)</Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
