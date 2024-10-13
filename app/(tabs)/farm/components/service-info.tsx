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
  AddressOutlined,
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
export type ServiceInfoProps = {
  image?: any;
  title?: string;
  bookable?: boolean;
  time?: string;
  participation?: string;
  address?: string;
  explan?: string;
}
/**
 * 단위는 자동이 아님
 * @param param
 * @returns 
 */
const ServiceInfo = ({
  image,
  title="",
  participation="",
  bookable,
  time="",
  address="",
  explan="", 
}: ServiceInfoProps) => {
  const infomation: Array<Infomation> = [
    {id: 'bookable', icon: SuccessOutline, label: '예약여부', content: bookable ? "가능" : "불가능", clipboard: false},
    {id: 'time', icon: Time, label: '체험 시간', content: time, clipboard: false},
    {id: 'participation', icon: ProfileOutlined, label: '참가인원', content: participation.toString(), clipboard: false},
    {id: 'address', icon: AddressOutlined, label: '주소', content: address, clipboard: true},
  ]
  const handleCopyPress = (id: string) => {
    const data = infomation.filter((item: Infomation) => item.id == id)[0]
    Clipboard.setString(data.content)
    Alert.alert('clipboard', `${data.label}(이/가) 클립보드에 복사되었습니다.`)
  }
  return (
    <View>
      {image && <Image className='w-full h-auto rounded-xl' source={image}/>}
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
          <CustomText color='tertiary' content={explan} language='ko'/>
        </View>
      </View>
    </View>
  )
}

export default ServiceInfo