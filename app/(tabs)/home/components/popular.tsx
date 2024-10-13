import TreeItem from '@/components/tree-item'
import React from 'react'
import { ScrollView, View, Alert } from 'react-native'

const Popular = () => {
  const itemList = [1, 2, 3, 4];

  const handleItemPress = (id: number) => {
    Alert.alert(id.toString());
  }
  return (
    <ScrollView horizontal={true}>
      {itemList.map((item: number, index: number, self) => {
        return (
          <View className='flex flex-row items-center' key={index}>
            <TreeItem key={index} onPress={() => handleItemPress(item)} />
            {self.length != index+1 && <View className='mx-4 h-2/3 w-[1px] bg-brand-100' />}
          </View>
        )
      })}
    </ScrollView>
  )
}

export default Popular