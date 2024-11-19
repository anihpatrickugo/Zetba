import React, {FC} from 'react'
import { View, FlatList } from 'react-native'
import * as UI from "@/components/common/index"
import VerticalEventCard from './VerticalEventCard'
import MoreEventLoading from '@/components/LoadingSkeletons/MoreEventLoading'



const VerticalEventList = ({events, loading}: any) => {

  
  if (loading) return <MoreEventLoading />
  
  
  if (events?.length === 0) return <UI.CustomText size="lg">No popular event</UI.CustomText>

  return (
    <View style={{width: "100%", alignItems: "center", marginVertical: 8}}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%"}}
        contentContainerStyle={{gap: 16, alignItems: 'center'}}
        renderItem={({item}) => (
         <VerticalEventCard key={item} event={item} />
        )}
      />

    </View>
  )
}

export default VerticalEventList
