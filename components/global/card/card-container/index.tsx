import React from 'react';
import { View, Image } from 'react-native';

const flexStyle = {
  horizontal: 'flex-row',
  stacked: 'flex-col'
}

type CardAlignType = "horizontal" | "stacked";

type CustomCardContainerProps = {
  children: React.ReactNode;
  type?: CardAlignType;
  image?: any;
  imageStyle?: string;
}
const CustomCardContainer = ({
  children,
  type = "stacked",
  image,
  imageStyle,
}: CustomCardContainerProps) => {
  return (
    <View className={`bg-white overflow-hidden shadow-lg rounded-lg border-solid border-[0.7px] border-brand-100 ${flexStyle[type]}`}>
      {image && <Image className={imageStyle??""} source={image} />} 
      <View className='mx-4 my-2'>
        {children}
      </View>
    </View>
  )
}

export default CustomCardContainer