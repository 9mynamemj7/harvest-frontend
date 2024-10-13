import React from 'react';
import { View, Image } from 'react-native';
import CustomText from '../custom-text';

type MimimizedIntroduceProps = {
  image?: any;
  title?: string;
  context?: string;
}
const MimimizedIntroduce = ({
  image,
  title="농가이름",
  context="농가 소개 한 줄"
}: MimimizedIntroduceProps) => {
  return (
    <View className={`flex flex-row items-center w-full my-0 ${image ? "mx-0" : "mx-2"}`}>
      {image && <Image className='w-12 h-12 rounded-full' source={image} />}
      <View className={`${image ? "w-[60%] ml-2" : "w-[100%]"}`}>
        <CustomText size='body' content={title} language='ko' className='text-[1rem] font-bold' />
        <CustomText size='base' color="tertiary" content={context} language='ko' className='overflow-hidden' />
      </View>
    </View>
  )
}

export default MimimizedIntroduce