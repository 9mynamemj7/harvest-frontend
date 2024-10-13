import React from 'react'
import { Text } from 'react-native'

type HashtagProps = {
  tag: string;
}
const Hashtag = ({
  tag,
}: HashtagProps) => {
  return (
    <Text
      numberOfLines={1}
      className={`
        border-[1px]
      border-brand-50
      bg-white
        rounded-[10px]
        px-3
        py-1
        text-sm
      text-gray-600
        self-start
      `}
    >
      {`#${tag}`}
    </Text>
  )
}

export default Hashtag