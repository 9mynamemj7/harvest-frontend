import React from 'react'
import { ImageBackground, View, Text } from 'react-native'

import image from '@/assets/images/mypage-background-image.png';

const Advertisement = () => {
  return (
    <ImageBackground
      source={image}
      className='w-full h-24 rounded-lg overflow-hidden'
    >
      <Text className='top-4 font-bold text-2xl text-center text-white'>Advertisement Area</Text>
    </ImageBackground>
  )
}

export default Advertisement