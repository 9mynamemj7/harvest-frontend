import { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { router } from 'expo-router';

import CustomCardContainer from "@/components/global/card/card-container";
import image from '@/assets/images/mypage-background-image.png';
import MimimizedIntroduce from "@/components/global/mini-introduce";
import Hashtag from "@/components/global/hashtag";
import { FarmCategory } from '@/constants';
import AppLayout from '@/components/ui/app-layout';
import { SafeAreaView } from 'react-native-safe-area-context';


type FarmData = {
  id: number;
  cover: any;
  profile: any;
  farmName: string;
  farmContent: string;
  hashTag: Array<string>;
}
const FarmBaseScreen = () => {
  const farmDataList: Array<FarmData> = [
    {id: 1, cover: image, profile: image, farmName: "농가이름1", farmContent: "농가 소개 한 줄1", hashTag: ["농가체험", "복숭아나무"]},
    {id: 2, cover: image, profile: image, farmName: "농가이름2", farmContent: "농가 소개 한 줄2", hashTag: ["농가체험", "사과나무"]},
    {id: 3, cover: image, profile: image, farmName: "농가이름3", farmContent: "농가 소개 한 줄3", hashTag: ["농가체험", "배나무"]},
    {id: 4, cover: image, profile: image, farmName: "농가이름3", farmContent: "농가 소개 한 줄3", hashTag: ["농가체험", "배나무"]},
    {id: 5, cover: image, profile: image, farmName: "농가이름3", farmContent: "농가 소개 한 줄3", hashTag: ["농가체험", "배나무"]}
  ]
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const items = FarmCategory;

  const handleCardItemPress = (id: number) => {
    router.push(`/(tabs)/farm/farm-detail/${id}`)
  }
  return (
    <SafeAreaView className='grow'>
      <View className='mx-4'>
        <DropDownPicker
          placeholder='나무 종류를 선택해 주세요.'
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          style={{
            borderColor: '#E6F1EE',
            marginVertical: 10,
            padding: 5,
            borderRadius: 10,
          }}
          dropDownContainerStyle={{
            borderColor: '#E6F1EE',
          }}
        />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className='mb-10 mx-4'>
        {farmDataList.map((data: FarmData) => (
          <TouchableOpacity key={data.id} className="mb-4" onPress={() => handleCardItemPress(data.id)}>
            <CustomCardContainer
              image={data.cover}
              imageStyle="w-full h-36"
            >
              <View className="flex flex-row items-center mx-2 my-2">
                <View className="w-[80%]">
                  <MimimizedIntroduce
                    image={data.profile}
                  />
                </View>
                <View className="w-[20%]">
                  {data.hashTag.map((tag: string, index) => (
                    <View key={`${data.farmName}-${tag}-${index}`}>
                      <Hashtag tag={tag} />
                    </View>
                  ))}
                </View>
              </View>
            </CustomCardContainer>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FarmBaseScreen;
