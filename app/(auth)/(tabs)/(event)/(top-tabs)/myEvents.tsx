import {useState, useLayoutEffect} from 'react';
import { View } from 'react-native';
import * as UI from "@/components/common/index";
import HorizontalEventList from '@/components/main/HorizontalEventList';
import { getMyEvents } from '@/api/events';

const Event: React.FC = () => {
    const [events, setEvents] = useState<any>(null)



    useLayoutEffect(()=>{
  
      const fetchEvents = async()=>{
        try{
            const data = await getMyEvents()
            setEvents(data.results)

          }catch(e){
            console.log(e)
          }

        }
  
      fetchEvents()
  
    }, [])
  
    // if (events === null) return <UI.CustomText size="lg">Loading</UI.CustomText>
  
    // if (events?.results.length === 0) return <UI.CustomText size="lg">No upcoming events</UI.CustomText>

    return (
        <UI.Containner>
            <View style={{ marginTop: 80}}>
               <HorizontalEventList deleteIcon data={events}/>
            </View>
        </UI.Containner>
    );
};



export default Event;