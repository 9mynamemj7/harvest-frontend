import React from 'react'
import {
  ScrollView,
  View,
  Pressable,
} from 'react-native'

import image from '@/assets/images/mypage-background-image.png';
import AppLayout from '@/components/ui/app-layout'
import ScreenbackButton from '@/components/global/custom-button/screenback-button'
import CustomButton from '@/components/global/custom-button';
import HistoryItem from './_components/history-item';
import HistoryCard from './_components/history-card';
import { router } from 'expo-router';

const History = () => {
  const handleHistoryItemPress = () => {
    router.push('/(tabs)/profile/history/detail')
  }
  return (
    <AppLayout>
      <View className='h-full'>
        <View><ScreenbackButton /></View>
        <ScrollView className='my-4'>
          <View key={`test`}>
            <HistoryCard>
              <Pressable onPress={handleHistoryItemPress}><HistoryItem image={image} /></Pressable>
              <CustomButton
                title="다시 한 번 방문하러 가기"
                className='mb-2 py-3'
              />
              <CustomButton
                title="리뷰 쓰기"
                className='mb-2 py-3 border border-solid border-brand-500'
                type="text"
              />
            </HistoryCard>
          </View>
        </ScrollView>
      </View>
    </AppLayout>
  )
}

export default History