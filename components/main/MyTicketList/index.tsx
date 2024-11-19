
import React, {useState, useEffect} from 'react'
import { FlatList } from 'react-native'
import MyTicketCard from './MyTicketCard'
import * as UI from "@/components/common/index"
import TicketEventLoading from '@/components/LoadingSkeletons/TicketEventLoading';
import { getAllTickets } from "@/api/tickets";


const MyTicketList = () => {

  const [loading, setLoading] = useState(false)
  const [tickets, setTickets] = useState<any>(null)



    useEffect(()=>{
  
      const fetchEvents = async()=>{
        setLoading(true)
        try{
            const data = await getAllTickets()
            setTickets(data.results)
           

          }catch(e){
            console.log(e)
          }finally{
            setLoading(false)
          }

        }
  
      fetchEvents()
  
    }, [])
  
    
  if(loading) return <TicketEventLoading />

  if(!tickets || tickets.length === 0) return <UI.CustomText size='lg'>No tickets found</UI.CustomText>


  return (
    <FlatList
    style={{ marginTop: 20, flex: 1}}
    contentContainerStyle={{width: '100%', gap: 15}}
    keyExtractor={(obj) => obj.id.toString()}
    data={tickets}
    showsVerticalScrollIndicator={false}
    renderItem={(obj)=> (<MyTicketCard key={obj.index} obj={obj}  />)}

  />
  )
}


export default MyTicketList
