import React from 'react'
import { View } from 'react-native'

type HistoryCardProps = {
  children: React.ReactNode;
}
const HistoryCard = ({
  children
}: HistoryCardProps) => {
  return (
    <View className='px-4 py-2 shadow bg-white rounded-lg border-solid border-[0.7px] border-brand-100'>
      {children}
    </View>
  )
}

export default HistoryCard