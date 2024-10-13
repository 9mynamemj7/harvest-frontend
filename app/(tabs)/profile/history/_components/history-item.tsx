import CustomText from "@/components/global/custom-text"
import {
  View,
  Image,
} from "react-native"

import { Calendar } from '@/constants/icons';

type HistoryItemProps = {
  image: any;
}
const HistoryItem = ({
  image=null,
}: HistoryItemProps) => {
  return (
    <View className='w-full flex flex-row items-center py-2'>
      <View className="justify-center h-24"><Image className='w-20 h-20 mx-2 rounded-md' source={image} /></View>
      <View className="h-24 justify-center">
        <View className='h-[50%] overflow-y-scroll'><CustomText color='tertiary' content='농장 체험 이름은 농가에서 작성' language='ko' /></View>
        <View className='flex flex-row items-center gap-x-2'>
          <Image className='w-4 h-4' source={Calendar}/>
          <CustomText color='tertiary' content={`체험날짜: {}년 {}월 {}일`} language='ko' />
        </View>
        <CustomText color='accent' content={`구매가격: 원`} language='ko' />
      </View>
    </View>
  )
}

export default HistoryItem