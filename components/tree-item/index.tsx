import React from 'react';
import { View, Image, Pressable } from 'react-native';

import { Logo, Star } from '@/constants/icons';
import CustomText from '../global/custom-text';

type TreeItemProps = {
  image?: any;
  title?: string;
  price?: string;
  prePrice?: string;
  rate?: string;
  review?: string;
  onPress?: () => void;
}
const TreeItem = ({
  image,
  title="",
  price="0원",
  prePrice="0원",
  rate="0",
  review="0",
  onPress,
}: TreeItemProps) => {
  return (
    <Pressable className='m-2' onPress={onPress}>
      <Image className='w-40 h-40 rounded-md p-2 m-2' resizeMode='cover' source={image??Logo} />
      <CustomText size="base" content={title} language='ko' numberOfLines={2} className='my-2' />
      <View className='flex flex-row justify-between items-end'>
        <View>
          <CustomText size="base" color='tertiary' content={prePrice} language='ko' className='line-through' />
          <CustomText size="subtitle-2" color='accent' content={price} language='ko' />
        </View>
        <View className='flex flex-row gap-x-2 items-center'>
          <Image className='w-4 h-4' source={Star} />
          <CustomText size="body" color="tertiary" content={`${rate} (${review})`} language='ko' />
        </View>
      </View>
    </Pressable>
  )
}

export default TreeItem