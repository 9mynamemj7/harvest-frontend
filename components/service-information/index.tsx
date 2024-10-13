import React from 'react'
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native'
import * as Clipboard from 'expo-clipboard';

import CustomText from '@/components/global/custom-text';
import {
  ProfileOutlined,
  ScheduleOutlined,
  AddressOutlined,
  EmailOutlined,
  Logo,
  SuccessOutline,
  Time
} from '@/constants/icons';

type Infomation = {
  id: string;
  icon: any;
  label: string;
  content: string;
  clipboard: boolean;
}
export type ServiceInformationProps = {
  image?: any;
  title?: string;
  participation?: string;
  explan?: string;
  time?: string;
  date?: string;
  address?: string;
  email?: string;
  bookable?: boolean;
  maxParticipation?: string;
  priceData?: {
    price?: string;
    per?: string;
  }
}
/**
 * 단위는 자동이 아님
 * @param param
 * @returns 
 */
const ServiceInformation = ({
  image,
  title,
  participation,
  date,
  address,
  email, 
  priceData,
  time,
  bookable,
  maxParticipation,
  explan,
}: ServiceInformationProps) => {
  const infomation: Array<Infomation> = [
    {id: 'bookable', icon: SuccessOutline, label: '예약여부', content: bookable ? "가능" : "불가능", clipboard: false},
    {id: 'participation', icon: ProfileOutlined, label: '참가인원', content: participation??"", clipboard: false},
    {id: 'maxParticipation', icon: ProfileOutlined, label: '최대참가인원', content: maxParticipation??"", clipboard: false},
    {id: 'time', icon: Time, label: '체험 시간', content: time??"", clipboard: false},
    {id: 'date', icon: ScheduleOutlined, label: '예약 날짜', content: date??"", clipboard: false},
    {id: 'address', icon: AddressOutlined, label: '주소', content: address??"", clipboard: true},
    {id: 'email', icon: EmailOutlined, label: '이메일', content: email??"", clipboard: false},
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
        <View className='my-4 justify-center self-center'><CustomText size='subtitle-1' content={title??""} language='ko' /></View>
        <View className='flex flex-col ml-2'>
          {infomation.map((item: Infomation) =>  {
            if (item.content.length == 0) return;
            return (
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
            )
          })}
          {explan && <CustomText color='tertiary' content={explan} language='ko'/>}
          {priceData && <CustomText size="subtitle-2" color='accent' content={`가격 : ${priceData.price}원 / ${priceData.per}`} language='ko' className='mt-4' />}
        </View>
      </View>
    </View>
  )
}

export default ServiceInformation