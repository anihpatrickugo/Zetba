import React, {FC} from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import SmallVerticalEventCard from './SmallVerticalEventCard'
import { primaryColor } from '@/components/common/variables'
import * as UI from "@/components/common";


type EventListProps = {
    title: string;
    seeMore: () => void;
    data: any;
}


const SmallVerticalEventList: FC<EventListProps> = ({data, title, seeMore}) => {
  return (
    <View style={{width: "100%"}}>
<View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
  <UI.CustomText size="sm" color="white" bold>{title}</UI.CustomText>

  <TouchableOpacity onPress={seeMore}>
    <UI.CustomText size="xs" color={primaryColor}>See more &gt;</UI.CustomText>
  </TouchableOpacity>
</View>

<View style={{width: "100%", alignItems: "center", marginVertical: 8}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%"}}
        contentContainerStyle={{gap: 16}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: "space-between", width: "100%"}}
        renderItem={({item}) => (
         <SmallVerticalEventCard key={item} />
        )}
      />

    </View>
</View>
  )
}

export default SmallVerticalEventList
