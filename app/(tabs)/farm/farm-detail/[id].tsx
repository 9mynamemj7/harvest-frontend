import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import CustomCardContainer from '@/components/global/card/card-container';
import image from '@/assets/images/mypage-background-image.png';
import MimimizedIntroduce from '@/components/global/mini-introduce';
import Hashtag from '@/components/global/hashtag';
import ScreenbackButton from '@/components/global/custom-button/screenback-button';
import AppLayout from '@/components/ui/app-layout';
import { Instagram, Youtube } from '@/constants/icons';
import CustomText from '@/components/global/custom-text';
import ServiceInfo from '../components/service-info';
import CustomButton from '@/components/global/custom-button';
import TreeItem from '@/components/tree-item';
import { number2wonFommater } from '@/utils/fommater';

const FarmDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const instaUrl = "insta";
  const youtubeUrl = "youtube";

  const mokList = [1,2,3,4,5,6,7];

  const handleBookingButtonPress = (id: string) => {
    router.push(`/(tabs)/farm/farm-booking/${id}`)
  }
  return (
    <AppLayout>
      <ScreenbackButton />
      <ScrollView className='mb-16'>
        <CustomCardContainer
          image={image}
          imageStyle="w-full h-[20rem]"
        >
          <View className="flex flex-row items-center my-2">
            <View className="w-[70%]">
              <MimimizedIntroduce />
            </View>
            <View className="w-[30%]">
              <Hashtag tag="test" />
            </View>
          </View>
          <View className='w-full h-[1px] bg-brand-100 my-2' />
          <CustomText
            content="농장주의 농가에 대한 간략한 설명글"
            language='ko'
          />
          <View className='flex flex-row gap-x-2 my-4'>
            <Image className='w-7 h-7' resizeMode="contain" source={Instagram} />
            <Image className='w-7 h-7' resizeMode="contain" source={Youtube} />
          </View>
          <View className='mt-8'>
            <ServiceInfo
              image={image}
              title="농가 체험 서비스 제목"
              participation='4인'
              time='4시간'
              address='경기도 용인시 처인구'
              bookable={true}
              explan='체험 서비스에 대한 간략한 설명, 농장주가 남기는 주의사항이나 공지할 내용을 적습니다.'
            />
          </View>
          <CustomButton title="농가 체험 예약하기" className='py-4 my-6' onPress={() => handleBookingButtonPress(id)} />
        </CustomCardContainer>
        <View className='flex flex-row flex-wrap'>
          {mokList.map((item, index) => { return (
            <View key={index} className='w-1/2 items-center'>
              <TreeItem
                title="귀여운 나무 너무나도 귀여운 나무 이 나무만 있다면 지구를 지배할 수 있을지도 몰라"
                price={`${number2wonFommater(20000)} 원`}
                prePrice={`${number2wonFommater(30000)} 원`}
                rate={item.toString()}
                review={item.toString()}
              />
            </View>
          )})}
        </View>
      </ScrollView>
    </AppLayout>
  )
}

export default FarmDetail