import {useState, useLayoutEffect} from 'react'
import { View, TouchableOpacity } from 'react-native'
import PopularEventCard from './PopularEventCard'
import { primaryColor } from '@/components/common/variables'
import { router } from 'expo-router'
import * as UI from "@/components/common";
import { getPopularEvents } from '@/api/events'




const PopularEventList = () => {
  
  const [events, setEvents] = useState<any>(null)



  useLayoutEffect(()=>{

    const fetchEvents = async()=>{
      const data = await getPopularEvents()
      setEvents(data)
    }

    fetchEvents()

  }, [])

  if (events === null) return <UI.CustomText size="lg">Loading</UI.CustomText>

  if (events?.results.length === 0) return <UI.CustomText size="lg">No upcoming events</UI.CustomText>

  return (
    <View style={{width: "100%"}}>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
             <UI.CustomText size="sm" color="white" bold>Popular Events</UI.CustomText>

            <TouchableOpacity onPress={()=>router.navigate("/event-detail/popularEvents")}>
               <UI.CustomText size="xs" color={primaryColor}>See more &gt;</UI.CustomText>
            </TouchableOpacity>
        </View>

       <View style={{width: "100%", marginVertical: 8, flexDirection: "row", justifyContent:"space-between", flexWrap: 'wrap'}}>
           {/* to avoid virtualized list warning, i used a map instead of a flatlist */}
            {events.results.map((item => (
              <PopularEventCard key={item.id} item={item} />
            )))}

      </View>
  </View>
  )
}

export default PopularEventList
