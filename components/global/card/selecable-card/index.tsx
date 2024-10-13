import React from 'react'
import { Pressable, Text, View } from 'react-native'

type SelectableCardProps = {
  children?: React.ReactNode | string;
  selected?: boolean;
  onPress?: () => void;
}
const SelectableCard = ({
  children,
  selected=false,
  onPress
}: SelectableCardProps) => {
  return (
    <Pressable
      className={`
        flex
        items-center
        justify-center
        h-full
        w-full
        border
        border-brand-100/[0.5]
        ${selected ? "bg-brand-600" : "bg-current" }
      `}
      onPress={onPress}
    >
      {children}
    </Pressable>
  )
}

export default SelectableCard