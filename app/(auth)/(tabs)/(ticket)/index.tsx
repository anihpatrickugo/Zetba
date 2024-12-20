import {  View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import TicketList from "@/components/main/TicketList";



export default function MyTickets() {

  const navigation = useNavigation();

  

  return (
      <UI.Containner>
      

       <View style={styles.header}>
          <UI.BackButton  navigation={navigation} screenName="/(more)/index" />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">My Tickets</UI.CustomText>
           </View>
       </View>


      {/* ticket list */}
      <TicketList pathRoute="ticket-detail/[id]" />

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
