import {useState, useLayoutEffect} from "react";
import {View, TouchableOpacity, FlatList } from "react-native";
import * as UI from "@/components/common";
import { primaryColor} from "@/components/common/variables";
import UpcomingEventCard from "./UpcomingEventCard";
import { router } from "expo-router";
import { getUpcommingEvents } from "@/api/events";





const UpcomingEventList = () => {
  
  const [events, setEvents] = useState<any>(null)



  useLayoutEffect(()=>{

    const fetchEvents = async()=>{
      const data = await getUpcommingEvents()
      setEvents(data)
    }

    fetchEvents()

  }, [])

  if (events === null) return <UI.CustomText size="lg">Loading</UI.CustomText>

  // if (events?.results.length === 0) return <UI.CustomText size="lg">No upcoming events</UI.CustomText>

  return (
    <View style={{width: "100%"}}>
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
      <UI.CustomText size="sm" color="white" bold>Upcoming Events</UI.CustomText>

      <TouchableOpacity onPress={()=>router.navigate("/event-detail/upcomingEvents")}>
        <UI.CustomText size="xs" color={primaryColor}>See more &gt;</UI.CustomText>
      </TouchableOpacity>
    </View>

    <View style={{width: "100%"}}>
      <FlatList
        data={events.results}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: "100%"}}
        contentContainerStyle={{gap: 16}}
        renderItem={({item}) => (
         <UpcomingEventCard key={item.id} item={item}/>
        )}
      />

    </View>
  </View>
  )
}

export default UpcomingEventList
