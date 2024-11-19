import {useState, useEffect} from 'react';
import { View } from 'react-native';
import * as UI from "@/components/common/index";
import HorizontalEventList from '@/components/main/HorizontalEventList';
import { getMyEvents } from '@/api/events';


const Event: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState<any>(null)


  useEffect(()=>{
  
    const fetchEvents = async()=>{
      setLoading(true)
      try {
        const res = await getMyEvents()
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
            <View style={{ marginTop: 80}}>
               <HorizontalEventList deleteIcon data={events} loading={loading}/>
            </View>
        </UI.Containner>
    );
};



export default Event;