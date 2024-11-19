import {useState, useEffect} from 'react'
import { View, TouchableOpacity } from 'react-native'
import PopularEventCard from './PopularEventCard'
import { primaryColor } from '@/components/common/variables'
import { router } from 'expo-router'
import * as UI from "@/components/common";
import { getPopularEvents } from '@/api/events'
import PopularLoading from '@/components/LoadingSkeletons/PopularLoading'




const PopularEventList = () => {
   const [loading, setLoading] = useState<boolean>(true)
   const [events, setEvents] = useState<any>(null)



  useEffect(()=>{

    const fetchEvents = async()=>{
      setLoading(true)
      try{
        const data = await getPopularEvents()
        setEvents(data.results)
      }catch(e: any){
        console.log(e)
      }finally{
        setLoading(false)
      }
    }

    fetchEvents()

  }, [])


  if (loading) return <PopularLoading/>

  if (events?.length === 0) return <UI.CustomText size="lg">No popular event</UI.CustomText>

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
            {events?.map(((item: any) => (
              <PopularEventCard key={item.id} item={item} />
            )))}

      </View>
  </View>
  )

}
export default PopularEventList
