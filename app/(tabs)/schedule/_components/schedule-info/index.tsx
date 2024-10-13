import React from 'react'
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native'
import * as Clipboard from 'expo-clipboard';

import CustomText from '@/components/global/custom-text';
import { ProfileOutlined, ScheduleOutlined, AddressOutlined, EmailOutlined, Logo } from '@/constants/icons';

type Infomation = {
  id: string;
  icon: any;
  label: string;
  content: string;
  clipboard: boolean;
}
export type ScheduleInfoProps = {
  image?: any;
  title?: string;
  participation?: string;
  date?: string;
  address?: string;
  email?: string;
  priceData?: {
    price?: string;
    per?: string;
  }
}
/**
 * 단위는 자동이 아님
 * @param param0 
 * @returns 
 */
const ScheduleInfo = ({
  image,
  title="",
  participation="",
  date="",
  address="",
  email="", 
  priceData,
}: ScheduleInfoProps) => {
  const infomation: Array<Infomation> = [
    {id: 'participation', icon: ProfileOutlined, label: '참가인원', content: participation.toString(), clipboard: false},
    {id: 'date', icon: ScheduleOutlined, label: '예약 날짜', content: date, clipboard: false},
    {id: 'address', icon: AddressOutlined, label: '주소', content: address, clipboard: true},
    {id: 'email', icon: EmailOutlined, label: '이메일', content: email, clipboard: false},
  ]
  const handleCopyPress = (id: string) => {
    const data = infomation.filter((item: Infomation) => item.id == id)[0]
    Clipboard.setString(data.content)
    Alert.alert('clipboard', `${data.label}(이/가) 클립보드에 복사되었습니다.`)
  }
  return (
    <View>
      <Image className='w-full h-auto rounded-xl' source={image??Logo}/>
      <View>
        <View className='my-4 justify-center self-center'><CustomText size='subtitle-1' content={title} language='ko' /></View>
        <View className='flex flex-col ml-2'>
          {infomation.map((item: Infomation) => { return (
            <View key={item.id} className='flex flex-row items-center mb-2 justify-between'>
              <View className='flex flex-row gap-x-2 items-center'>
                <Image className='w-6 h-6' source={item.icon} />
                <CustomText content={`${item.label} : ${item.content}`} language='ko' />
              </View>
              {item.clipboard &&
                <TouchableOpacity className='' onPress={() => handleCopyPress(item.id)}>
                  <CustomText content="copy" language='en' />
                </TouchableOpacity>}
            </View>
          )})}
          {priceData && <CustomText size="subtitle-2" color='accent' content={`가격 : ${priceData.price}원 / ${priceData.per}`} language='ko' className='mt-4' />}
        </View>
      </View>
    </View>
  )
}

export default ScheduleInfo