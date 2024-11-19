import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import * as UI from "@/components/common/index"
import { useNavigation } from 'expo-router'
import VerticalEventList from '@/components/main/EventList/VerticalEventList'
import { getUpcommingEvents } from "@/api/events";



const upcomingEvents = () => {
    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)
    const [events, setEvents] = useState<any>(null)
  
  
  
    useEffect(()=>{
  
      setLoading(true)
      const fetchEvents = async()=>{
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
  


  return (
    <UI.Containner>
      <View style={styles.header}>
          <UI.BackButton  navigation={navigation} />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">Upcoming Events</UI.CustomText>
           </View>

       </View>

       <VerticalEventList events={events} loading={loading}/>
    </UI.Containner>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      },
})

export default upcomingEvents
