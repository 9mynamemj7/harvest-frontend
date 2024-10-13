import React from 'react'
import {ScrollView, Alert, View} from 'react-native';
import CustomCardContainer from '@/components/global/card/card-container';
import image from '@/assets/images/mypage-background-image.png';
import MimimizedIntroduce from '@/components/global/mini-introduce';
import Hashtag from '@/components/global/hashtag';
import CustomButton from '@/components/global/custom-button';
import { FailOutline, FarmOutlined } from '@/constants/icons';


const FarmListView = () => {
  const farmList = [1, 2, 3, 4, 5];
  const handleButtonPress = (id: number) => {
    Alert.alert(id.toString());
  }
  return (
    <View>
      <ScrollView horizontal={true}>
        {farmList.map((farm, index) => {
          return (
            <View key={index} className='w-[19rem] flex mx-1'>
              <CustomCardContainer
                image={image}
                imageStyle='h-[10rem]'
              >
                <MimimizedIntroduce />
                <View className='w-full h-[1px] my-2 bg-brand-300' />
                <View className='my-2'><Hashtag tag='농가체험' /></View>
                <CustomButton title='농가 구경하기' rightIcon={FarmOutlined} onPress={() => handleButtonPress(farm)} />
              </CustomCardContainer>
            </View>
          )
        })}
        
      </ScrollView>
    </View>
  )
}

export default FarmListView