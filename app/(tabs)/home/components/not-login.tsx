import CustomButton from '@/components/global/custom-button'
import CustomText from '@/components/global/custom-text'
import useAuthStore from '@/store/auth'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, View } from 'react-native'

const NotLoginView = () => {
  const { setAuthTrue } = useAuthStore();
  const handleLoginButtonPress = () => {
    router.push('/(auth)/sign-in');
  }
  const handleTestButtonPress = () => {
    setAuthTrue()
  }
  return (
    <View>
      <CustomText content="농가체험을 예약하고 싶다면 로그인 해주세요." language="ko" className="self-center" size="base" />
      <CustomButton onPress={handleLoginButtonPress} title="로그인 하기" type="primary" />
      <Pressable onPress={handleTestButtonPress}><CustomText content='login true test' language='ko' /></Pressable>
    </View>
  )
}

export default NotLoginView