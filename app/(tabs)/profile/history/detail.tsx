import React from 'react';
import { ScrollView, View } from 'react-native';

import AppLayout from '@/components/ui/app-layout'
import ScreenbackButton from '@/components/global/custom-button/screenback-button'
import CustomCardContainer from '@/components/global/card/card-container';
import image from '@/assets/images/mypage-background-image.png';
import MimimizedIntroduce from '@/components/global/mini-introduce';
import Hashtag from '@/components/global/hashtag';
import ScheduleInfo from '@/app/(tabs)/schedule/_components/schedule-info';
import { number2wonFommater } from '@/utils/fommater';

const Detail = () => {
  return (
    <AppLayout>
      <View><ScreenbackButton /></View>
      <ScrollView>
        <CustomCardContainer>
          <View className=''>
            <CustomCardContainer>
              <View className='flex flex-row items-center'>
                <View className='w-[70%]'><MimimizedIntroduce image={image} /></View>
                <View className='w-[30%] flex flex-row flex-wrap justify-end'>
                  <View className='mb-1 mr-2'><Hashtag tag="해시!" /></View>
                </View>
              </View>
            </CustomCardContainer>
            <View className='my-4'>
              <ScheduleInfo
                image={image}
                title="농가 체험 서비스 제목"
                participation='4인'
                date='2024년 10월 20일'
                address='경기도 용인시 처인구'
                email='ka5560@naver.com'
                priceData={{price: number2wonFommater(240000), per: '1명'}}
              />
            </View>
          </View>
        </CustomCardContainer>
      </ScrollView>
    </AppLayout>
  )
}

export default Detail