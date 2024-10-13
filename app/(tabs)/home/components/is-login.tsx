import CustomText from '@/components/global/custom-text'
import React from 'react'
import { View, Image, Pressable } from 'react-native'
import image from '@/assets/images/mypage-background-image.png';
import CustomButton from '@/components/global/custom-button';
import useAuthStore from '@/store/auth';

const IsLoginView = () => {
  const { setAuthFalse } = useAuthStore();
  const handleLogoutButtonPress = () => {
    setAuthFalse();
  }
  return (
    <View>
      <CustomText content="안녕하세요. 반갑습니다." language='ko' size="subtitle-2" />
      <View className='flex flex-row my-4 items-center'>
        <View className="w-16 h-16 mr-4 border-brand-400 border-solid border-[0.2rem] rounded-full justify-center items-center">
          <Image source={image} resizeMode="cover" className="w-14 h-14 rounded-full" />
        </View>
        <View className='gap-2'>
          <View className='flex flex-row justify-between items-center'>
            <CustomText content={`${"몬스테리아 러버"}`} language='en' color='tertiary' />
            <Pressable onPress={handleLogoutButtonPress}><CustomText content='로그아웃' language='ko' size='caption' color='tertiary' /></Pressable>
          </View>
          <CustomText content={`최근 예약된 농가 체험 날짜 : ${"2024.09.01"}`} language='en' color='accent' />
        </View>
      </View>
    </View>
  )
}

export default IsLoginView