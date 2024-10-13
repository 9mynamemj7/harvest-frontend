import React from 'react';
import { View, Text, ScrollView, Image, Alert, Pressable } from 'react-native';
import ScreenbackButton from '@/components/global/custom-button/screenback-button'
import AppLayout from '@/components/ui/app-layout'
import image from '@/assets/images/mypage-background-image.png';
import { number2wonFommater } from '@/utils/fommater';
import ServiceInformation from '@/components/service-information';
import CustomButton from '@/components/global/custom-button';
import SelectableCard from '@/components/global/card/selecable-card';
import CustomText from '@/components/global/custom-text';
import { AddIcons, MinusIcon } from '@/constants/icons';

const FarmBookingView = () => {
  const [selectedDate, setSelectedDate] = React.useState<string>("");
  const [count, setCound] = React.useState<number>(1);
  const bookingData = {
    title: '농가 체험 서비스 제목',
    participation: "3명",
    bookable: true,
    time: "4시간",
    address: "경기도 성남시 수정구",
    date: '2024년 10월 20일',
    explan: "농장체험에 대한 설명!",
    price: number2wonFommater(24000),
    per: "1명",
    email: 'ka5560@naver.com',
    maxParticipation: '5명'
  }

  const experienceDateList = [
    {month: "9", day: "15", sTime: "12:00", eTime: "17:00"},
    {month: "9", day: "20", sTime: "11:00", eTime: "15:00"},
    {month: "9", day: "30", sTime: "13:00", eTime: "14:00"},
    {month: "10", day: "05", sTime: "20:00", eTime: "21:00"},
  ]

  const handleDateCardPress = (experienceDate: any) => {
    const id = Object.values(experienceDate).join("-");
    setSelectedDate(id);
  }

  const handleMinusPress = () => {
    if (count == 1) return;
    setCound(prev => prev - 1)
  }

  const handlePlusPress = () => {
    setCound(prev => prev + 1)
  }

  const handleBookingButtonPress = () => {
    if (selectedDate == "") return Alert.alert('체험 날짜를 선택해 주세요')
    const [year,mon,start,end] = selectedDate.split('-')
    Alert.alert(
      '예약 확인 알림',
      `날짜: ${year}월 ${mon}일 ${start}~${end} \n인원수: ${count} 명\n예약을 진행하시겠습니까?`,
      [
        {text: '예약', onPress: () => Alert.alert('예약 완료 페이지 이동')},
        {text: '취소', },
      ])
  }

  const ExperienceText = ({
    month,
    day,
    sTime,
    eTime,
    selected
  }: {month: string, day: string, sTime: string, eTime: string, selected: boolean}) => {
    return (
      <View className='flex flex-col items-center'>
        <Text className={`font-semibold mb-2 ${selected ? "text-neutral-50" : "text-brand-300"}`}>{`${month}월 ${day}일`}</Text>
        <Text className={`${selected ? "text-neutral-50" : "text-gray-900"}`}>{`${sTime}~${eTime}`}</Text>
      </View>
    )
  }

  return (
    <AppLayout>
      <ScreenbackButton />
      <ServiceInformation
        image={image}
        title={bookingData.title}
        bookable={bookingData.bookable}
        time={bookingData.time}
        maxParticipation={bookingData.maxParticipation}
        address={bookingData.address}
        explan={bookingData.explan}
        priceData={{price:bookingData.price , per: bookingData.per}}
      />
      <View className='my-10 flex flex-row justify-between items-center'>
        <CustomText content='참가인원:' language='ko' size="subtitle-2" />
        <View className='w-1/2 gap-2 rounded-s flex flex-row justify-between items-center border border-brand-100/[.5]'>
          <Pressable onPress={handleMinusPress} className='p-2 border-r border-brand-100/[.5]'><Image source={MinusIcon} className='w-7 h-7' /></Pressable>
          <Text>{count}</Text>
          <Pressable onPress={handlePlusPress} className='p-2 border-l border-brand-100/[.5]'><Image source={AddIcons} className='w-7 h-7' /></Pressable>
        </View>
      </View>
      <View className='my-4 gap-2'>
        <CustomText content='현재 예약 가능 날짜' language='ko' size='subtitle-1' color='primary' />
        <CustomText content='체험 날짜를 선택해 주세요' language='ko' color='tertiary' />
      </View>
      <ScrollView horizontal>
        {experienceDateList.map((experienceDate, index) => {
          let selected: boolean = selectedDate==Object.values(experienceDate).join("-")
          return (
            <View key={index} className='w-36 h-28 mr-4 rounded-lg overflow-hidden'>
              <SelectableCard onPress={() => handleDateCardPress(experienceDate)} selected={selected}>
                <ExperienceText
                  month={experienceDate.month}
                  day={experienceDate.day}
                  sTime={experienceDate.sTime}
                  eTime={experienceDate.eTime}
                  selected={selected}
                />
              </SelectableCard>
            </View>
          )
        })}
      </ScrollView>
      <View className='my-8'>
        <CustomText content='결제 방식' language='ko' size='subtitle-1' color='primary' />
        <CustomText content='농장에 직접 결제 해주세요.' language='ko' color='tertiary' />
      </View>
      <View>
        <CustomButton
          title='예약하기'
          className='py-4'
          onPress={handleBookingButtonPress}
        />
      </View>
    </AppLayout>
  )
}

export default FarmBookingView