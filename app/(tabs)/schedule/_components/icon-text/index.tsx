import CustomText from '@/components/global/custom-text'
import React from 'react'
import { View, Image } from 'react-native'

type IconTextProps = {
  content?: string;
  image?: any;
}
const IconText = ({
  content="",
  image,
}: IconTextProps) => {
  return (
    <View >
      {image && <Image className="w-6 h-6" source={image} />}
      <CustomText content={content} language="ko" />
    </View>
  )
}

export default IconText