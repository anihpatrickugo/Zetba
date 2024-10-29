import React, {FC} from "react";
import {View, Image, TouchableOpacity, FlatList } from "react-native";
import * as UI from "@/components/common";
import { primaryColor} from "@/components/common/variables";
import UpcomingEventCard from "./UpcomingEventCard";
import { EventList } from "./types";




const UpcomingEventList: FC<EventList> = ({ seeMore, events}) => {
  return (
    <View style={{width: "100%"}}>
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
      <UI.CustomText size="sm" color="white" bold>Upcoming Events</UI.CustomText>

      <TouchableOpacity onPress={seeMore}>
        <UI.CustomText size="xs" color={primaryColor}>See more &gt;</UI.CustomText>
      </TouchableOpacity>
    </View>

    <View style={{width: "100%"}}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: "100%"}}
        contentContainerStyle={{gap: 16}}
        renderItem={({item}) => (
         <UpcomingEventCard key={item}/>
        )}
      />

    </View>
  </View>
  )
}

export default UpcomingEventList
