import {useState, useEffect} from "react";
import {View, TouchableOpacity, FlatList } from "react-native";
import * as UI from "@/components/common";
import { primaryColor} from "@/components/common/variables";
import UpcomingEventCard from "./UpcomingEventCard";
import { router } from "expo-router";
import { getUpcommingEvents } from "@/api/events";
import UpcomingLoading from "@/components/LoadingSkeletons/UpcomingLoading";





const UpcomingEventList = () => {
  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState<any>(null)



  useEffect(()=>{

    const fetchEvents = async()=>{
      setLoading(true)
      try {
        const res = await getUpcommingEvents()
        setEvents(res.results)
        
      } catch (error: any) {
        console.log(error.message)
      }finally{ 
        setLoading(false)
      }
    }

    fetchEvents()

  }, [])

  if (loading) return <UpcomingLoading />


  if (events?.length === 0) return <UI.CustomText size="lg">No upcoming event</UI.CustomText>

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
        data={events}
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
