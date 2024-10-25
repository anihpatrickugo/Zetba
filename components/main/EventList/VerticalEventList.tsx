import React, {FC} from 'react'
import { View, FlatList } from 'react-native'
import VerticalEventCard from './VerticalEventCard'


type EventListProps = {
    data: any;
}

const VerticalEventList: FC<EventListProps> = ({data}) => {
  return (
    <View style={{width: "100%", alignItems: "center", marginVertical: 8}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%"}}
        contentContainerStyle={{gap: 16, alignItems: 'center'}}
        renderItem={({item}) => (
         <VerticalEventCard key={item} />
        )}
      />

    </View>
  )
}

export default VerticalEventList
