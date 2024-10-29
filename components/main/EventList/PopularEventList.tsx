import React, {FC} from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import PopularEventCard from './PopularEventCard'
import { EventList } from './types'
import { danger, primaryColor } from '@/components/common/variables'
import * as UI from "@/components/common";




const PopularEventList: FC<EventList> = ({events, seeMore}) => {
  return (
    <View style={{width: "100%"}}>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
             <UI.CustomText size="sm" color="white" bold>Popular Events</UI.CustomText>

            <TouchableOpacity onPress={seeMore}>
               <UI.CustomText size="xs" color={primaryColor}>See more &gt;</UI.CustomText>
            </TouchableOpacity>
        </View>

       <View style={{width: "100%", marginVertical: 8, flexDirection: "row", justifyContent:"space-between", flexWrap: 'wrap'}}>
           {/* to avoid virtualized list warning, i used a map instead of a flatlist */}
            {events.map((event => (
              <PopularEventCard key={event} />
            )))}

      </View>
  </View>
  )
}

export default PopularEventList
