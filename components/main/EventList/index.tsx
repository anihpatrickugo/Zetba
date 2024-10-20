import React, {FC} from "react";
import {View, Image, TouchableOpacity, FlatList } from "react-native";
import * as UI from "@/components/common";
import { primaryColor} from "@/components/common/variables";
import EventCard from "./EventCard";


type EventListProps = {
    title: string;
    seeMore: () => void;
    data: any;
}
const EventList: FC<EventListProps> = ({title, seeMore, data}) => {
  return (
    <View style={{width: "100%"}}>
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
      <UI.CustomText size="sm" color="white" bold>{title}</UI.CustomText>

      <TouchableOpacity onPress={seeMore}>
        <UI.CustomText size="xs" color={primaryColor}>See more &gt;</UI.CustomText>
      </TouchableOpacity>
    </View>

    <View style={{width: "100%"}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: "100%"}}
        contentContainerStyle={{gap: 16}}
        renderItem={({item}) => (
         <EventCard/>
        )}
      />

    </View>
  </View>
  )
}

export default EventList
