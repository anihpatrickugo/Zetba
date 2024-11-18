import { useState, useLayoutEffect } from "react";
import {  View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import MyTicketList from "@/components/main/MyTicketList";
import { getAllTickets } from "@/api/tickets";



export default function MyTickets() {

  const navigation = useNavigation();

  const [tickets, setTickets] = useState<any>(null)



    useLayoutEffect(()=>{
  
      const fetchEvents = async()=>{
        try{
            const data = await getAllTickets()
            setTickets(data.results)
           

          }catch(e){
            console.log(e)
          }

        }
  
      fetchEvents()
  
    }, [])

  

  return (
      <UI.Containner>
      

       <View style={styles.header}>
          <UI.BackButton  navigation={navigation} screenName="/(more)/index" />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">My Tickets</UI.CustomText>
           </View>
       </View>


      {/* ticket list */}
      <MyTicketList pathRoute="ticket-detail/[id]" data={tickets} />

    </UI.Containner>
  );
}

const styles = StyleSheet.create({
   header: {
      width: '100%', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    },
 
});
